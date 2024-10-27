import withNextIntl from 'next-intl/plugin';

// Config custom i18n path.
const withNextIntlConfig = withNextIntl('./src/libs/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntlConfig(nextConfig);
