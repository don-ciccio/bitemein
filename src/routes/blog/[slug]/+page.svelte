<script>
    export let data;
    const { post } = data;
</script>

<svelte:head>
    <title>{post.title} - BiteMe In Blog</title>
    <meta name="description" content="{post.excerpt}" />
</svelte:head>

<section class="post-hero">
    <div class="container">
        <div class="post-header">
            <div class="breadcrumb">
                <a href="/blog" class="breadcrumb-link">← Back to Blog</a>
            </div>
            <div class="post-meta">
                <time datetime="{post.date}">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                {#if post.author}
                    <span class="author">by {post.author}</span>
                {/if}
            </div>
            <h1 class="post-title">{post.title}</h1>
        </div>
    </div>
</section>

<section class="post-content-section section">
    <div class="container">
        <article class="post-content">
            <div class="content">
                {@html post.content}
            </div>
        </article>

        <footer class="post-footer">
            <div class="footer-actions">
                <a href="/blog" class="btn btn-secondary">
                    ← Back to Blog
                </a>
                <div class="share-buttons">
                    <span class="share-label">Share this article:</span>
                    <a href="https://twitter.com/intent/tweet?text={encodeURIComponent(post.title)}&url={encodeURIComponent(`https://bitemein.com/blog/${post.slug}`)}" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="share-btn twitter">
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(`https://bitemein.com/blog/${post.slug}`)}"
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="share-btn linkedin">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    </div>
</section>

<style>
    .post-hero {
        padding: 120px 0 60px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        position: relative;
        overflow: hidden;
        padding-top: 200px;
        margin-top: -80px;
    }

    .post-hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        pointer-events: none;
    }

    .post-header {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }

    .breadcrumb {
        margin-bottom: 2rem;
    }

    .breadcrumb-link {
        color: var(--primary-coral);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .breadcrumb-link:hover {
        color: #d85a61;
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        color: var(--text-gray);
        font-size: 1rem;
    }

    .author {
        position: relative;
    }

    .author::before {
        content: "•";
        margin-right: 0.5rem;
    }

    .post-title {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        color: var(--text-dark);
        margin: 0;
    }

    .post-content-section {
        background-color: var(--white);
    }

    .post-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .content {
        line-height: 1.8;
        font-size: 1.1rem;
        color: var(--text-dark);
    }

    .content :global(h2) {
        font-size: 2rem;
        font-weight: 700;
        margin: 3rem 0 1.5rem 0;
        color: var(--text-dark);
        line-height: 1.3;
    }

    .content :global(h3) {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 2.5rem 0 1rem 0;
        color: var(--text-dark);
    }

    .content :global(p) {
        margin-bottom: 1.5rem;
        color: var(--text-dark);
    }

    .content :global(ul), .content :global(ol) {
        margin: 1.5rem 0;
        padding-left: 2rem;
    }

    .content :global(li) {
        margin-bottom: 0.5rem;
    }

    .content :global(blockquote) {
        border-left: 4px solid var(--primary-coral);
        padding-left: 2rem;
        margin: 2rem 0;
        font-style: italic;
        color: var(--text-gray);
        background: #f9fafb;
        padding: 1.5rem 2rem;
        border-radius: 0 8px 8px 0;
    }

    .post-footer {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid #f3f4f6;
    }

    .footer-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .share-buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .share-label {
        color: var(--text-gray);
        font-weight: 600;
        font-size: 0.9rem;
    }

    .share-btn {
        padding: 0.5rem 1rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }

    .share-btn.twitter {
        background-color: #1da1f2;
        color: white;
    }

    .share-btn.twitter:hover {
        background-color: #1a91da;
        transform: translateY(-2px);
    }

    .share-btn.linkedin {
        background-color: #0077b5;
        color: white;
    }

    .share-btn.linkedin:hover {
        background-color: #006ba1;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .post-title {
            font-size: 2.2rem;
        }

        .content {
            font-size: 1rem;
        }

        .content :global(h2) {
            font-size: 1.6rem;
        }

        .footer-actions {
            flex-direction: column;
            align-items: flex-start;
        }

        .share-buttons {
            flex-wrap: wrap;
        }
    }
</style>