import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    try {
        // Dynamically import the markdown file
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            content: post.default,
            meta: post.metadata,
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
};
