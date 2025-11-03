import { X, Minus, Plus } from 'lucide-react';

import { useCart } from '../context/CartContext';
import Button from './Button';
const CartItem = ({ item }) => {
	const { removingFromCart, updateQuantity } = useCart();
	return (
		<li className="flex justify-start items-center gap-4 p-3">
			<div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
				<img
					src={item.image}
					alt={`image of ${item.title}`}
					className="w-full h-full object-contain"
				/>
			</div>

			<div>
				<div className="flex justify-between gap-4">
					<h2 className="text-sm font-semibold line-clamp-2">{item.title}</h2>
					<Button
						onClick={() => removingFromCart(item.id)}
						Icon={X}
						size={16}
						btnClassName="text-gray-600 hover:text-white hover:bg-red-500 rounded-full transition-all "
					/>
				</div>
				<p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
				<div className="flex items-center gap-2 mt-2">
					<Button
						onClick={() => updateQuantity(item.id, item.cartQty - 1)}
						Icon={Minus}
						size={16}
						btnClassName="text-gray-600 hover:text-white hover:bg-red-500 rounded-full transition-all "
					/>
					<span className="px-3 py-1 bg-gray-100 rounded min-w-[2rem] text-center">
						{item.cartQty}
					</span>
					<Button
						onClick={() => updateQuantity(item.id, item.cartQty + 1)}
						Icon={Plus}
						size={16}
						btnClassName="text-gray-600 hover:text-white hover:bg-green-500 rounded-full transition-all "
					/>
				</div>
				<p className="text-sm font-bold text-gray-900 mt-1">
					Subtotal: ${(item.price * item.cartQty).toFixed(2)}
				</p>
			</div>
		</li>
	);
};

export default CartItem;
