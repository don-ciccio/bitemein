import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

interface PostMetadata {
    title: string;
    description: string;
    date: string;
    image?: string;
    categories: string[];
    published: boolean;
}

async function getPosts(): Promise<Post[]> {
    const posts: Post[] = [];

    // Import all markdown files from the posts directory
    const paths = import.meta.glob("/src/posts/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as PostMetadata;
            const post = { ...metadata, slug } satisfies Post;
            if (post.published) {
                posts.push(post);
            }
        }
    }

    // Sort posts by date (newest first)
    posts.sort(
        (first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    return posts;
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts();
    return json(posts);
};

export const prerender = true;
