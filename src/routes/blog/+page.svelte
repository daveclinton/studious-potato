<script lang="ts">
	import dayjs from 'dayjs';
	export let data;

	const { posts } = data;
</script>

<main class="container prose mx-auto px-4 py-4 dark:prose-invert">
	<ol class="list-none">
		{#each posts as post}
			<li class="p-0 bg-neutral-300 dark:bg-stone-800/50  rounded-lg">
				<article class="px-4 py-2">
					<h3>
						<a
							class="no-underline hover:underline hover:decoration-amber-300 hover:decoration-4 hover:underline-offset-8 dark:text-blue-200"
							href={post.path}>{post.meta.title}</a
						>
					</h3>
					<div class="flex items-center justify-between">
						<time dateTime={dayjs(post.meta.date).format('ddd MMMM DD, YYYY')}>
							<small>{dayjs(post.meta.date).format('MMMM DD, YYYY')}</small>
						</time>
						<small>
							<span role="img" aria-label="clock emoji"> ⏱ </span>
							{post.meta.reading} minutes read
						</small>
					</div>
				</article>
			</li>
		{/each}
	</ol>
</main>
