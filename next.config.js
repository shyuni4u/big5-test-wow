/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['lh3.googleusercontent.com']
  // },
  reactStrictMode: true,
  generateBuildId: async () => {
    return process.env.VERSION || '0.0.0'
  },
  env: {
    SERVER_HOST: process.env.SERVER_HOST
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgProps: {
              fill: 'currentColor'
            },
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIds: false
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
