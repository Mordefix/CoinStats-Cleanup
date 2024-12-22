function removeBanners() {
    const bannerSelectors = [
        '.PremiumBanner_premium-banner__shwNg',
        '.PremiumBanner_premium-bannershwNg',
        '.FloatingBanner_floating-banner-wrapper__o9s9V'
    ];

    bannerSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
    });

    const header = document.querySelector('header.NewResponsiveHeader_header__2go9s');
    if (header) {
        header.className = 'NewResponsiveHeader_header__2go9s NewResponsiveHeader_up__dE8nK up';
    }
}

removeBanners();

const observer = new MutationObserver((mutations) => {
    removeBanners();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
