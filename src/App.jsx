import { useState, useEffect } from 'react';

import { useCart } from './context/CartContext';
import { useProducts } from './hooks/useProducts';

import { Header } from './components/Header';
import Spinner from './components/Spinner';
import Cart from './components/Cart';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
	const { products, categories, loading, error } = useProducts();
	const [searchInput, setSearchInput] = useState('');
	const [categoriesFilter, setCategoriesFilter] = useState('All Categories');
	const [sortBy, setSortBy] = useState('default');

	const [favorite, setFavorite] = useState(() => {
		const stored = localStorage.getItem('favorites');
		return stored ? JSON.parse(stored) : [];
	});

	const isFavorite = (productId) => {
		return favorite.find((item) => item.id === productId);
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

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorite));
	}, [favorite]);
	const { isCartOpen } = useCart();

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
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							searchInput={searchInput}
							products={products}
							categoriesFilter={categoriesFilter}
							sortBy={sortBy}
							categories={categories}
							setCategoriesFilter={setCategoriesFilter}
							setSearchInput={setSearchInput}
							setSortBy={setSortBy}
							favorite={favorite}
							setFavorite={setFavorite}
							isFavorite={isFavorite}
							toggleFavorite={toggleFavorite}
						/>
					}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route
					path="/product/:id"
					element={
						<ProductDetailPage
							isFavorite={isFavorite}
							toggleFavorite={toggleFavorite}
						/>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default App;
