import { useCart } from '../context/CartContext';
import Button from './Button';
const CartItem = ({ item }) => {
	const { removingFromCart, updateQuantity, cart } = useCart();
	return (
		<li className="flex justify-between item-canter py-2">
			<div>
				<p className="font-semibold">{item.title}</p>
				<p className="text-sm text-gray-500">
					{item.cartQty} x ${item.price}
				</p>
			</div>
			<Button
				onClick={() => removingFromCart(item.id)}
				btnClassName="text-sm text-red-500 hover:underline"
			>
				Remove
			</Button>
		</li>
	);
};

export default CartItem;
