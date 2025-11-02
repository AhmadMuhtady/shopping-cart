import { PackageX } from 'lucide-react';

import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
	if (products.length <= 0) {
		return (
			<div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-500">
				<PackageX size={64} />
				<h2 className="text-2xl font-semibold">No Products Found</h2>
				<p className="text-sm">Try adjusting your search or filters</p>
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
