import { useState, useEffect } from 'react';

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
					fetch('https://fakestoreapi.com/products'),
					fetch('https://fakestoreapi.com/products/categories'),
				]);

				if (!productsRes.ok || !categoriesRes.ok)
					throw new Error('Failed to fetch Data!');
				const promiseData = await productsRes.json();
				const categoriesData = await categoriesRes.json();

				setProducts(promiseData);
				setCategories(categoriesData);
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
