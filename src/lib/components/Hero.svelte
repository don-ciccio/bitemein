<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <div class="hero-badge">
                    <span class="badge-text"
                        >🚀 Transform Your Shopify Store into a Complete Dining
                        Reservation System</span
                    >
                </div>
                <h1 class="hero-title">
                    Smart Table Reservations with
                    <span class="highlight"
                        >Automated Emails & Real-Time Scheduling</span
                    >
                </h1>
                <p class="hero-subtitle">
                    BiteMe In transforms your Shopify store into a complete
                    dining reservation system. Customers book tables directly
                    from your website while you manage availability, time slots,
                    and capacity in real-time. Reduce no-shows with automated
                    reminders and integrate seamlessly with your existing theme.
                </p>
                <div class="hero-actions">
                    <a
                        href="https://apps.shopify.com/bitemein-restaurant-booking"
                        class="btn btn-primary btn-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Install Free App
                        <span class="btn-icon">→</span>
                    </a>
                    <a href="/#features" class="btn btn-outline btn-large">
                        View Features
                    </a>
                </div>
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-number">Free</div>
                        <div class="stat-label">Plan Available</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">Real-Time</div>
                        <div class="stat-label">Scheduling</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">One-Click</div>
                        <div class="stat-label">Installation</div>
                    </div>
                </div>
            </div>
            <div class="hero-visual">
                <div class="hero-image">
                    <img
                        src="/assets/vecteezy_man-in-a-restaurant-looking-at-the-food-menu-illustration.png"
                        alt="Customer browsing restaurant menu"
                        class="dashboard-preview"
                    />
                    <div class="floating-card card-1">
                        <div class="card-content">
                            <div class="card-icon">📅</div>
                            <div class="card-text">
                                <div class="card-title">
                                    Live Capacity Tracking
                                </div>
                                <div class="card-subtitle">
                                    Conflict Prevention
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="floating-card card-2">
                        <div class="card-content">
                            <div class="card-icon">✅</div>
                            <div class="card-text">
                                <div class="card-title">Smart Reminders</div>
                                <div class="card-subtitle">Reduce No-Shows</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        padding: 120px 0 80px;
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        position: relative;
        overflow: hidden;
        padding-top: 200px; /* Extended to cover header area */
        margin-top: -80px; /* Pull up to cover header space */
    }

    .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        pointer-events: none;
    }

    .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 1;
    }

    .hero-badge {
        display: inline-block;
        margin-bottom: 1.5rem;
    }

    .badge-text {
        background: rgba(234, 88, 12, 0.1);
        color: var(--primary-coral);
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 0.7rem;
        font-weight: 600;
        border: 1px solid rgba(234, 88, 12, 0.2);
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
    }

    .highlight {
        color: var(--primary-coral);
        position: relative;
    }

    .highlight::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: rgba(234, 88, 12, 0.2);
        z-index: -1;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.6;
        color: #6b7280;
        margin-bottom: 2.5rem;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
        margin-bottom: 3rem;
    }

    .btn-large {
        padding: 1rem 2rem;
        font-size: 1.1rem;
    }

    .btn-icon {
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
    }

    .btn-primary:hover .btn-icon {
        transform: translateX(4px);
    }

    .hero-stats {
        display: flex;
        gap: 2rem;
    }

    .stat {
        text-align: center;
    }

    .stat-number {
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary-coral);
        line-height: 1;
    }

    .stat-label {
        font-size: 0.9rem;
        color: #6b7280;
        margin-top: 0.25rem;
    }

    .hero-visual {
        position: relative;
    }

    .hero-image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem;
    }

    .dashboard-preview {
        width: 100%;
        max-width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 16px;
    }

    @media (max-width: 768px) {
        .hero-image {
            padding: 2rem;
        }
        .dashboard-preview {
            max-width: 300px;
            height: 300px;
        }
    }

    @media (max-width: 480px) {
        .hero-image {
            padding: 1.5rem;
        }
        .dashboard-preview {
            max-width: 250px;
            height: 250px;
        }
    }

    .floating-card {
        position: absolute;
        background: white;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        animation: float 3s ease-in-out infinite;
    }

    .card-1 {
        top: 20%;
        left: -10%;
        animation-delay: 0s;
    }

    .card-2 {
        bottom: 20%;
        right: -10%;
        animation-delay: 1.5s;
    }

    .card-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .card-icon {
        font-size: 1.5rem;
    }

    .card-title {
        font-weight: 600;
        color: var(--text-dark);
        font-size: 0.9rem;
    }

    .card-subtitle {
        color: #6b7280;
        font-size: 0.8rem;
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 768px) {
        .hero {
            padding: 100px 0 60px;
        }

        .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
        }

        .hero-title {
            font-size: 2.5rem;
        }

        .hero-actions {
            flex-direction: column;
            align-items: center;
        }

        .hero-stats {
            justify-content: center;
        }

        .floating-card {
            display: none;
        }
    }
</style>
