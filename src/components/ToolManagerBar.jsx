import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import SortProduct from './SortProduct';

const ToolManagerBar = ({
	categories,
	setCategoriesFilter,
	setSearchInput,
	searchInput,
	setSortBy,
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 mb-5 items-center">
			<CategoryFilter
				categories={categories}
				setCategoriesFilter={setCategoriesFilter}
			/>
			<div className="w-full md:flex-1">
				<SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
			</div>
			<SortProduct setSortBy={setSortBy} />
		</div>
	);
};

export default ToolManagerBar;
