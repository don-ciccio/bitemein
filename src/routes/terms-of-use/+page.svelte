<script>
    import Content from "../../posts/terms-of-use.md";
</script>

<svelte:head>
    <title>Terms of Use | BiteMe In Restaurant Table Booking System</title>
    <meta
        name="title"
        content="Terms of Use | BiteMe In Restaurant Table Booking System"
    />
    <meta
        name="description"
        content="Terms of Use for BiteMe In Restaurant Table Reservations System. Read our terms and conditions for using our Shopify application."
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://bitemein.com/terms-of-use" />
</svelte:head>

<div class="blog-post">
    <div class="container">
        <article class="post-content">
            <div class="prose">
                <Content />
            </div>
        </article>
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

    :global(.prose) {
        line-height: 1.7;
        color: var(--text-dark);
    }

    :global(.prose h1) {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
        line-height: 1.2;
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

    :global(.prose h4) {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-dark);
        margin: 1.25rem 0 0.5rem 0;
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

    :global(.prose strong) {
        font-weight: 600;
        color: var(--text-dark);
    }

    :global(.prose a) {
        color: var(--primary-coral);
        text-decoration: none;
    }

    :global(.prose a:hover) {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .post-content {
            padding: 2rem 1.5rem;
        }

        :global(.prose h1) {
            font-size: 2rem;
        }
    }
</style>
