import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import posts_route from './routes.js'

const app = new Hono()
	.get('/', (c) => {
		return c.text('Hello Hono!')
	})
	.route('/posts', posts_route)

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`)
	}
)

export type AppType = typeof app
