import generateFakePerson from '@carlgo11/fake-person'
import app from '../app.js'

const userRoute = app.get('/me', async (c) => {
	const user = await generateFakePerson({
		country: 'Norway',
	})
	return c.json({
		success: true,
		data: user,
	})
})

export default userRoute
