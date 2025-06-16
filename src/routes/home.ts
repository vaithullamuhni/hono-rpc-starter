import app from '../app.js';

const homeRoute = app.get('/', (c) => {
	return c.text('Hello Hono!');
});

export default homeRoute;
