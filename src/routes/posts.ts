import { zValidator } from '@hono/zod-validator'
import { getPosts, getFullPostBySlug } from 'best-blog-data'
import z from 'zod'
import app from '../app.js'

const posts_route = app
	.get('/all', (c) => {
		const posts = getPosts()
		return c.json({
			success: true,
			data: posts,
		})
	})
	.get(
		'/id:slug',
		zValidator(
			'query',
			z.object({
				slug: z.string(),
			})
		),
		(c) => {
			const slug = c.req.valid('query').slug
			const post = getFullPostBySlug(slug)
			if (post) {
				return c.json({
					success: true,
					data: post,
				})
			}
			return c.json({ success: false, error: 'Post not found' }, 404)
		}
	)

export default posts_route
