import { error } from '@sveltejs/kit';

// Sample blog posts data - same as in the index page
const posts = [
    {
        slug: 'getting-started-with-food-delivery',
        title: 'Getting Started with Food Delivery: A Complete Guide',
        excerpt: 'Learn the essential steps to launch your food delivery business successfully.',
        content: `
            <p>Starting a food delivery business can be an exciting venture, but it requires careful planning and execution. In this comprehensive guide, we'll walk you through the essential steps to get your food delivery service off the ground.</p>
            
            <h2>1. Market Research</h2>
            <p>Before diving in, it's crucial to understand your local market. Research your competition, identify gaps in the market, and understand your target customers' preferences.</p>
            
            <h2>2. Business Model</h2>
            <p>Decide whether you'll be a restaurant with delivery, a delivery-only kitchen, or a platform connecting restaurants with customers. Each model has its own advantages and challenges.</p>
            
            <h2>3. Technology Platform</h2>
            <p>Invest in a reliable technology platform that can handle orders, payments, and delivery tracking. This is where BiteMe In can help streamline your operations.</p>
            
            <h2>4. Legal Requirements</h2>
            <p>Ensure you have all necessary licenses, permits, and insurance. Food safety regulations are particularly important in this industry.</p>
            
            <h2>5. Marketing Strategy</h2>
            <p>Develop a strong marketing strategy to attract customers. Social media, local partnerships, and promotional offers can be effective ways to build your customer base.</p>
        `,
        date: '2024-01-15',
        author: 'BiteMe In Team'
    },
    {
        slug: 'restaurant-management-tips',
        title: '10 Essential Restaurant Management Tips',
        excerpt: 'Discover proven strategies to improve your restaurant operations and customer satisfaction.',
        content: `
            <p>Running a successful restaurant requires more than just great food. Here are 10 essential tips to help you manage your restaurant effectively and keep customers coming back.</p>
            
            <h2>1. Focus on Customer Service</h2>
            <p>Exceptional customer service is what sets great restaurants apart. Train your staff to be attentive, friendly, and responsive to customer needs.</p>
            
            <h2>2. Maintain Consistent Quality</h2>
            <p>Consistency is key in the restaurant business. Ensure that every dish meets your quality standards, every time.</p>
            
            <h2>3. Manage Your Inventory</h2>
            <p>Effective inventory management helps reduce waste and control costs. Use technology to track your inventory and predict demand.</p>
            
            <h2>4. Optimize Your Menu</h2>
            <p>Regularly review your menu performance. Remove items that don't sell well and highlight your most profitable dishes.</p>
            
            <h2>5. Embrace Technology</h2>
            <p>Modern restaurant management systems can streamline operations, from order taking to inventory management and customer relationship management.</p>
        `,
        date: '2024-01-10',
        author: 'BiteMe In Team'
    },
    {
        slug: 'digital-transformation-restaurants',
        title: 'Digital Transformation in the Restaurant Industry',
        excerpt: 'How technology is reshaping the way restaurants operate and serve customers.',
        content: `
            <p>The restaurant industry is undergoing a significant digital transformation. From online ordering to AI-powered analytics, technology is reshaping how restaurants operate and serve their customers.</p>
            
            <h2>The Rise of Online Ordering</h2>
            <p>Online ordering has become essential, especially after the pandemic. Restaurants that adapted quickly to digital ordering platforms saw better survival rates and growth.</p>
            
            <h2>Data-Driven Decision Making</h2>
            <p>Modern restaurant management systems provide valuable insights into customer behavior, popular items, and operational efficiency. This data helps restaurants make informed decisions.</p>
            
            <h2>Contactless Solutions</h2>
            <p>QR code menus, contactless payments, and mobile ordering have become standard features that customers now expect.</p>
            
            <h2>The Future of Restaurant Technology</h2>
            <p>Looking ahead, we can expect to see more AI integration, automated kitchen equipment, and enhanced customer personalization through technology.</p>
        `,
        date: '2024-01-05',
        author: 'BiteMe In Team'
    }
];

export async function load({ params }) {
    const post = posts.find(p => p.slug === params.slug);
    
    if (!post) {
        throw error(404, 'Post not found');
    }
    
    return {
        post
    };
}