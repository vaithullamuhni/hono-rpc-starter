import { serve } from '@hono/node-server'
import app from './app.js'
import homeRoute from './routes/home.js'
import posts_route from './routes/posts.js'
import userRoute from './routes/user.js'

const baseApp = app
	.route('/', homeRoute)
	.route('/posts', posts_route)
	.route('/user', userRoute)

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`)
	}
)

export type AppType = typeof baseApp
