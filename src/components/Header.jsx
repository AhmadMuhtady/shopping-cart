import { ShoppingCart } from 'lucide-react';
import Button from './Button';

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* LEFT: Logo/Brand */}
					<div className="flex items-center gap-2">
						<ShoppingCart className="text-blue-600" size={28} />
						<h1 className="text-2xl font-bold text-gray-900">ShopVerse</h1>
					</div>

					<Button
						Icon={ShoppingCart}
						btnClassName={
							'relative p-2 hover:bg-gray-100 rounded-lg transition'
						}
						size={24}
						spanClassName={
							'absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'
						}
					>
						0
					</Button>
				</div>
			</div>
		</header>
	);
};
