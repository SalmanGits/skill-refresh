// High-level design for implementing user-based rate limiting using Redis.
// Each user ID is tracked individually. A counter is incremented for every request,
// and an expiration time is set to define the rate limit window.
// If a user exceeds the allowed number of requests within the time window, 
// further requests are blocked until the window resets.


import { createClient } from 'redis';

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const LIMIT = 5
const EXPIRY = 10 * 60
export const rateLimiter = async (userId: string, limit = LIMIT, expiry = EXPIRY) => {
    const key = `redis-${userId}`
    const reqCount = await client.incr(key)
    if (reqCount == 1) {
        await client.expire(key, EXPIRY)
    }
    if (reqCount > LIMIT) {
        throw new Error('Rate limit exceeded. Please wait before retrying.');
    }

}