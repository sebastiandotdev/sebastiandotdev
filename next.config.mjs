import withNextIntl from 'next-intl/plugin'
import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

const locale = withNextIntl()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

if(process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default locale(nextConfig)
