import { serve } from '@hono/node-server';
import app from './app.js';

const port = 3005;
console.log(`Duo Do Snap running at http://localhost:${port}`);
serve({ fetch: app.fetch, port });
