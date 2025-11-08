import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import ToolManagerBar from './components/ToolManagerBar';
import Spinner from './components/Spinner';
import Cart from './components/Cart';
import { useCart } from './context/CartContext';

import { useProducts } from './hooks/useProducts';

const App = () => {
	const { products, categories, loading, error } = useProducts();
	const [searchInput, setSearchInput] = useState('');
	const [categoriesFilter, setCategoriesFilter] = useState('All Categories');
	const [sortBy, setSortBy] = useState('default');

	const { isCartOpen } = useCart();

	const [favorite, setFavorite] = useState(() => {
		const stored = localStorage.getItem('favorites');
		return stored ? JSON.parse(stored) : [];
	});

	// Save to localStorage when favorites change
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorite));
	}, [favorite]);

	const isFavorite = (productId) => {
		return favorite.some((item) => item.id === productId);
	};

	const toggleFavorite = (product) => {
		setFavorite((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				return prev.filter((item) => item.id !== product.id);
			}

			return [...prev, product];
		});
	};

	const sortingProduct = (products, sortBy) => {
		const sorted = [...products];
		switch (sortBy) {
			case 'price-asc':
				sorted.sort((a, b) => a.price - b.price);
				break;
			case 'price-desc':
				sorted.sort((a, b) => b.price - a.price);
				break;
			case 'name-asc':
				sorted.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 'rating-desc':
				sorted.sort((a, b) => b.rating.rate - a.rating.rate);
				break;
			case 'default':
			default:
				return sorted;
		}
		return sorted;
	};

	const filteredProduct = sortingProduct(
		products
			.filter((product) =>
				product.title.toLowerCase().includes(searchInput.toLowerCase())
			)
			.filter((product) =>
				categoriesFilter && categoriesFilter !== 'All Categories'
					? product.category === categoriesFilter
					: true
			),
		sortBy
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
			{isCartOpen && <Cart />}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<ToolManagerBar
					categories={categories}
					setCategoriesFilter={setCategoriesFilter}
					setSearchInput={setSearchInput}
					searchInput={searchInput}
					setSortBy={setSortBy}
				/>
				<ProductList
					products={filteredProduct}
					toggleFavorite={toggleFavorite}
					isFavorite={isFavorite}
				/>
			</main>
		</div>
	);
};

export default App;
