import { X, ShoppingBagIcon, TrashIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import Button from './Button';

const Cart = () => {
	const { cart, toggleCart, totalPrice, clearCart } = useCart();

	return (
		<>
			<div
				onClick={toggleCart}
				className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
			/>

			<div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col">
				<div className="p-5 border-b flex justify-between items-center">
					<h2 className="text-xl font-bold">Shopping Cart</h2>
					<Button
						onClick={toggleCart}
						Icon={X}
						size={24}
						btnClassName="text-gray-600 hover:text-white hover:bg-red-500 rounded-full transition-all "
					/>
				</div>

				<div className="flex-1 overflow-y-auto p-6">
					{cart.length === 0 ? (
						<p className="text-gray-500">Your cart is empty</p>
					) : (
						<ul className="space-y-4">
							{cart.map((item) => (
								<CartItem key={item.id} item={item} />
							))}
						</ul>
					)}
				</div>

				<div className="p-6 border-t bg-gray-50">
					<div className="mb-4">
						<p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
					</div>

					<Button
						Icon={ShoppingBagIcon}
						btnClassName="bg-blue-600 font-bold text-white w-full px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 active:scale-[0.95] transition-[background-color,transform] mb-2"
						size={24}
					>
						Checkout
					</Button>

					<Button
						onClick={clearCart}
						Icon={TrashIcon}
						btnClassName="bg-red-500 font-bold text-white w-full px-4 py-2 rounded  hover:bg-red-600 flex items-center justify-center gap-2 active:scale-[0.95] transition-[background-color,transform]"
						size={24}
					>
						Clear Cart
					</Button>
				</div>
			</div>
		</>
	);
};

export default Cart;
