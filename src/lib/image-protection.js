// Image Protection JavaScript
// This script provides additional protection against image saving

// Disable right-click context menu on images and SVGs
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click on images and SVGs
    document.addEventListener('contextmenu', function(e) {
        const target = e.target;
        if (target && target instanceof Element && 
            (target.tagName === 'IMG' || target.tagName === 'SVG' || target.closest('svg'))) {
            e.preventDefault();
            return false;
        }
    });

    // Disable drag and drop for images and SVGs
    document.addEventListener('dragstart', function(e) {
        const target = e.target;
        if (target && target instanceof Element && 
            (target.tagName === 'IMG' || target.tagName === 'SVG' || target.closest('svg'))) {
            e.preventDefault();
            return false;
        }
    });

    // Disable keyboard shortcuts for saving images
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S, Ctrl+A, F12, Ctrl+Shift+I, Ctrl+U
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'u')) ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I')
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Disable text selection on images
    const images = document.querySelectorAll('img, svg');
    images.forEach(img => {
        if (img instanceof HTMLElement) {
            const style = img.style;
            style.setProperty('-webkit-user-select', 'none');
            style.setProperty('-moz-user-select', 'none');
            style.setProperty('-ms-user-select', 'none');
            style.userSelect = 'none';
            style.setProperty('-webkit-user-drag', 'none');
            style.setProperty('-webkit-touch-callout', 'none');
        }
    });

    // Add protection to dynamically loaded images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node instanceof Element) {
                    const newImages = node.querySelectorAll('img, svg');
                    newImages.forEach(img => {
                        if (img instanceof HTMLElement) {
                            const style = img.style;
                            style.setProperty('-webkit-user-select', 'none');
                            style.setProperty('-moz-user-select', 'none');
                            style.setProperty('-ms-user-select', 'none');
                            style.userSelect = 'none';
                            style.setProperty('-webkit-user-drag', 'none');
                            style.setProperty('-webkit-touch-callout', 'none');
                        }
                    });
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Additional protection: Clear clipboard when copying
document.addEventListener('copy', function(e) {
    const selection = window.getSelection();
    if (selection && selection.toString().length === 0 && e.clipboardData) {
        e.clipboardData.setData('text/plain', '');
        e.preventDefault();
    }
});

// Disable print screen (limited effectiveness)
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        if (navigator.clipboard) {
            navigator.clipboard.writeText('');
        }
        alert('Screenshots are disabled on this website.');
    }
});