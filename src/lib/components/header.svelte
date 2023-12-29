<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';
	import LinkIcon from './linkicon.svelte';

</script>
<header class="flex px-4 py-4 justify-center mt-4">
	<section class="flex w-full lg:w-4/5  flex-wrap gap-y-6 justify-between">
		<div class="flex grow">
			<a class="flex flex-col" href="/">
				<h2 class="text-2xl font-semibold text-stone-950 dark:text-stone-50">David Clinton</h2>
				<div class="text-md text-stone-500 dark:text-stone-500">FrontEnd Engineer</div>
			</a>
		</div>
		<div class="flex flex-wrap gap-x-3 gap-y-6 ">
		<a href="/blog">
			<div class="cursor-pointer rounded-full bg-neutral-300 flex p-3 px-5 pr-4 gap-x-4 text-stone-950 hover:bg-stone-200 hover:underline dark:bg-stone-800/50 dark:text-stone-50 dark:hover:bg-stone-800"> 		
				<div> Articles</div>
				<LinkIcon/>			
			</div>
		</a>
		<a href="/work">
			<div class="cursor-pointer rounded-full bg-neutral-300 flex p-3 px-5 pr-4 gap-x-4 text-stone-950 hover:bg-stone-200 hover:underline dark:bg-stone-800/50 dark:text-stone-50 dark:hover:bg-stone-800"> 		
				<div>Work</div>
				<LinkIcon/>			
			</div>
		</a>
		<a href="https://github.com/daveclinton">
			<div class="cursor-pointer rounded-full bg-neutral-300 flex p-3 px-5 pr-4 gap-x-4 text-stone-950 hover:bg-stone-200 hover:underline dark:bg-stone-800/50 dark:text-stone-50 dark:hover:bg-stone-800"> 		
				<div>Github</div>
				<LinkIcon/>			
			</div>
		</a>
		<a href="/projects">
			<div class="cursor-pointer rounded-full bg-neutral-300 flex p-3 px-5 pr-4 gap-x-4 text-stone-950 hover:bg-stone-200 hover:underline dark:bg-stone-800/50 dark:text-stone-50 dark:hover:bg-stone-800"> 		
				<div>Projects</div>
				<LinkIcon/>			
			</div>
		</a>
			<ThemeToggle />
		</div>
	</section>
</header>

