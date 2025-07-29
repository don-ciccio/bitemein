<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Features from "$lib/components/Features.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import CTA from "$lib/components/CTA.svelte";
</script>

<svelte:head>
    <title
        >BiteMe In - Restaurant Table Booking App for Shopify | Reduce No-Shows
        by 60%</title
    >
    <meta
        name="description"
        content="Transform your restaurant with BiteMe In - the leading Shopify table booking app. Automated reservations, SMS reminders, and seamless integration. Start free today!"
    />
    <meta
        name="keywords"
        content="restaurant booking app, shopify restaurant app, table reservation system, restaurant management, booking software"
    />
    <meta
        property="og:title"
        content="BiteMe In - Restaurant Table Booking App for Shopify"
    />
    <meta
        property="og:description"
        content="Reduce no-shows by 60% with automated table bookings and SMS reminders"
    />
    <meta property="og:type" content="website" />
</svelte:head>

<Hero />
<Features />
<Pricing />
<CTA />
