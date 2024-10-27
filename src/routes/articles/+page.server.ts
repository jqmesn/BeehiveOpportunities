import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const response = await prisma.articles.findMany({
    orderBy: {
        createdAt: 'desc'
    }
})

// 2.
return { feed: response };
}) satisfies PageServerLoad;