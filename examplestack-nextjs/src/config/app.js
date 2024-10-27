import '@/libs/env.ts'

export default defineConfig({
  timezone: process.env.APP_TIMEZONE || 'UTC',
  locale: process.env.APP_LOCALE || 'en',
  fallback_locale: process.env.APP_FALLBACK_LOCALE || 'en',
  locales: process.env.APP_LOCALES || ['en', 'vi', ''],
  localePrefix: process.env.DB_CONNECTION || 'as-needed',
  database: {
    driver: process.env.DB_CONNECTION || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    connectionString: process.env.DB_URL,
  },
})
