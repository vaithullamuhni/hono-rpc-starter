import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono().use(logger())

export default app
