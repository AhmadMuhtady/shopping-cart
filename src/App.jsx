import Header from './components/Header';
import { useProducts } from './hooks/useProducts';
const App = () => {
	const { products, categories, loading, error } = useProducts();
	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	if (error) return <div className="text-red-500">Error: {error}</div>;

	return <Header />;
};

export default App;
