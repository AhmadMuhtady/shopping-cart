import { useState } from 'react';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import ToolManagerBar from './components/ToolManagerBar';
import Spinner from './components/Spinner';

import { useProducts } from './hooks/useProducts';

const App = () => {
	const { products, categories, loading, error } = useProducts();
	const [searchInput, setSearchInput] = useState('');
	const [categoriesFilter, setCategoriesFilter] = useState('All Categories');
	const [sortBy, setSortBy] = useState('default');

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
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<ToolManagerBar
					categories={categories}
					setCategoriesFilter={setCategoriesFilter}
					setSearchInput={setSearchInput}
					searchInput={searchInput}
				/>
				<ProductList products={filteredProduct} />
			</main>
		</div>
	);
};

export default App;
