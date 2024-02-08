import { getSession } from 'next-auth/react'

export async function authMiddleware(context) {
    const session = await getSession(context)

    if (!session) {
        // Redirect to sign in
        context.res.writeHead(302, { Location: '/signin' })
        context.res.end()
        return
    }

    // User is authenticated, continue with the request
}