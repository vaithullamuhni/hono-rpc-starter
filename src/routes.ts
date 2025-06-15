import { zValidator } from '@hono/zod-validator'
import { getFullPostBySlug, getPosts } from 'best-blog-data'
import { Hono } from 'hono'
import { z } from 'zod/v4-mini'

const posts_route = new Hono()
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
