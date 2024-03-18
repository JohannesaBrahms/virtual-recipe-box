/**
 * An array of publicly accessible routes
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes used for authentication
 * These routes will redirect logged in users to /recipes
 * @type {string[]}
 */
export const authRoutes = ['/auth/register', '/auth/login', '/auth/error', '/auth/reset'];

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/recipes';
