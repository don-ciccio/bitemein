<section id="pricing" class="section pricing">
    <div class="container">
        <div class="section-header text-center">
            <h2>Simple, Transparent Pricing</h2>
            <p>
                Start with our free plan and upgrade as your restaurant grows.
                All plans include core booking features.
            </p>
        </div>

        <div class="pricing-grid grid grid-3">
            <div class="pricing-card">
                <div class="plan-header">
                    <h3>Free</h3>
                    <div class="price">
                        <span class="currency">$</span>
                        <span class="amount">0</span>
                        <span class="period">/month</span>
                    </div>
                    <p>Perfect for small restaurants getting started</p>
                </div>
                <ul class="features-list">
                    <li>✓ Up to 15 reservations per month</li>
                    <li>✓ Up to 10 tables</li>
                    <li>✓ Basic reservation management</li>
                    <li>✓ Email notifications</li>
                    <li>✓ Single timeslot mode only</li>
                    <li>✓ Blackout days management</li>
                </ul>
                <a
                    href="https://apps.shopify.com/bitemein-restaurant-booking"
                    class="btn btn-secondary btn-full"
                    target="_blank"
                    rel="noopener noreferrer">Start Free</a
                >
            </div>

            <div class="pricing-card popular">
                <div class="popular-badge">Most Popular</div>
                <div class="plan-header">
                    <h3>Essential</h3>
                    <div class="price">
                        <span class="currency">$</span>
                        <span class="amount">9.99</span>
                        <span class="period">/month</span>
                    </div>
                    <p>Everything in Essential</p>
                </div>
                <ul class="features-list">
                    <li>✓ Unlimited reservations</li>
                    <li>✓ Up to 20 tables</li>
                    <li>✓ Standard time slots</li>
                    <li>✓ Unlimited tables</li>
                    <li>✓ Custom timeslots</li>
                    <li>✓ Range mode reservations</li>
                    <li>✓ Table merging capabilities</li>
                    <li>✓ Advanced reservation management</li>
                </ul>
                <a
                    href="https://apps.shopify.com/bitemein-restaurant-booking"
                    class="btn btn-primary btn-full"
                    target="_blank"
                    rel="noopener noreferrer">Install App</a
                >
            </div>

            <div class="pricing-card">
                <div class="plan-header">
                    <h3>Pro</h3>
                    <div class="price">
                        <span class="currency">$</span>
                        <span class="amount">29.99</span>
                        <span class="period">/month</span>
                    </div>
                    <p>Everything in Essential</p>
                </div>
                <ul class="features-list">
                    <li>✓ Everything in Essential</li>
                    <li>✓ Unlimited tables</li>
                    <li>✓ Custom timeslots</li>
                    <li>✓ Range mode reservations</li>
                    <li>✓ Table merging capabilities</li>
                    <li>✓ Advanced reservation management</li>
                </ul>
                <a
                    href="https://apps.shopify.com/bitemein-restaurant-booking"
                    class="btn btn-primary btn-full"
                    target="_blank"
                    rel="noopener noreferrer">Install App</a
                >
            </div>
        </div>

        <div class="pricing-features">
            <div class="container">
                <div class="text-center" style="margin-top: 3rem;">
                    <h3>All Plans Include</h3>
                    <div class="grid grid-3" style="margin-top: 2rem;">
                        <div class="benefit">
                            <div class="benefit-icon">🎯</div>
                            <h4>Dynamic Table Allocation</h4>
                            <p>
                                Live capacity tracking with conflict prevention
                            </p>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">🔧</div>
                            <h4>One-Click Widget</h4>
                            <p>Auto-adapts to any Shopify theme</p>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">📧</div>
                            <h4>Smart Reminders</h4>
                            <p>Automated confirmation emails</p>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">⚡</div>
                            <h4>Real-Time Scheduling</h4>
                            <p>Instant availability management</p>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">🎨</div>
                            <h4>Theme Compatible</h4>
                            <p>Works with latest Shopify themes</p>
                        </div>
                        <div class="benefit">
                            <div class="benefit-icon">🛡️</div>
                            <h4>Admin Integration</h4>
                            <p>Manage from Shopify admin panel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .pricing {
        background-color: var(--bg-light);
    }

    .section-header {
        margin-bottom: 4rem;
    }

    .section-header h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--text-dark);
    }

    .section-header p {
        font-size: 1.2rem;
        color: var(--text-gray);
    }

    .pricing-grid {
        margin-bottom: 2rem;
    }

    .pricing-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        position: relative;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }

    .pricing-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .pricing-card.popular {
        border-color: var(--primary-coral);
        box-shadow: 0 8px 25px rgba(234, 88, 12, 0.15);
    }

    .popular-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-coral);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .plan-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .plan-header h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text-dark);
    }

    .price {
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .currency {
        font-size: 1.5rem;
        color: var(--primary-coral);
        font-weight: 600;
    }

    .amount {
        font-size: 3rem;
        font-weight: 800;
        color: var(--primary-coral);
        line-height: 1;
    }

    .period {
        font-size: 1rem;
        color: #6b7280;
        margin-left: 0.25rem;
    }

    .plan-header p {
        color: #6b7280;
        margin: 0;
    }

    .features-list {
        list-style: none;
        margin-bottom: 2rem;
    }

    .features-list li {
        padding: 0.5rem 0;
        color: var(--text-dark);
        font-size: 0.95rem;
    }

    .btn-full {
        width: 100%;
        text-align: center;
    }

    .plan-note {
        text-align: center;
        color: #6b7280;
        font-size: 0.85rem;
        margin-top: 1rem;
    }

    .benefit {
        text-align: center;
        padding: 1rem;
    }

    .benefit-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .benefit h4 {
        margin-bottom: 0.5rem;
        color: var(--text-dark);
    }

    .benefit p {
        color: var(--text-gray);
        font-size: 0.9rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .pricing-grid {
            grid-template-columns: 1fr;
        }

        .grid-3 {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }
</style>
