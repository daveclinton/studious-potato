import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	const metaTags = {
		title: 'All Post'
	} satisfies MetaTagsProps;

	return {
		posts,
		metaTagsChild: metaTags
	};
};
