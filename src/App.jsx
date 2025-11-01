import { Header } from './components/Header';
import ProductList from './components/ProductList';

import Spinner from './components/Spinner';

import { useProducts } from './hooks/useProducts';
const App = () => {
	const { products, categories, loading, error } = useProducts();
	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Spinner />
			</div>
		);
	if (error) return <div className="text-red-500">Error: {error}</div>;

	return (
		<div>
			<Header />
			<ProductList products={products} />
		</div>
	);
};

export default App;
