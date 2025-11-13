<section class="section cta">
    <div class="container">
        <div class="cta-content">
            <div class="cta-visual">
                <img
                    src="/assets/restyling/BiteMe In-34.svg"
                    alt="BiteMe In Restaurant Booking"
                    class="cta-image"
                />
            </div>
            <div class="cta-text">
                <h2>Ready to Transform Your Restaurant?</h2>
                <p>
                    Streamline bookings and fill cancellations automatically with our
                    smart waitlist and table reservation system
                </p>
                <div class="cta-buttons">
                    <a
                        href="https://apps.shopify.com/bitemein-restaurant-booking"
                        class="btn btn-primary btn-large"
                    >
                        Get Started
                    </a>
                    <a
                        href="mailto:support@bitemein.com"
                        class="btn btn-outline btn-large"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .cta {
        background: linear-gradient(
            135deg,
            var(--primary-coral) 0%,
            #ff7a79 100%
        );
        overflow: hidden;
        position: relative;
    }

    .cta-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        min-height: 400px;
    }

    .cta-visual {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .cta-image {
        width: 100%;
        max-width: 300px;
        height: auto;
        filter: brightness(1.5) contrast(1.2) opacity(3.8)
            drop-shadow(0 10px 30px rgba(184, 8, 8, 0.2));
    }

    .cta-text {
        text-align: left;
    }

    .cta-text h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--white);
        line-height: 1.2;
    }

    .cta-text p {
        font-size: 1.2rem;
        color: var(--white);
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .cta-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
        }

        .cta-text {
            text-align: center;
        }

        .cta-text h2 {
            font-size: 2rem;
        }

        .cta-image {
            max-width: 250px;
        }

        .cta-buttons {
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 480px) {
        .cta-image {
            max-width: 200px;
        }

        .cta-text h2 {
            font-size: 1.8rem;
        }

        .cta-text p {
            font-size: 1.1rem;
        }
    }
</style>
