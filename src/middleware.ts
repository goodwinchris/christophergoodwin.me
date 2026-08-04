import { defineMiddleware } from 'astro:middleware';

const PROTECTED_PATHS = ['/work/private'];

export const onRequest = defineMiddleware(async (context, next) => {
  const isProtected = PROTECTED_PATHS.some(p => context.url.pathname.startsWith(p));
  console.log('isProtected', isProtected, context.url.pathname);
  if (!isProtected) return next();

  const cookie = context.cookies.get('site-auth')?.value;

  console.log('cookie', cookie, import.meta.env.SITE_PASSWORD);
  if (cookie === import.meta.env.SITE_PASSWORD) return next();

  return context.redirect(`/enter-password?redirect=${context.url.pathname}`);
});