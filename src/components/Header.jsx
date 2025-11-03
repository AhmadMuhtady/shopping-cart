import { ShoppingCart, ShoppingBag } from 'lucide-react';

import Button from './Button';

import { useCart } from '../context/CartContext';

export const Header = ({}) => {
	const { totalItems, toggleCart } = useCart();
	return (
		<header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center gap-2">
						<ShoppingCart
							className="bg-blue-500 rounded p-1 font-bold"
							size={30}
						/>
						<h1 className="text-2xl font-bold text-gray-900">ShopVerse</h1>
					</div>

					<Button
						onClick={toggleCart}
						Icon={ShoppingBag}
						btnClassName="relative p-2 hover:bg-gray-100 rounded-lg transition"
						size={24}
						badge={totalItems}
						spanClassName="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
					/>
				</div>
			</div>
		</header>
	);
};
