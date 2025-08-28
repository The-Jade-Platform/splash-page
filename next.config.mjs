/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export',
	basePath: '/docs',
	assetPrefix: '/docs/',
	images: {
		unoptimized: true,
	},
	trailingSlash: true
};

export default nextConfig;
