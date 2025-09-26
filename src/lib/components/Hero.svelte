<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <div class="hero-badge">
                    <span class="badge-text">
                        <svg class="badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        Transform Your Shopify Store into a Complete Dining Reservation System
                    </span>
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
                        Try BiteMe In for Free
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
                        src="/assets/restyling/BiteMe In-37.svg"
                        alt="Customer browsing restaurant menu"
                        class="dashboard-preview"
                    />

                    <div class="floating-card card-1">
                        <div class="card-content">
                            <div class="card-icon">
                                <img
                                    src="/assets/restyling/BiteMe In-36.svg"
                                    alt="Calendar icon"
                                />
                            </div>
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
                            <div class="card-icon">
                                <img
                                    src="/assets/restyling/BiteMe In-35.svg"
                                    alt="Check icon"
                                />
                            </div>
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
        background: linear-gradient(
            135deg,
            var(--primary-coral) 0%,
            #ff7a79 100%
        );
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
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, rgba(251, 94, 93, 0.15), rgba(251, 94, 93, 0.25));
        color: var(--white);
        padding: 0.75rem 1.25rem;
        border-radius: 50px;
        font-size: 0.875rem;
        font-weight: 600;
        border: 1px solid rgba(251, 94, 93, 0.3);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(251, 94, 93, 0.2);
        transition: all 0.3s ease;
    }

    .badge-text:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(251, 94, 93, 0.3);
        border-color: rgba(251, 94, 93, 0.5);
    }

    .badge-icon {
        flex-shrink: 0;
        opacity: 0.9;
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        color: var(--white);
    }

    .highlight {
        color: var(--white);
        position: relative;
    }

    .highlight::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.3);
        z-index: -1;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
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
        color: var(--white);
        line-height: 1;
    }

    .stat-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
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
        max-width: 500px;
        height: 500px;
        object-fit: cover;
        border-radius: 16px;
    }

    .floating-card {
        position: absolute;
        background: white;
        border-radius: 16px;
        padding: 0.35rem;
        box-shadow: 0 10px 30px rgba(251, 94, 93, 0.15);
        animation: float 3s ease-in-out infinite;
        border: 1px solid rgba(251, 94, 93, 0.1);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    .floating-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(251, 94, 93, 0.25);
        border-color: rgba(251, 94, 93, 0.2);
    }

    .decorative-svg {
        position: absolute;
        opacity: 0.6;
        animation: float 4s ease-in-out infinite;
        z-index: 1;
    }

    .decorative-svg img {
        width: 60px;
        height: 60px;
        filter: drop-shadow(0 4px 8px rgba(251, 94, 93, 0.3));
    }

    .svg-1 {
        top: 10%;
        right: 15%;
        animation-delay: 0.5s;
    }

    .svg-2 {
        bottom: 30%;
        left: 5%;
        animation-delay: 2s;
    }

    .svg-3 {
        top: 60%;
        right: 5%;
        animation-delay: 3s;
    }

    .card-1 {
        top: 9%;
        left: -8%;
        animation-delay: 0s;
        z-index: -1;
    }

    .card-2 {
        bottom: 5%;
        right: -4%;
        animation-delay: 1.5s;
        z-index: -1;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 184px;
        height: 184px;

        flex-shrink: 0;
    }

    .card-icon img {
        width: 100%;
        height: 100%;
    }

    .card-title {
        font-weight: 700;
        color: var(--text-dark);
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    .card-subtitle {
        color: #6b7280;
        font-size: 0.875rem;
        font-weight: 500;
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
        .hero-image {
            padding: 1rem;
        }
        .dashboard-preview {
            max-width: 500px;
            height: 500px;
        }
    }

    @media (max-width: 480px) {
        .hero-image {
            padding: 0.5rem;
        }
        .dashboard-preview {
            max-width: 400px;
            height: 400px;
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

        .hero-badge {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
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
