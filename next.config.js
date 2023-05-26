/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'tailwindui.com',
            's3.us-east-2.amazonaws.com',
            'framebound.s3.us-east-2.amazonaws.com',
            'files.stripe.com',
        ],
    },
}

module.exports = nextConfig
