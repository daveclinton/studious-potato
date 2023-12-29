import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async () => {
	const metaTags = {
		title: 'Work',
		description:
			"Explore David's Work Experience | Dive into my professional journey, accomplishments, and expertise in Computer Science. Discover my career highlights and contributions."
	} satisfies MetaTagsProps;

	return {
		metaTagsChild: metaTags
	};
};
