<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <img
                        src="/assets/default-monochrome.svg"
                        alt="BiteMe In"
                        class="footer-logo-img"
                    />
                </div>
                <p>
                    The leading restaurant table booking app for Shopify. Reduce
                    no-shows and streamline your reservation process.
                </p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/#features">Features</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="mailto:support@bitemein.com">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get Started</h4>
                <ul>
                    <li>
                        <a href="https://apps.shopify.com/biteme-in"
                            >Install Shopify App</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; 2025 BiteMe In. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--text-dark);
        color: white;
        padding: 4rem 0 0;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }

    .footer-logo-img {
        height: 40px;
        width: auto;
        margin-bottom: 1rem;
        filter: brightness(0) invert(1);
    }

    .footer-section p {
        color: #9ca3af;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .footer-section h4 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: white;
    }

    .footer-section ul {
        list-style: none;
    }

    .footer-section ul li {
        margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
        color: #9ca3af;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
        color: var(--primary-coral);
    }

    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-links a {
        font-size: 1.5rem;
        transition: transform 0.3s ease;
        color: #9ca3af;
        text-decoration: none;
    }

    .social-links a:hover {
        transform: translateY(-2px);
        color: var(--primary-coral);
    }

    .footer-bottom {
        border-top: 1px solid #374151;
        padding: 2rem 0;
    }

    .footer-bottom-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-bottom p {
        color: #9ca3af;
        margin: 0;
    }

    @media (max-width: 768px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-bottom-content {
            text-align: center;
        }
    }
</style>
