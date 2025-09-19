/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Temporarily disable CSS optimization to fix build issues
    experimental: {
        optimizeCss: false,
    },
    // Alternative approach: configure webpack to be less aggressive with CSS minification
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Find CSS minimizer plugin and make it less aggressive
            const CssMinimizerPlugin = config.optimization.minimizer.find(
                (plugin) => plugin.constructor.name === 'CssMinimizerPlugin'
            )
            if (CssMinimizerPlugin) {
                CssMinimizerPlugin.options.minimizerOptions = {
                    ...CssMinimizerPlugin.options.minimizerOptions,
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                            normalizeWhitespace: false, // Prevent aggressive whitespace removal
                        },
                    ],
                }
            }
        }
        return config
    },
}

module.exports = nextConfig
