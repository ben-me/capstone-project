export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/', '/rooms', '/rooms/[id]', '/reservations', '/api/:path*'],
};
