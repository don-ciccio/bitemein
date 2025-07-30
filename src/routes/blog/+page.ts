// Sample blog posts data - in a real app, this would come from a CMS, database, or markdown files
const posts = [
    {
        slug: 'getting-started-with-food-delivery',
        title: 'Getting Started with Food Delivery: A Complete Guide',
        excerpt: 'Learn the essential steps to launch your food delivery business successfully.',
        content: 'Full content here...',
        date: '2024-01-15',
        author: 'BiteMe In Team'
    },
    {
        slug: 'restaurant-management-tips',
        title: '10 Essential Restaurant Management Tips',
        excerpt: 'Discover proven strategies to improve your restaurant operations and customer satisfaction.',
        content: 'Full content here...',
        date: '2024-01-10',
        author: 'BiteMe In Team'
    },
    {
        slug: 'digital-transformation-restaurants',
        title: 'Digital Transformation in the Restaurant Industry',
        excerpt: 'How technology is reshaping the way restaurants operate and serve customers.',
        content: 'Full content here...',
        date: '2024-01-05',
        author: 'BiteMe In Team'
    }
];

export async function load() {
    return {
        posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    };
}