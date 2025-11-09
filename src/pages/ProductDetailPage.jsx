import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { useCart } from '../context/CartContext';

import { Heart, Star, ShoppingCartIcon } from 'lucide-react';

import Spinner from '../components/Spinner';
import Button from '../components/Button';

const API_URL = import.meta.env.VITE_API_URL;

const ProductDetailPage = ({ isFavorite, toggleFavorite }) => {
	const { id } = useParams();
	const { addToCart } = useCart();
	const navigate = useNavigate();

	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const productRes = await fetch(`${API_URL}/${id}`);

				if (!productRes.ok) throw new Error('Failed to fetch Data!');
				const promiseData = await productRes.json();

				setProduct(promiseData);
				console.log(promiseData);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Spinner />
			</div>
		);
	if (error) return <div className="text-red-500">Error: {error}</div>;
	return (
		<div className="max-w-6xl mx-auto px-4 py-8">
			<button
				onClick={() => navigate(-1)}
				className="mb-4 text-blue-600 hover:underline"
			>
				← Back to Products
			</button>

			<div className="flex flex-col md:flex-row items-start justify-center gap-8">
				<div className="relative bg-white rounded-lg shadow p-6 w-full md:w-1/2">
					<button
						onClick={() => toggleFavorite(product)}
						className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
					>
						<Heart
							size={30}
							className={
								isFavorite(product.id)
									? 'fill-red-500 text-red-500'
									: 'text-gray-400'
							}
						/>
					</button>

					<div className="aspect-square overflow-hidden rounded-lg">
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<h2 className="text-3xl font-bold mb-2">{product.title}</h2>

					<h3 className="text-blue-600 text-sm uppercase mb-4">
						{product.category}
					</h3>

					<p className="text-gray-700 text-base mb-6 leading-relaxed">
						{product.description}
					</p>

					<div className="flex items-center gap-2 mb-6">
						<Star size={20} className="fill-yellow-400 text-yellow-400" />
						<span className="font-semibold text-lg">{product.rating.rate}</span>
						<span className="text-gray-500">
							({product.rating.count} reviews)
						</span>
					</div>

					<p className="font-bold text-4xl text-gray-900 mb-6">
						${product.price.toFixed(2)}
					</p>

					<Button
						onClick={() => addToCart(product)}
						Icon={ShoppingCartIcon}
						size={20}
						btnClassName="bg-blue-600 font-bold text-white w-full px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
					>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
