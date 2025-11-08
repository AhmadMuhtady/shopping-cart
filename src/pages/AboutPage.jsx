import { ShoppingCart } from 'lucide-react';
const AboutPage = () => {
	return (
		<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<div className="flex items-center justify-center gap-2 mb-6">
				<ShoppingCart className="bg-blue-500 rounded p-1 font-bold" size={30} />
				<h1 className="text-2xl font-bold text-gray-900"> About ShopVerse</h1>
			</div>

			<p className="text-gray-700 text-lg leading-relaxed mb-6">
				Welcome to <strong>ShopVerse</strong> — your go-to place for exploring
				and discovering amazing products online! This project was built using{' '}
				<strong>React</strong> to practice concepts like components, state
				management, fetching data with APIs, and filtering logic.
			</p>

			<section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-3">Our Goal</h2>
				<p className="text-gray-600">
					The goal of ShopVerse is to make online shopping simple and organized
					while learning React hooks such as <code>useState</code> and{' '}
					<code>useEffect</code>. It also includes a favorites system, product
					sorting, and category filtering to simulate a small e-commerce
					experience.
				</p>
			</section>

			<section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-3">
					Technologies Used
				</h2>
				<ul className="list-disc list-inside text-gray-600">
					<li>React (Functional Components + Hooks)</li>
					<li>FakeStoreAPI for sample products</li>
					<li>Tailwind CSS for styling</li>
					<li>JavaScript ES6+ features</li>
				</ul>
			</section>

			<section className="bg-gray-50 p-6 rounded-xl shadow-sm">
				<h2 className="text-xl font-semibold text-gray-800 mb-3">Summary</h2>
				<p className="text-gray-600">
					This About page is part of the ShopVerse training project — made to
					practice working with APIs, state, filtering, and UI layout in React.
					Feel free to explore, modify, and experiment with the code!
				</p>
			</section>
		</main>
	);
};

export default AboutPage;
