interface PostMetadata {
	title: string;
	date: string; 
	author: string;
	
  }
  
  interface BlogPost {
	meta: PostMetadata;
	path: string;
  }


  export const fetchMarkdownPosts = async (): Promise<BlogPost[]> => {
	const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata  }: {metadata : PostMetadata} = await resolver();
			const postPath = path.slice(11, -9);

			return {
				meta: metadata as PostMetadata,
				path: postPath,
			};
		})
	);

	return allPosts;
};
