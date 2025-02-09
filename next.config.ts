import { withContentlayer } from 'next-contentlayer2'

export default withContentlayer({
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
})
