/**
 * Checks if node environment variable is development.
 * Returns false if env is production
 * @type {boolean}
 */
export const isDev = process.env.NODE_ENV === 'development';
