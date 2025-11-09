import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			setError(null);
			try {
				const [productsRes, categoriesRes] = await Promise.all([
					fetch(API_URL),
					fetch(`${API_URL}/categories`),
				]);

				if (!productsRes.ok || !categoriesRes.ok)
					throw new Error('Failed to fetch Data!');
				const promiseData = await productsRes.json();
				const categoriesData = await categoriesRes.json();

				setProducts(promiseData);
				console.dir(promiseData);
				setCategories(['All Categories', ...categoriesData]);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return { products, categories, loading, error };
};
