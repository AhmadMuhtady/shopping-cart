import { useState, useEffect, useContext, createContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const stored = localStorage.getItem('Cart');
		return stored ? JSON.parse(stored) : [];
	});
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => setIsCartOpen(!isCartOpen);

	useEffect(() => {
		localStorage.setItem('Cart', JSON.stringify(cart));
	}, [cart]);
	const totalItems = cart.reduce((sum, item) => sum + item.cartQty, 0);
	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.cartQty,
		0
	);

	const addToCart = (product) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				return prev.map((item) =>
					item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item
				);
			}

			return [...prev, { ...product, cartQty: 1 }];
		});
	};

	const removingFromCart = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const updateQuantity = (id, newQty) => {
		if (newQty <= 0) {
			removingFromCart(id);
			return;
		}

		setCart((prev) =>
			prev.map((item) => (item.id === id ? { ...item, cartQty: newQty } : item))
		);
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				clearCart,
				removingFromCart,
				addToCart,
				updateQuantity,
				cart,
				totalItems,
				totalPrice,
				toggleCart,
				isCartOpen,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};
