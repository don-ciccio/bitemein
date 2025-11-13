<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <img
                        src="/assets/restyling/BiteMe In-29.png"
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
                        <a
                            href="https://apps.shopify.com/bitemein-restaurant-booking"
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
        background-color: var(--primary-coral);
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
        height: 56px;
        width: auto;
        margin-bottom: 1rem;
    }

    .footer-section p {
        color: rgba(255, 255, 255, 0.8);
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
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
        color: var(--white);
    }

    .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .footer-bottom-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-bottom p {
        color: rgba(255, 255, 255, 0.8);
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
