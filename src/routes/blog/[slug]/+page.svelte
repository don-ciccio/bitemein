<script>
    import { formatDate } from "$lib/utils";
    import { page } from "$app/stores";

    export let data;

    $: ({ content, meta } = data);
    $: slug = $page.params.slug;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{meta.title} | BiteMe In Restaurant Table Booking System Blog</title>
    <meta name="title" content="{meta.title} | BiteMe In Restaurant Table Booking System Blog" />
    <meta name="description" content={meta.description} />
    <meta name="keywords" content="{meta.categories ? meta.categories.join(', ') + ', ' : ''}restaurant table booking system, shopify restaurant app, table reservation, restaurant management" />
    <meta name="author" content="BiteMe In" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://bitemein.com/blog/{slug}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://bitemein.com/blog/{slug}" />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    {#if meta.image}
        <meta property="og:image" content="https://bitemein.com{meta.image}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.title} />
    {/if}
    <meta property="og:site_name" content="BiteMe In" />
    <meta property="article:published_time" content={meta.date} />
    {#if meta.categories}
        {#each meta.categories as category}
            <meta property="article:tag" content={category} />
        {/each}
    {/if}
    <meta property="article:author" content="BiteMe In" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://bitemein.com/blog/{slug}" />
    <meta property="twitter:title" content={meta.title} />
    <meta property="twitter:description" content={meta.description} />
    {#if meta.image}
        <meta property="twitter:image" content="https://bitemein.com{meta.image}" />
        <meta property="twitter:image:alt" content={meta.title} />
    {/if}
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "{meta.title}",
      "description": "{meta.description}",
      "image": "{meta.image ? 'https://bitemein.com' + meta.image : 'https://bitemein.com/assets/restyling/BiteMe In-29.png'}",
      "author": {
        "@type": "Organization",
        "name": "BiteMe In",
        "url": "https://bitemein.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BiteMe In",
        "url": "https://bitemein.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bitemein.com/assets/restyling/BiteMe In-29.png"
        }
      },
      "datePublished": "{meta.date}",
      "dateModified": "{meta.date}",
      "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": "https://bitemein.com/blog/{slug}"
       },
      "keywords": "{meta.categories ? meta.categories.join(', ') + ', ' : ''}restaurant table booking system, shopify restaurant app, table reservation, restaurant management",
      "articleSection": "Restaurant Technology",
      "inLanguage": "en-US"
    }
    </script>
</svelte:head>

<div class="blog-post">
    <div class="container">
        <!-- Top Navigation -->
        <nav class="top-navigation">
            <a href="/blog" class="back-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back to Blog
            </a>
        </nav>

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

        <nav class="bottom-navigation">
            <a href="/blog" class="back-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back to Blog
            </a>
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

    .top-navigation {
        margin-bottom: 2rem;
    }

    .bottom-navigation {
        text-align: center;
        margin-top: 2rem;
    }

    .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: white;
        color: var(--text-dark);
        text-decoration: none;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        font-weight: 500;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .back-btn:hover {
        background: var(--primary-coral);
        color: white;
        border-color: var(--primary-coral);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(234, 88, 12, 0.2);
    }

    .back-btn svg {
        transition: transform 0.3s ease;
    }

    .back-btn:hover svg {
        transform: translateX(-2px);
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
