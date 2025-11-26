<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Features from "$lib/components/Features.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import CTA from "$lib/components/CTA.svelte";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>BiteMe In | Shopify Restaurant Reservations & Table Management</title
    >
    <meta
        name="title"
        content="BiteMe In | Shopify Restaurant Reservations & Table Management"
    />
    <meta
        name="description"
        content="A complete table booking system for Shopify restaurants. Features include automated reservations, waitlist management, and conditional deposits to manage no-shows."
    />
    <meta
        name="keywords"
        content="restaurant table booking system, shopify restaurant app, table reservation system, reservation deposits, conditional deposits, party size deposit, booking time deposit, reduce no-shows, restaurant booking app, restaurant management software, table booking shopify, restaurant reservation app, booking system for restaurants, shopify table booking, restaurant table management"
    />
    <meta name="author" content="BiteMe In" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://bitemein.com" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bitemein.com" />
    <meta
        property="og:title"
        content="BiteMe In | Shopify Restaurant Reservations & Table Management"
    />
    <meta
        property="og:description"
        content="A complete table booking system for Shopify restaurants. Features include automated reservations, waitlist management, and conditional deposits to manage no-shows."
    />
    <meta
        property="og:image"
        content="https://bitemein.com/assets/vecteezy_a-variety-of-dishes-are-laid-out-on-the-table-to-prepare-for_8934713.jpg"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
        property="og:image:alt"
        content="Restaurant table booking system interface"
    />
    <meta property="og:site_name" content="BiteMe In" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://bitemein.com" />
    <meta
        property="twitter:title"
        content="BiteMe In | Shopify Restaurant Reservations & Table Management"
    />
    <meta
        property="twitter:description"
        content="A complete table booking system for Shopify restaurants. Features include automated reservations, waitlist management, and conditional deposits to manage no-shows."
    />
    <meta
        property="twitter:image"
        content="https://bitemein.com/assets/vecteezy_a-variety-of-dishes-are-laid-out-on-the-table-to-prepare-for_8934713.jpg"
    />
    <meta
        property="twitter:image:alt"
        content="Restaurant table booking system interface"
    />

    <!-- Additional SEO Meta Tags -->
    <meta name="theme-color" content="#FB5E5D" />
    <meta name="msapplication-TileColor" content="#FB5E5D" />
    <meta name="application-name" content="BiteMe In" />
    <meta name="apple-mobile-web-app-title" content="BiteMe In" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />

    <!-- Structured Data -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BiteMe In",
            "description": "Restaurant table booking system for Shopify that reduces no-shows by 60% with automated reservations and waitlist management.",
            "url": "https://bitemein.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free plan available"
            },
            "provider": {
                "@type": "Organization",
                "name": "BiteMe In",
                "url": "https://bitemein.com"
            },
            "featureList": [
                "Automated table booking system",
                "Waitlist management",
                "Shopify integration",
                "Real-time availability",
                "Customer management",
                "Conditional reservation deposits",
                "No-show reduction"
            ],
            "screenshot": "https://bitemein.com/assets/vecteezy_a-variety-of-dishes-are-laid-out-on-the-table-to-prepare-for_8934713.jpg"
        }
    </script>

    <!-- FAQPage structured data: Reservation deposit question for enhanced SEO -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I require reservation deposits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. BiteMe In supports conditional reservation deposits that you can enable based on party size, day of the week, and booking time. This helps reduce no-shows and keeps table availability accurate. Enable in Settings → Policies & Deposits."
                    }
                }
            ]
        }
    </script>
</svelte:head>

<Hero />
<Features />
<Pricing />
<FAQ />
<CTA />
