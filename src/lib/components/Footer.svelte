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
                <div class="social-links">
                    <a
                        href="https://twitter.com/bitemein"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer">🐦</a
                    >
                    <a
                        href="https://facebook.com/bitemein"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer">📘</a
                    >
                    <a
                        href="https://instagram.com/bitemein"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer">📷</a
                    >
                    <a
                        href="https://linkedin.com/company/bitemein"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer">💼</a
                    >
                </div>
            </div>

            <div class="footer-section">
                <h4>Product</h4>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li>
                        <a href="https://apps.shopify.com/biteme-in"
                            >Shopify App</a
                        >
                    </li>
                    <li>
                        <span class="footer-link-placeholder"
                            >API Documentation</span
                        >
                    </li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Support</h4>
                <ul>
                    <li>
                        <span class="footer-link-placeholder">Help Center</span>
                    </li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li>
                        <span class="footer-link-placeholder">Setup Guide</span>
                    </li>
                    <li>
                        <span class="footer-link-placeholder"
                            >Video Tutorials</span
                        >
                    </li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Company</h4>
                <ul>
                    <li>
                        <span class="footer-link-placeholder">About Us</span>
                    </li>
                    <li><span class="footer-link-placeholder">Blog</span></li>
                    <li>
                        <span class="footer-link-placeholder">Careers</span>
                    </li>
                    <li>
                        <span class="footer-link-placeholder">Press Kit</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; 2024 BiteMe In. All rights reserved.</p>
                <div class="footer-links">
                    <span class="footer-link-placeholder">Privacy Policy</span>
                    <span class="footer-link-placeholder">Terms of Service</span
                    >
                    <span class="footer-link-placeholder">Cookie Policy</span>
                </div>
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
        grid-template-columns: 2fr 1fr 1fr 1fr;
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

    .footer-link-placeholder {
        color: #6b7280;
        cursor: default;
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
        justify-content: space-between;
        align-items: center;
    }

    .footer-bottom p {
        color: #9ca3af;
        margin: 0;
    }

    .footer-links {
        display: flex;
        gap: 2rem;
    }

    .footer-links a {
        color: #9ca3af;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
    }

    .footer-links a:hover {
        color: var(--primary-coral);
    }

    @media (max-width: 768px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .footer-links {
            justify-content: center;
        }
    }
</style>
