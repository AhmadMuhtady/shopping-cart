const SortProduct = ({ setSortBy }) => {
	return (
		<div>
			<select
				onChange={(e) => setSortBy(e.target.value)}
				className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
				name="sort"
				id="sort"
			>
				<option value="default">Default</option>
				<option value="price-asc">Price: Low to High</option>
				<option value="price-desc">Price: High to Low</option>
				<option value="name-asc">Name: A-Z</option>
				<option value="rating-desc">Rating: Highest</option>
			</select>
		</div>
	);
};

export default SortProduct;
