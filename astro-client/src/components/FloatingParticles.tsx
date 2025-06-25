import { useEffect, useRef, useState } from 'react';

interface FilmBurn {
	x: number;
	y: number;
	width: number;
	height: number;
	opacity: number;
	rotation: number;
	type: 'burn' | 'scratch' | 'artifact';
	life: number;
	maxLife: number;
}

export default function FilmBurns() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const burnsRef = useRef<FilmBurn[]>([]);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Initialize film burns
		const initBurns = () => {
			const burns: FilmBurn[] = [];

			// Create initial burns
			for (let i = 0; i < 8; i++) {
				burns.push(createRandomBurn(canvas.width, canvas.height));
			}

			burnsRef.current = burns;
		};

		const createRandomBurn = (width: number, height: number): FilmBurn => {
			const types: ('burn' | 'scratch' | 'artifact')[] = [
				'burn',
				'scratch',
				'artifact',
			];
			const type = types[Math.floor(Math.random() * types.length)];

			return {
				x: Math.random() * width,
				y: Math.random() * height,
				width:
					type === 'burn' ? Math.random() * 200 + 50 : Math.random() * 100 + 20,
				height:
					type === 'burn' ? Math.random() * 300 + 100 : Math.random() * 50 + 10,
				opacity: Math.random() * 0.3 + 0.1,
				rotation: Math.random() * Math.PI * 2,
				type,
				life: Math.random() * 100,
				maxLife: Math.random() * 200 + 100,
			};
		};

		const drawBurn = (burn: FilmBurn, ctx: CanvasRenderingContext2D) => {
			ctx.save();
			ctx.translate(burn.x, burn.y);
			ctx.rotate(burn.rotation);

			const lifeRatio = burn.life / burn.maxLife;
			const currentOpacity = burn.opacity * (1 - lifeRatio * 0.5);

			if (burn.type === 'burn') {
				// Draw film burn effect
				const gradient = ctx.createRadialGradient(
					0,
					0,
					0,
					0,
					0,
					burn.width / 2
				);
				gradient.addColorStop(0, `rgba(255, 0, 0, ${currentOpacity * 0.8})`);
				gradient.addColorStop(
					0.3,
					`rgba(255, 100, 0, ${currentOpacity * 0.6})`
				);
				gradient.addColorStop(
					0.7,
					`rgba(255, 200, 0, ${currentOpacity * 0.3})`
				);
				gradient.addColorStop(1, 'transparent');

				ctx.fillStyle = gradient;
				ctx.fillRect(
					-burn.width / 2,
					-burn.height / 2,
					burn.width,
					burn.height
				);

				// Add some black charred areas
				ctx.fillStyle = `rgba(0, 0, 0, ${currentOpacity * 0.4})`;
				ctx.fillRect(
					-burn.width / 3,
					-burn.height / 3,
					burn.width / 1.5,
					burn.height / 1.5
				);
			} else if (burn.type === 'scratch') {
				// Draw scratch effect
				ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
				ctx.lineWidth = Math.random() * 3 + 1;
				ctx.beginPath();
				ctx.moveTo(-burn.width / 2, -burn.height / 2);
				ctx.lineTo(burn.width / 2, burn.height / 2);
				ctx.stroke();

				// Add some color variation
				ctx.strokeStyle = `rgba(255, 0, 0, ${currentOpacity * 0.3})`;
				ctx.lineWidth = Math.random() * 2 + 0.5;
				ctx.beginPath();
				ctx.moveTo(-burn.width / 2 + 2, -burn.height / 2 + 2);
				ctx.lineTo(burn.width / 2 + 2, burn.height / 2 + 2);
				ctx.stroke();
			} else if (burn.type === 'artifact') {
				// Draw film artifact
				ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
				ctx.fillRect(
					-burn.width / 2,
					-burn.height / 2,
					burn.width,
					burn.height
				);

				// Add some color bleeding
				ctx.fillStyle = `rgba(255, 0, 0, ${currentOpacity * 0.4})`;
				ctx.fillRect(
					-burn.width / 2 + 5,
					-burn.height / 2 + 5,
					burn.width - 10,
					burn.height - 10
				);
			}

			ctx.restore();
		};

		initBurns();

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw burns
			burnsRef.current.forEach((burn, index) => {
				burn.life += 1;

				// Remove dead burns and create new ones
				if (burn.life > burn.maxLife) {
					burnsRef.current[index] = createRandomBurn(
						canvas.width,
						canvas.height
					);
				} else {
					drawBurn(burn, ctx);
				}
			});

			// Occasionally add new burns
			if (Math.random() < 0.02) {
				burnsRef.current.push(createRandomBurn(canvas.width, canvas.height));
			}

			// Keep burn count manageable
			if (burnsRef.current.length > 12) {
				burnsRef.current.shift();
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-0"
			style={{ background: 'transparent' }}
		/>
	);
}
