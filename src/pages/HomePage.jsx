import ProductList from '../components/ProductList';
import ToolManagerBar from '../components/ToolManagerBar';

const HomePage = ({
	products,
	searchInput,
	categoriesFilter,
	sortBy,
	categories,
	setCategoriesFilter,
	setSearchInput,
	setSortBy,
	favorite,
	setFavorite,
	isFavorite,
	toggleFavorite,
}) => {
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

	return (
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
	);
};

export default HomePage;
