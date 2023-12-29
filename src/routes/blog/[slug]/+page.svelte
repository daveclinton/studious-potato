<script lang="ts">
	export let data;

	const { title, date, content, reading } = data;
</script>

<article class="container prose mx-auto px-7 py-16 dark:prose-invert">
	<h1 class="text-balance">{title}</h1>
	<p>Published: {date}</p>
	<p>{reading} minutes read</p>
	{@html content.html}
</article>

