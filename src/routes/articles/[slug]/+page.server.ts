import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params: { slug } }) => {
    const article = await prisma.articles.findUnique({
      where: { slug: slug },
    });
  
    return { article };
  }) satisfies PageServerLoad;