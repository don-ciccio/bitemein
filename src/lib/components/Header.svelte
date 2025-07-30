<script>
    import { onMount } from "svelte";

    let mobileMenuOpen = false;
    let scrolled = false;
    let headerElement;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        // Add/remove body class for styling
        if (mobileMenuOpen) {
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.classList.remove("mobile-menu-open");
        }
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
        document.body.classList.remove("mobile-menu-open");
    }

    function handleScroll() {
        scrolled = window.scrollY > 50;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header class="header" class:scrolled bind:this={headerElement}>
    <nav class="nav" class:island={scrolled}>
        <div class="nav-container">
            <div class="nav-brand">
                <a href="/" class="brand-link" on:click={closeMobileMenu}>
                    <img
                        src="/assets/logobitemein.svg"
                        alt="BiteMe In"
                        class="brand-logo"
                    />
                    <span class="brand-text">BiteMe In</span>
                </a>
            </div>

            <!-- Desktop navigation links -->
            <div class="nav-menu desktop-nav">
                <a href="/#features" class="nav-link" on:click={closeMobileMenu}
                    >Features</a
                >
                <a href="/#pricing" class="nav-link" on:click={closeMobileMenu}
                    >Pricing</a
                >
                <a href="/blog" class="nav-link" on:click={closeMobileMenu}
                    >Blog</a
                >
            </div>

            <div class="nav-actions">
                <a
                    href="/#contact"
                    class="btn btn-outline"
                    on:click={closeMobileMenu}>Contact</a
                >
                <a
                    href="/#get-started"
                    class="btn btn-primary"
                    on:click={closeMobileMenu}>Get Started</a
                >
            </div>

            <button
                class="mobile-menu-toggle"
                class:active={mobileMenuOpen}
                on:click={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile nav-menu OUTSIDE of nav to avoid island class inheritance -->
    <div class="nav-menu mobile-nav" class:active={mobileMenuOpen}>
        <!-- Close button in top right -->
        <button
            class="mobile-menu-close"
            on:click={closeMobileMenu}
            aria-label="Close mobile menu"
        >
            <span></span>
            <span></span>
        </button>

        <a href="/#features" class="nav-link" on:click={closeMobileMenu}
            >Features</a
        >
        <a href="/#pricing" class="nav-link" on:click={closeMobileMenu}
            >Pricing</a
        >
        <a href="/blog" class="nav-link" on:click={closeMobileMenu}
            >Blog</a
        >
        <div class="mobile-actions">
            <a
                href="/#contact"
                class="btn btn-outline"
                on:click={closeMobileMenu}>Contact</a
            >
            <a
                href="/#get-started"
                class="btn btn-primary"
                on:click={closeMobileMenu}>Get Started</a
            >
        </div>
    </div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        background: transparent;
        z-index: 1000;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 0.75rem 1rem;
    }

    .header.scrolled {
        padding: 0.5rem 1rem;
        background: transparent;
    }

    .header::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        pointer-events: none;
        z-index: -1;
    }

    .header.scrolled {
        padding: 0.5rem 1rem;
        background: transparent;
    }

    .header.scrolled::before {
        opacity: 0;
    }

    .nav {
        background: transparent;
        backdrop-filter: none;
        border: none;
        border-radius: 16px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: none;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 1001; /* Ensure nav has proper stacking context */
    }

    .nav.island {
        background: rgba(243, 225, 149, 0.98);
        backdrop-filter: blur(10px);
        border-radius: 50px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        border: 1px solid rgba(234, 88, 12, 0.1);
        transform: scale(0.95);
        z-index: 1001; /* Ensure island nav has proper stacking context */
    }

    .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem !important;
        border-radius: 6px;
        transition: all 0.3s ease;
        z-index: 1003 !important; /* Higher than nav to ensure visibility */
        position: relative !important;
        width: 40px !important;
        height: 40px !important;
        justify-content: center;
        align-items: center;
        font-size: inherit !important;
    }

    /* Completely override ALL scroll effects for mobile menu toggle */
    .header.scrolled .mobile-menu-toggle {
        padding: 0.5rem !important;
        width: 40px !important;
        height: 40px !important;
        font-size: inherit !important;
        border-radius: 6px !important;
        transform: none !important;
        z-index: 1003 !important; /* Higher than nav.island */
        position: relative !important;
    }

    .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
        padding: 0 1.5rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header.scrolled .nav-container {
        height: 56px;
        padding: 0 1.25rem;
    }

    .brand-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .brand-logo {
        height: 40px;
        width: auto;
        transition: all 0.3s ease;
        display: block;
    }

    .brand-text {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        font-family: inherit;
        transition: all 0.3s ease;
        letter-spacing: -0.02em;
        line-height: 1;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav.island .brand-logo {
        height: 32px;
    }

    .nav.island .brand-text {
        font-size: 1.25rem;
        font-weight: 600;
    }

    .header.scrolled .brand-logo {
        height: 30px;
    }

    .header.scrolled .brand-text {
        font-size: 1.2rem;
        font-weight: 600;
    }

    .brand-link:hover .brand-text {
        color: var(--primary-coral);
    }

    .brand-text {
        height: 16px;
        width: auto;
        transition: all 0.3s ease;
    }

    .nav.island .brand-logo {
        height: 32px;
    }

    .nav.island .brand-text {
        height: 12px;
    }

    .header.scrolled .brand-logo {
        height: 30px;
    }

    .nav-menu {
        display: flex;
        gap: 1.75rem;
        align-items: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header.scrolled .nav-menu {
        gap: 1.5rem;
    }

    .nav-link {
        color: var(--text-dark);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
        padding: 0.5rem 0;
        font-size: 1.1rem;
    }

    .header.scrolled .nav-link {
        font-size: 1.05rem;
    }

    .header.scrolled .nav-link {
        font-size: 1.05rem;
    }

    .nav-link:hover {
        color: var(--primary-coral);
        transform: translateY(-1px);
    }

    .nav-link:hover::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary-coral);
        border-radius: 1px;
    }

    .nav-actions {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header.scrolled .nav-actions {
        gap: 0.5rem;
    }

    /* Desktop nav-menu */
    .desktop-nav {
        display: flex;
        gap: 1.75rem;
        align-items: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header.scrolled .desktop-nav {
        gap: 1.5rem;
    }

    /* Mobile nav-menu - hidden by default */
    .mobile-nav {
        display: none;
    }

    .mobile-actions {
        display: none;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }

    .btn {
        padding: 0.6rem 1.25rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        cursor: pointer;
        display: inline-block;
        font-size: 0.85rem;
        text-align: center;
    }

    .header.scrolled .btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        border-radius: 25px;
    }

    .btn-outline {
        color: var(--text-dark);
        border-color: rgba(26, 26, 26, 0.2);
        background: rgba(255, 255, 255, 0.8);
    }

    .btn-outline:hover {
        border-color: var(--primary-coral);
        color: var(--primary-coral);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(234, 88, 12, 0.2);
        background: rgba(255, 255, 255, 0.95);
    }

    .btn-primary {
        background: var(--primary-coral);
        color: white;
        border-color: var(--primary-coral);
    }

    .btn-primary:hover {
        background: #e53e3e;
        border-color: #e53e3e;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
    }

    .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem !important;
        border-radius: 6px;
        transition: all 0.3s ease;
        z-index: 1002 !important; /* Ensure it stays above everything */
        position: relative !important; /* Ensure proper stacking context */
        width: 40px !important;
        height: 40px !important;
        justify-content: center;
        align-items: center;
        font-size: inherit !important;
    }

    /* Completely override ALL scroll effects for mobile menu toggle */
    .header.scrolled .mobile-menu-toggle {
        padding: 0.5rem !important;
        width: 40px !important;
        height: 40px !important;
        font-size: inherit !important;
        border-radius: 6px !important;
        transform: none !important;
        z-index: 1002 !important;
        position: relative !important;
    }

    .mobile-menu-toggle span {
        width: 25px;
        height: 3px;
        background: var(--text-dark);
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 2px;
    }

    /* Ensure spans don't change size on scroll */
    .header.scrolled .mobile-menu-toggle span {
        width: 25px !important;
        height: 3px !important;
        margin: 3px 0 !important;
        background: var(--text-dark) !important;
    }

    .mobile-menu-toggle:hover {
        background: rgba(234, 88, 12, 0.1);
    }

    .mobile-menu-toggle span {
        width: 25px;
        height: 3px;
        background: var(--text-dark);
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 2px;
    }

    .mobile-menu-toggle:hover span {
        background: var(--primary-coral);
    }

    /* Mobile menu animation */
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @media (max-width: 768px) {
        .header {
            padding: 0.5rem 1rem;
        }

        .header.scrolled {
            padding: 0.375rem 1rem;
        }

        /* Hide desktop nav on mobile */
        .desktop-nav {
            display: none;
        }

        /* Show mobile nav with full-screen styling */
        .mobile-nav {
            display: flex;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            margin: 0 !important;
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem !important;
            transform: translateX(-100%) !important;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: none;
            border-radius: 0 !important;
            border: none !important;
            gap: 1.5rem !important;
            z-index: 1000 !important; /* Lower than toggle button */
            visibility: hidden;
            opacity: 0;
            overflow: hidden;
            /* Completely isolate from parent transformations */
            transform-origin: initial !important;
            will-change: transform !important;
        }

        .mobile-menu-toggle {
            display: flex;
            z-index: 1005 !important; /* Higher than mobile menu */
            position: relative !important;
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            padding: 0.5rem !important;
            border-radius: 6px !important;
            width: 40px !important;
            height: 40px !important;
            justify-content: center !important;
            align-items: center !important;
            flex-direction: column !important;
        }

        .header.scrolled .mobile-menu-toggle {
            display: flex !important;
            z-index: 1005 !important; /* Higher than mobile menu */
            position: relative !important; /* Keep relative positioning */
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            padding: 0.5rem !important;
            border-radius: 6px !important;
            width: 40px !important;
            height: 40px !important;
            justify-content: center !important;
            align-items: center !important;
            flex-direction: column !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
        }

        .nav-container {
            padding: 0 1rem;
            height: 56px;
        }

        .header.scrolled .nav-container {
            height: 50px;
            padding: 0 1rem;
        }

        .nav-menu {
            /* Completely reset ALL inherited transformations */
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            margin: 0 !important;
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem !important;
            /* Reset ALL transforms and only apply slide animation */
            transform: translateX(-100%) !important;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            box-shadow: none;
            border-radius: 0 !important;
            border: none !important;
            gap: 1.5rem !important;
            z-index: 1001;
            visibility: hidden;
            opacity: 0;
            overflow: hidden;
            /* Completely isolate from parent transformations */
            transform-origin: initial !important;
            will-change: transform !important;
        }

        .nav-menu.active {
            transform: translateX(0) !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Override ALL possible parent transform inheritance */
        .nav .nav-menu,
        .nav.island .nav-menu,
        .header .nav-menu,
        .header.scrolled .nav-menu,
        .header .nav .nav-menu,
        .header.scrolled .nav .nav-menu,
        .header .nav.island .nav-menu,
        .header.scrolled .nav.island .nav-menu {
            /* Force reset of ALL inherited styles */
            transform: translateX(-100%) !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            margin: 0 !important;
            padding: 2rem !important;
            visibility: hidden !important;
            opacity: 0 !important;
            display: flex !important;
            border-radius: 0 !important;
            border: none !important;
            gap: 1.5rem !important;
            overflow: hidden !important;
            font-size: initial !important;
            /* Block any parent transformations */
            transform-origin: initial !important;
            will-change: transform !important;
        }

        /* Active state overrides for ALL parent combinations */
        .nav .nav-menu.active,
        .nav.island .nav-menu.active,
        .header .nav-menu.active,
        .header.scrolled .nav-menu.active,
        .header .nav .nav-menu.active,
        .header.scrolled .nav .nav-menu.active,
        .header .nav.island .nav-menu.active,
        .header.scrolled .nav.island .nav-menu.active {
            transform: translateX(0) !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .nav-menu .nav-link {
            font-size: 1.5rem !important;
            text-align: center;
            padding: 1rem 0 !important;
            font-weight: 600;
        }

        /* Ensure nav-links don't shrink on scroll */
        .header.scrolled .nav-menu .nav-link {
            font-size: 1.5rem !important;
            padding: 1rem 0 !important;
        }

        .mobile-actions .btn {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
            border-radius: 12px !important;
        }

        /* Ensure mobile action buttons don't shrink on scroll */
        .header.scrolled .mobile-actions .btn {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
            border-radius: 12px !important;
        }

        .nav-actions {
            display: none;
        }

        .mobile-actions {
            display: flex;
        }

        .mobile-actions .btn {
            padding: 1rem 2rem;
            font-size: 1rem;
            border-radius: 12px;
        }

        .mobile-menu-toggle {
            display: flex;
            z-index: 1003 !important; /* Higher than nav and mobile menu */
            position: relative !important;
        }

        .header.scrolled .mobile-menu-toggle {
            display: flex !important;
            z-index: 1003 !important; /* Ensure it stays above island nav */
            position: relative !important;
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            padding: 0.5rem !important;
            border-radius: 6px !important;
            width: 40px !important;
            height: 40px !important;
            justify-content: center !important;
            align-items: center !important;
            flex-direction: column !important;
        }

        /* Ensure mobile menu toggle remains visible and unchanged when scrolling */
        .header.scrolled .mobile-menu-toggle {
            display: flex !important;
            z-index: 1002 !important;
            position: relative !important;
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            padding: 0.5rem !important;
            border-radius: 6px !important;
            width: 40px !important;
            height: 40px !important;
            justify-content: center !important;
            align-items: center !important;
            flex-direction: column !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
        }

        /* Ensure spans inside toggle button remain consistent */
        .mobile-menu-toggle span {
            width: 25px !important;
            height: 3px !important;
            background: var(--text-dark) !important;
            margin: 3px 0 !important;
            transition: all 0.3s ease !important;
            border-radius: 2px !important;
        }

        .header.scrolled .mobile-menu-toggle span {
            width: 25px !important;
            height: 3px !important;
            background: var(--text-dark) !important;
            margin: 3px 0 !important;
            transition: all 0.3s ease !important;
            border-radius: 2px !important;
        }

        /* Ensure active state animations work on scroll */
        .header.scrolled .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px) !important;
        }

        .header.scrolled .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0 !important;
        }

        .header.scrolled .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px) !important;
        }

        .mobile-menu-toggle:hover {
            background: rgba(234, 88, 12, 0.1);
        }

        .mobile-menu-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-dark);
            margin: 3px 0;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        .mobile-menu-toggle:hover span {
            background: var(--primary-coral);
        }

        /* Mobile menu animation */
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }

    /* Smooth scroll behavior for anchor links */
    :global(html) {
        scroll-behavior: smooth;
    }

    /* Reduced padding to body to account for fixed header */
    :global(body) {
        padding-top: 80px;
    }

    @media (max-width: 768px) {
        :global(body) {
            padding-top: 70px;
        }
    }

    /* Hide entire header when mobile menu is open */
    body.mobile-menu-open .header {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
    }

    /* Mobile menu close button */
    .mobile-menu-close {
        position: absolute;
        top: 1rem; /* Match header padding */
        right: 1rem; /* Match header padding */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
        z-index: 1010;
    }

    .mobile-menu-close:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
        transform: scale(1.05);
    }

    .mobile-menu-close span {
        display: block;
        width: 20px;
        height: 2px;
        background: #374151;
        border-radius: 1px;
        transition: all 0.2s ease;
        position: absolute;
    }

    .mobile-menu-close span:nth-child(1) {
        transform: rotate(45deg);
    }

    .mobile-menu-close span:nth-child(2) {
        transform: rotate(-45deg);
    }

    /* Ensure mobile menu has higher z-index than hidden header */
    .mobile-nav {
        z-index: 1005 !important;
    }

    .mobile-nav.active {
        transform: translateX(0) !important;
        visibility: visible;
        opacity: 1;
    }
</style>
