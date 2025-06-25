import React from 'react';

export default function HeroSection() {
	return (
		<section className="text-center space-y-6">
			{/* Profile Image */}
			<div className="relative mx-auto w-32 h-32 mb-6">
				<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
				<img
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
					alt="Shawn Papineau"
					className="relative w-full h-full rounded-full object-cover border-4 border-red-500/30 shadow-2xl"
				/>
				<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full border-4 border-black animate-pulse"></div>
			</div>

			{/* Name and Title */}
			<div className="space-y-2">
				<h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
					SHAWN PAPINEAU
				</h1>
				<p className="text-lg text-gray-300 font-medium tracking-wider">
					DEVELOPER • PRODUCER • PHOTOGRAPHER
				</p>
				<p className="text-sm text-gray-400 max-w-md mx-auto">
					Crafting digital experiences, composing sonic landscapes, and
					capturing moments through the lens
				</p>
			</div>

			{/* Status Indicator */}
			<div className="flex items-center justify-center space-x-2 text-sm">
				<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
				<span className="text-gray-400 font-mono">
					READY FOR COLLABORATIONS
				</span>
			</div>
		</section>
	);
}
