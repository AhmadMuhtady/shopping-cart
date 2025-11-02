import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

const ToolManagerBar = ({
	categories,
	setCategoriesFilter,
	setSearchInput,
	searchInput,
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
			<CategoryFilter
				categories={categories}
				setCategoriesFilter={setCategoriesFilter}
			/>
			<div className="w-full md:flex-1">
				<SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
			</div>
		</div>
	);
};

export default ToolManagerBar;
