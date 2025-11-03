import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
const Cart = () => {
	const { cart } = useCart();
	return (
		<div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
			<div className="p-4">
				<h2 className="font-semibold text-lg mb-2">Cart Items</h2>
				{cart.length === 0 ? (
					<p className="text-gray-500 text-sm">Cart is Empty</p>
				) : (
					<ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
						{cart.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Cart;
