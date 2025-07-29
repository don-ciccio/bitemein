<section id="contact" class="section contact">
    <div class="container">
        <div class="section-header text-center">
            <h2>Get in Touch</h2>
            <p>
                Have questions? We're here to help you get started with BiteMe
                In
            </p>
        </div>

        <div class="contact-content grid grid-2">
            <div class="contact-info">
                <h3>Contact Information</h3>
                <div class="contact-item">
                    <strong>📧 Email:</strong>
                    <p>support@bitemein.com</p>
                </div>
                <div class="contact-item">
                    <strong>💬 Live Chat:</strong>
                    <p>Available 24/7 in the Shopify app</p>
                </div>
                <div class="contact-item">
                    <strong>📚 Documentation:</strong>
                    <p>Complete setup guides and tutorials</p>
                </div>
            </div>

            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Restaurant Name" />
                    </div>
                    <div class="form-group">
                        <textarea placeholder="How can we help you?" rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-full"
                        >Send Message</button
                    >
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        background-color: var(--bg-light);
    }

    .contact-item {
        margin-bottom: 1.5rem;
    }

    .contact-item strong {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-dark);
    }

    .contact-item p {
        color: var(--text-gray);
        margin: 0;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-coral);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 100px;
    }
</style>
