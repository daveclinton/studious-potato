<script lang="ts">
	import { MetaTags, JsonLd, type MetaTagsProps } from 'svelte-meta-tags';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	import '../app.css';
	import { page } from '$app/stores';

	// Control the sidebar on mobile
	let open: boolean = false;

	// SEO
	$: metaTags = {
		title: 'Home',
		titleTemplate: '%s | David Clinton',
		description: 'David Clinton Virtual Space',
		...$page.data.metaTagsChild
	} satisfies MetaTagsProps;
</script>

<!-- SEO -->
<MetaTags {...metaTags} />

<Header />
<slot />
<Footer />

<!-- Structured Data -->
<JsonLd
	output="body"
	schema={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'David Clinton',
		url: 'https://daveclinton.dev',
		description: 'David Clinton personal website',
		sameAs: [
			'https://www.linkedin.com/in/David-salvado/',
			'https://twitter.com/danisalTweets',
			'https://github.com/danisal'
		]
	}}
/>
