import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes'

const app = new Koa();
app
    .use(logger())
    .use(router.routes());

export default app;