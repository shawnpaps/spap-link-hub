import React from 'react';

export default function LinkTree() {
	return (
		<section className="space-y-4">
			<h2 className="text-lg font-semibold text-gray-300 text-center mb-6 tracking-wider">
				EXPLORE
			</h2>

			<div className="space-y-4">
				{/* Portfolio */}
				<a
					href="https://shawnpapineau.dev"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-[1.02] hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="relative flex items-center space-x-4">
						<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
								PORTFOLIO
							</h3>
							<p className="text-sm text-gray-400">
								View my latest projects and code
							</p>
						</div>
						<svg
							className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
				</a>

				{/* Music */}
				<a
					href="https://soundcloud.com/shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-[1.02] hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="relative flex items-center space-x-4">
						<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
								MUSIC
							</h3>
							<p className="text-sm text-gray-400">
								Listen to my latest tracks and productions
							</p>
						</div>
						<svg
							className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
				</a>

				{/* Photography */}
				<a
					href="https://unsplash.com/@shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-[1.02] hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="relative flex items-center space-x-4">
						<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
								PHOTOGRAPHY
							</h3>
							<p className="text-sm text-gray-400">
								Browse my photo collection and visual work
							</p>
						</div>
						<svg
							className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
				</a>

				{/* Blog */}
				<a
					href="/blog"
					className="group relative block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-[1.02] hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="relative flex items-center space-x-4">
						<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
								BLOG
							</h3>
							<p className="text-sm text-gray-400">
								Read my thoughts on tech, music, and creativity
							</p>
						</div>
						<svg
							className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</a>

				{/* Contact */}
				<a
					href="mailto:shawn@papineau.dev"
					className="group relative block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-[1.02] hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div className="relative flex items-center space-x-4">
						<div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
								GET IN TOUCH
							</h3>
							<p className="text-sm text-gray-400">
								Let's collaborate on something amazing
							</p>
						</div>
						<svg
							className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
				</a>
			</div>
		</section>
	);
}
