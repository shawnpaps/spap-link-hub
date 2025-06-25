import React from 'react';

export default function SocialLinks() {
	return (
		<section className="space-y-4">
			<h2 className="text-lg font-semibold text-gray-300 text-center mb-6 tracking-wider">
				CONNECT
			</h2>

			<div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
				{/* GitHub */}
				<a
					href="https://github.com/shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<svg
						className="relative w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors duration-300"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>

				{/* LinkedIn */}
				<a
					href="https://linkedin.com/in/shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<svg
						className="relative w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors duration-300"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>

				{/* Twitter/X */}
				<a
					href="https://twitter.com/shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<svg
						className="relative w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors duration-300"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
					</svg>
				</a>

				{/* Instagram */}
				<a
					href="https://instagram.com/shawnpapineau"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 hover:bg-red-900/20">
					<div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<svg
						className="relative w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors duration-300"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z" />
					</svg>
				</a>
			</div>
		</section>
	);
}
