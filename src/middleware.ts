import { defineMiddleware } from 'astro:middleware';

const PROTECTED_PATHS = ['/work/private'];
const TRACKED_PATHS = ['/photo-feed'];

export const onRequest = defineMiddleware(async (context, next) => {
  const isProtected = PROTECTED_PATHS.some(p => context.url.pathname.startsWith(p));
  const isTracked = TRACKED_PATHS.some(p => context.url.pathname.startsWith(p));
  if (!isProtected && !isTracked) return next();

  if (isProtected) {
    const cookie = context.cookies.get('site-auth')?.value;
    if (cookie === import.meta.env.SITE_PASSWORD) return next();    
    return context.redirect(`/enter-password?redirect=${context.url.pathname}`);
  }

  if (isTracked) {
    const cookie = context.cookies.get('logged-in-as')?.value;
    if(cookie) {
      try {
        fetch('https://ntfy.sh/cg_website_photo-feed_logged-in-as', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: `${cookie} is viewing the photo feed`,
        }) 
      } catch (e) {
        console.warn('Ntfy fetch failed', e);
      }
      return next();
    }
    return context.redirect(`/enter-user`);
  }
});