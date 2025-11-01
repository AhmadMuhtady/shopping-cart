import { SearchIcon } from 'lucide-react';

const SearchBar = ({ setSearchInput, searchInput }) => {
	return (
		<div className="relative max-w-2xl mx-auto">
			<input
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				type="text"
				placeholder="Search for Products"
				className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
			/>
			<SearchIcon
				className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-600 transition-colors"
				size={20}
			/>
		</div>
	);
};

export default SearchBar;
