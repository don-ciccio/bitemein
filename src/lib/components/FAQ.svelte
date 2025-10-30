<section id="faq" class="section faq">
    <div class="container">
        <div class="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>
                Get answers to common questions about BiteMe In Restaurant
                Booking
            </p>
        </div>

        <div class="faq-grid">
            <div class="faq-item">
                <h3 class="faq-question">
                    Does BiteMe In Restaurant Booking support multiple
                    locations?
                </h3>
                <p class="faq-answer">
                    Yes! Our Pro plan now supports up to 5 locations, allowing
                    you to manage multiple restaurant venues from a single
                    dashboard. This feature is perfect for restaurant groups or
                    businesses with several branches that need centralized
                    reservation management.
                </p>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">
                    Can I customize time slots and reservation limits?
                </h3>
                <p class="faq-answer">
                    Yes; Essential and Pro plans allow flexible time slots and
                    advanced management.
                </p>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Can I require reservation deposits?</h3>
                <p class="faq-answer">
                    Yes. You can enable conditional reservation deposits and set
                    rules based on party size, days of the week, and time of booking.
                    This helps reduce no-shows while keeping smaller parties and
                    off-peak bookings frictionless. Enable in Settings → Policies & Deposits.
                </p>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">How do I reduce no-shows?</h3>
                <p class="faq-answer">
                    Use the app's automated reminder and confirmation system to
                    keep guests informed and reduce missed reservations.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .faq {
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

    .faq-grid {
        display: grid;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto 4rem;
    }

    .faq-item {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .faq-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .faq-question {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--text-dark);
        font-weight: 600;
    }

    .faq-answer {
        color: var(--text-gray);
        line-height: 1.6;
        font-size: 1rem;
    }

    .faq-conclusion {
        background: linear-gradient(
            135deg,
            var(--primary-coral),
            var(--primary-yellow)
        );
        padding: 3rem;
        border-radius: 16px;
        text-align: center;
        color: white;
        max-width: 800px;
        margin: 0 auto;
    }

    .faq-conclusion h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .faq-conclusion p {
        font-size: 1.1rem;
        line-height: 1.6;
        opacity: 0.95;
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .faq-item {
            padding: 1.5rem;
        }

        .faq-question {
            font-size: 1.2rem;
        }

        .faq-conclusion {
            padding: 2rem;
        }

        .faq-conclusion h3 {
            font-size: 1.5rem;
        }
    }
</style>
