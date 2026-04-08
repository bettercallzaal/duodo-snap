import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { registerSnapHandler } from '@farcaster/snap-hono';
import { buildHomePage } from './pages/home.js';
import { buildMusicPage } from './pages/music.js';

const app = new Hono();
app.use('*', cors({ origin: '*' }));

const skipJFS = { skipJFSVerification: true } as any;

function getBaseUrl(req: Request): string {
  if (process.env.SNAP_PUBLIC_BASE_URL) {
    const url = process.env.SNAP_PUBLIC_BASE_URL.replace(/\/$/, '');
    return url.startsWith('http') ? url : `https://${url}`;
  }
  const forwarded = req.headers.get('x-forwarded-host');
  const proto = req.headers.get('x-forwarded-proto') ?? 'http';
  if (forwarded) return `${proto}://${forwarded}`;
  const host = req.headers.get('host') ?? 'localhost:3005';
  return `http://${host}`;
}

// -- Home page ------------------------------------------------------------

registerSnapHandler(app, async (ctx) => {
  const baseUrl = getBaseUrl(ctx.request);
  return buildHomePage(baseUrl);
}, skipJFS);

// -- Music page -----------------------------------------------------------

registerSnapHandler(
  app,
  async (ctx) => {
    const baseUrl = getBaseUrl(ctx.request);
    return buildMusicPage(baseUrl);
  },
  { path: '/music', ...skipJFS },
);

export default app;
