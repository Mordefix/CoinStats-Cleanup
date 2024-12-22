function removeBanners() {
    // Premium banner selectors
    const bannerSelectors = [
        '.PremiumBanner_premium-banner__shwNg',
        '.PremiumBanner_premium-bannershwNg',
        '.FloatingBanner_floating-banner-wrapper__o9s9V'
    ];

    // Remove each banner if found
    bannerSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
    });

    // Fix header class
    const header = document.querySelector('header.NewResponsiveHeader_header__2go9s');
    if (header) {
        header.className = 'NewResponsiveHeader_header__2go9s NewResponsiveHeader_up__dE8nK up';
    }
}

// Initial removal
removeBanners();

// Create an observer to handle dynamically loaded banners
const observer = new MutationObserver((mutations) => {
    removeBanners();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});
