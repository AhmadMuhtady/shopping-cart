import { ShoppingCart, ShoppingBag, House, Store } from 'lucide-react';

import { Link } from 'react-router';

import Button from './Button';

import { useCart } from '../context/CartContext';

export const Header = ({}) => {
	const { totalItems, toggleCart } = useCart();
	return (
		<header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link to="/">
						<div className="flex items-center gap-2">
							<ShoppingCart
								className="bg-blue-500 rounded p-1 font-bold"
								size={30}
							/>
							<h1 className="text-2xl font-bold text-gray-900">ShopVerse</h1>
						</div>
					</Link>

					<div className="flex items-center justify-center gap-4">
						<Link
							to="/"
							className="group inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
						>
							<Store
								size={18}
								className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
							/>
							<span>Home</span>
						</Link>
						<Link
							to="/about"
							className="group inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
						>
							<House
								size={18}
								className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
							/>
							<span>About</span>
						</Link>

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
			</div>
		</header>
	);
};
