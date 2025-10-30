<script>
    import BlogCard from "$lib/components/BlogCard.svelte";
    export let data;

    $: ({ posts } = data);
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title
        >Restaurant Table Booking System Blog - BiteMe In | Shopify App Insights</title
    >
    <meta
        name="title"
        content="Restaurant Table Booking System Blog - BiteMe In | Shopify App Insights"
    />
    <meta
        name="description"
        content="Expert insights on restaurant table booking systems, Shopify restaurant apps, reservation management, and industry trends. Learn how to optimize your restaurant operations."
    />
    <meta
        name="keywords"
        content="restaurant table booking blog, shopify restaurant app insights, table reservation tips, restaurant management blog, booking system guides, restaurant industry trends"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://bitemein.com/blog" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bitemein.com/blog" />
    <meta
        property="og:title"
        content="Restaurant Table Booking System Blog - BiteMe In"
    />
    <meta
        property="og:description"
        content="Expert insights on restaurant table booking systems, Shopify restaurant apps, and reservation management strategies."
    />
    <meta
        property="og:image"
        content="https://bitemein.com/assets/vecteezy_a-variety-of-dishes-are-laid-out-on-the-table-to-prepare-for_8934713.jpg"
    />
    <meta property="og:site_name" content="BiteMe In" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://bitemein.com/blog" />
    <meta
        property="twitter:title"
        content="Restaurant Table Booking System Blog - BiteMe In"
    />
    <meta
        property="twitter:description"
        content="Expert insights on restaurant table booking systems, Shopify restaurant apps, and reservation management strategies."
    />
    <meta
        property="twitter:image"
        content="https://bitemein.com/assets/restyling/BiteMe In-29.png"
    />

    <!-- Structured Data -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BiteMe In Restaurant Table Booking System Blog",
            "description": "Expert insights on restaurant table booking systems, Shopify restaurant apps, reservation management, and industry trends.",
            "url": "https://bitemein.com/blog",
            "publisher": {
                "@type": "Organization",
                "name": "BiteMe In",
                "url": "https://bitemein.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://bitemein.com/assets/restyling/BiteMe In-29.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bitemein.com/blog"
            }
        }
    </script>
</svelte:head>

<div class="blog-page">
    <div class="container">
        <!-- Hero Section -->
        <section class="blog-hero">
            <div class="hero-content">
                <h1 class="hero-title">Insights & Updates</h1>
                <p class="hero-subtitle">
                    Stay up to date with the latest trends in food delivery,
                    restaurant management, and reservation strategy. Learn about
                    conditional reservation deposits, policy best practices, and
                    how to reduce no-shows while providing a great guest experience.
                </p>
            </div>
        </section>

        <!-- Blog Posts Grid -->
        <section class="blog-posts">
            {#if posts && posts.length > 0}
                <div class="posts-grid">
                    {#each posts as post (post.slug)}
                        <BlogCard {post} />
                    {/each}
                </div>
            {:else}
                <div class="no-posts">
                    <h3>No posts available</h3>
                    <p>Check back soon for new content!</p>
                </div>
            {/if}
        </section>
    </div>
</div>

<style>
    .blog-page {
        min-height: 100vh;
        background: linear-gradient(135deg, #fef7f0 0%, #fff 100%);
        padding: 2rem 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .blog-hero {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem 0;
    }

    .hero-content {
        max-width: 600px;
        margin: 0 auto;
    }

    .hero-badge {
        display: inline-block;
        background: var(--primary-yellow);
        color: var(--text-dark);
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 1.125rem;
        color: var(--text-gray);
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .blog-posts {
        margin-bottom: 4rem;
    }

    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        align-items: start;
    }

    .no-posts {
        text-align: center;
        padding: 4rem 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .no-posts h3 {
        color: var(--text-dark);
        margin-bottom: 0.5rem;
    }

    .no-posts p {
        color: var(--text-gray);
    }

    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1rem;
        }

        .posts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .blog-hero {
            margin-bottom: 2rem;
            padding: 2rem 0;
        }
    }

    @media (max-width: 480px) {
        .posts-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
