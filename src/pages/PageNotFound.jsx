import { Link } from 'react-router-dom';
import { Rocket, Store } from 'lucide-react';

const PageNotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-indigo-600 text-white text-center px-6">
			<div className="relative">
				<Rocket className="w-20 h-20 text-yellow-400 mb-6 animate-spin-slow" />
				<div className="absolute -top-6 -right-10 text-8xl font-bold text-indigo-300 opacity-20 select-none">
					404
				</div>
			</div>

			<h1 className="text-4xl font-extrabold mb-4">
				Houston, we lost a page 🚀
			</h1>
			<p className="text-indigo-100 max-w-md mb-8">
				It seems this part of the ShopVerse hasn’t been discovered yet. Let’s
				head back before we float away into the void.
			</p>

			<Link
				to="/"
				className="inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition"
			>
				<Store size={18} />
				Back to Home
			</Link>
		</div>
	);
};

export default PageNotFound;
