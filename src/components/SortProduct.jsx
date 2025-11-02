const SortProduct = ({ setSortBy }) => {
	return (
		<div>
			<select
				onChange={(e) => setSortBy(e.target.value)}
				className="p-1 bg-black/5 backdrop-blur-sm border border-black/30 rounded-lg text-black focus:outline-none focus:border-black/60 focus:ring-2 focus:ring-black/20 transition-all text-black"
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
