<script>
    import { formatDate } from "$lib/utils";

    export let data;

    $: ({ content, meta } = data);
</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={meta.title} />
    <meta name="description" content={meta.description} />
    <meta property="og:description" content={meta.description} />
    {#if meta.image}
        <meta property="og:image" content={meta.image} />
    {/if}
</svelte:head>

<div class="blog-post">
    <div class="container">
        <article class="post-content">
            <header class="post-header">
                <h1 class="post-title">{meta.title}</h1>
                <div class="post-meta">
                    <time class="post-date">{formatDate(meta.date)}</time>
                    {#if meta.categories && meta.categories.length > 0}
                        <div class="post-categories">
                            {#each meta.categories as category}
                                <span class="category-tag">{category}</span>
                            {/each}
                        </div>
                    {/if}
                </div>
            </header>

            <div class="prose">
                <svelte:component this={content} />
            </div>
        </article>

        <nav class="post-navigation">
            <a href="/blog" class="btn btn-outline">← Back to Blog</a>
        </nav>
    </div>
</div>

<style>
    .blog-post {
        padding: 2rem 0;
        min-height: 100vh;
        background: linear-gradient(135deg, #fef7f0 0%, #fff 100%);
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .post-content {
        background: white;
        border-radius: 12px;
        padding: 3rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .post-header {
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #e5e7eb;
    }

    .post-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .post-date {
        color: var(--text-gray);
        font-size: 0.9rem;
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
        font-size: 0.8rem;
        font-weight: 500;
    }

    :global(.prose) {
        line-height: 1.7;
        color: var(--text-dark);
    }

    :global(.prose h2) {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-dark);
        margin: 2rem 0 1rem 0;
    }

    :global(.prose h3) {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--text-dark);
        margin: 1.5rem 0 0.75rem 0;
    }

    :global(.prose p) {
        margin-bottom: 1.25rem;
    }

    :global(.prose ul, .prose ol) {
        margin: 1rem 0;
        padding-left: 1.5rem;
    }

    :global(.prose li) {
        margin-bottom: 0.5rem;
    }

    :global(.prose pre) {
        background: #1e1e1e;
        border-radius: 8px;
        padding: 1.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
    }

    :global(.prose code) {
        background: #f3f4f6;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.9em;
    }

    :global(.prose pre code) {
        background: transparent;
        padding: 0;
    }

    .post-navigation {
        text-align: center;
    }

    @media (max-width: 768px) {
        .post-content {
            padding: 2rem 1.5rem;
        }

        .post-title {
            font-size: 2rem;
        }
    }
</style>
