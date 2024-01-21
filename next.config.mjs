import withNextIntl from 'next-intl/plugin'

const locale = withNextIntl()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default locale(nextConfig)
