<script>
    export let data;
</script>

<svelte:head>
    <title>Blog - BiteMe In</title>
    <meta name="description" content="Latest articles and insights from BiteMe In" />
</svelte:head>

<section class="blog-hero">
    <div class="container">
        <div class="blog-header">
            <div class="hero-badge">
                <span class="badge-text">📚 Latest Insights & Tips</span>
            </div>
            <h1 class="hero-title">Blog</h1>
            <p class="hero-subtitle">
                Discover the latest trends, tips, and insights about restaurant management, 
                food delivery, and growing your dining business.
            </p>
        </div>
    </div>
</section>

<section class="blog-content section">
    <div class="container">
        <div class="blog-posts">
            {#each data.posts as post}
                <article class="blog-post-card">
                    <div class="post-meta">
                        <time datetime="{post.date}">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        {#if post.author}
                            <span class="author">by {post.author}</span>
                        {/if}
                    </div>
                    <h2><a href="/blog/{post.slug}">{post.title}</a></h2>
                    <p class="post-excerpt">{post.excerpt}</p>
                    <a href="/blog/{post.slug}" class="btn btn-primary read-more">
                        Read Article
                        <span class="btn-icon">→</span>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .blog-hero {
        padding: 120px 0 60px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        position: relative;
        overflow: hidden;
        padding-top: 200px;
        margin-top: -80px;
    }

    .blog-hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        pointer-events: none;
    }

    .blog-header {
        text-align: center;
        position: relative;
        z-index: 1;
    }

    .hero-badge {
        display: inline-block;
        margin-bottom: 1.5rem;
    }

    .badge-text {
        background: rgba(234, 88, 12, 0.1);
        color: var(--primary-coral);
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 0.7rem;
        font-weight: 600;
        border: 1px solid rgba(234, 88, 12, 0.2);
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
    }

    .hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.6;
        color: var(--text-gray);
        max-width: 600px;
        margin: 0 auto;
    }

    .blog-content {
        background-color: var(--white);
    }

    .blog-posts {
        display: grid;
        gap: 3rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .blog-post-card {
        background: var(--white);
        padding: 2.5rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border: 1px solid #f3f4f6;
    }

    .blog-post-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: var(--text-gray);
    }

    .author {
        position: relative;
    }

    .author::before {
        content: "•";
        margin-right: 0.5rem;
    }

    .blog-post-card h2 {
        margin: 0 0 1rem 0;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.3;
    }

    .blog-post-card h2 a {
        color: var(--text-dark);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .blog-post-card h2 a:hover {
        color: var(--primary-coral);
    }

    .post-excerpt {
        color: var(--text-gray);
        line-height: 1.6;
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-icon {
        transition: transform 0.3s ease;
    }

    .read-more:hover .btn-icon {
        transform: translateX(4px);
    }

    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1.1rem;
        }

        .blog-post-card {
            padding: 2rem;
        }

        .blog-post-card h2 {
            font-size: 1.5rem;
        }
    }
</style>