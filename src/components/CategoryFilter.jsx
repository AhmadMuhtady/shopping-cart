const CategoryFilter = ({ setCategoriesFilter, categories }) => {
	return (
		<div>
			<select
				className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
				name="category"
				id="category"
				onChange={(e) => setCategoriesFilter(e.target.value)}
			>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</option>
				))}
			</select>
		</div>
	);
};

export default CategoryFilter;
