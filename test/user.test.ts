import assert from 'node:assert'
import test from 'node:test'
import type { AppType } from '../src/index.js'
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:3000/')

const data = await client.user.me.$get().then((res) => res.json())

test('email is email', () => {
	assert.strictEqual(data.data.email.includes('@'), true)
})

test('name is string', () => {
	assert.strictEqual(typeof data.data.firstName, 'string')
})
