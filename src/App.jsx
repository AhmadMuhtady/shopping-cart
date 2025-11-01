import { useState } from 'react';
import { Header } from './components/Header';
import ProductList from './components/ProductList';

import Spinner from './components/Spinner';

import { useProducts } from './hooks/useProducts';
import CategoryFilter from './components/CategoryFilter';
const App = () => {
	const { products, categories, loading, error } = useProducts();
	const [searchInput, setSearchInput] = useState('');
	const [categoriesFilter, setCategoriesFilter] = useState('All Categories');

	const filteredProduct = products
		.filter((product) =>
			product.title.toLowerCase().includes(searchInput.toLowerCase())
		)
		.filter((product) =>
			categoriesFilter && categoriesFilter !== 'All Categories'
				? product.category === categoriesFilter
				: true
		);

	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Spinner />
			</div>
		);
	if (error) return <div className="text-red-500">Error: {error}</div>;

	return (
		<div>
			<Header setSearchInput={setSearchInput} searchInput={searchInput} />
			<CategoryFilter
				categories={categories}
				setCategoriesFilter={setCategoriesFilter}
			/>
			<ProductList products={filteredProduct} />
		</div>
	);
};

export default App;
