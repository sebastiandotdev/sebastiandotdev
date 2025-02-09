import { withContentlayer } from 'next-contentlayer2'

export default withContentlayer({
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
})
