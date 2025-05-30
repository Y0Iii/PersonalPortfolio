        // Mobile menu toggle
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = Array.from(mobileMenu.querySelectorAll('a')); // Get all links in mobile menu
        const mainNavLinks = Array.from(document.querySelectorAll('nav .hidden.md\\:block a')); // Desktop nav links

        function handleMenuToggle() {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
            menuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
            // Toggle icons
            menuButton.querySelectorAll('svg').forEach(icon => icon.classList.toggle('hidden'));
        }

        menuButton.addEventListener('click', handleMenuToggle);

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    handleMenuToggle(); // Use the toggle function to ensure icons also update
                }
            });
        });

        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const hrefAttribute = this.getAttribute('href');
                if (hrefAttribute.startsWith('#') && hrefAttribute.length > 1) {
                    const targetElement = document.getElementById(hrefAttribute.substring(1));
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });