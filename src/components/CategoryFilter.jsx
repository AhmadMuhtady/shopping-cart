const CategoryFilter = ({ setCategoriesFilter, categories }) => {
	return (
		<div>
			<select
				className="p-1 m-3 bg-black/5 backdrop-blur-sm border border-black/30 rounded-lg text-black focus:outline-none focus:border-black/60 focus:ring-2 focus:ring-black/20 transition-all text-black"
				name="category"
				id="category"
				onChange={(e) => setCategoriesFilter(e.target.value)}
			>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
};

export default CategoryFilter;
