<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    export let post: Post;
</script>

<article class="blog-card">
    <a href={`/blog/${post.slug}`} class="card-link">
        {#if post.image}
            <div class="card-image">
                <img src={post.image} alt={post.title} />
            </div>
        {/if}

        <div class="card-content">
            <div class="card-meta">
                <time class="post-date">{formatDate(post.date)}</time>
                {#if post.categories && post.categories.length > 0}
                    <div class="post-categories">
                        {#each post.categories.slice(0, 2) as category}
                            <span class="category-tag">{category}</span>
                        {/each}
                    </div>
                {/if}
            </div>

            <h3 class="card-title">{post.title}</h3>
            <p class="card-description">{post.description}</p>

            {#if post.author}
                <div class="card-author">
                    <span>By {post.author}</span>
                </div>
            {/if}
        </div>
    </a>
</article>

<style>
    .blog-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .blog-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .card-link {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .blog-card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-content {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .card-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .post-date {
        color: var(--text-gray);
        font-size: 0.875rem;
        font-weight: 500;
    }

    .post-categories {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .category-tag {
        background: var(--primary-coral);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: capitalize;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 0.75rem;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card-description {
        color: var(--text-gray);
        line-height: 1.6;
        margin-bottom: 1rem;
        flex: 1;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card-author {
        margin-top: auto;
        padding-top: 1rem;
        border-top: 1px solid #e5e7eb;
    }

    .card-author span {
        color: var(--text-gray);
        font-size: 0.875rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .card-content {
            padding: 1rem;
        }

        .card-title {
            font-size: 1.125rem;
        }

        .card-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
        }
    }
</style>
