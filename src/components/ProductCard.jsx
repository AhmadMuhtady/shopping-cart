import { ShoppingCartIcon, Star } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product }) => {
	return (
		<div className="bg-white rounded-lg shadow p-4 flex flex-col h-full hover:shadow-xl hover:scale-105 transition-transform duration-200">
			<div className="aspect-square overflow-hidden rounded-lg mb-3">
				<img
					src={product.image}
					alt={`image of ${product.title}`}
					className="w-full h-full object-contain"
				/>
			</div>

			<h2 className="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
				{product.title}
			</h2>

			<h3 className="text-blue-600 text-xs mb-2">{product.category}</h3>

			<p className="text-gray-500 text-sm mb-3 line-clamp-2">
				{product.description}
			</p>

			<div className="mt-auto">
				<div className="flex justify-between items-center mb-3">
					<p className="font-bold text-xl">${product.price.toFixed(2)}</p>
					<div className="flex items-center gap-1 text-sm">
						<Star size={16} className="fill-yellow-400 text-yellow-400" />
						<span className="font-semibold">{product.rating.rate}</span>
						<span className="text-gray-500">({product.rating.count})</span>
					</div>
				</div>

				<Button
					Icon={ShoppingCartIcon}
					size={16}
					btnClassName="bg-blue-600 font-bold text-white w-full px-4 py-2 rounded transition hover:bg-blue-700 flex items-center justify-center gap-2 active:scale-[0.95] transition-transform"
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
