    // Tech background images that rotate automatically
    const techBackgrounds = [
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop")',
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop")',
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop")',
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop")',
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=800&fit=crop")',
      'linear-gradient(135deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.7) 50%, rgba(13, 13, 31, 0.7) 100%), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop")'
    ];

    let currentBgIndex = 0;
    const heroGradientEl = document.querySelector('.hero-gradient');
    let nextBgIndex = 1;
    
    // Create two background layers for smooth transition
    const bgLayer1 = document.createElement('div');
    bgLayer1.className = 'hero-gradient';
    bgLayer1.style.position = 'absolute';
    bgLayer1.style.inset = '0';
    bgLayer1.style.backgroundSize = 'cover';
    bgLayer1.style.backgroundPosition = 'center';
    bgLayer1.style.zIndex = '1';
    bgLayer1.style.opacity = '1';
    
    const bgLayer2 = document.createElement('div');
    bgLayer2.className = 'hero-gradient';
    bgLayer2.style.position = 'absolute';
    bgLayer2.style.inset = '0';
    bgLayer2.style.backgroundSize = 'cover';
    bgLayer2.style.backgroundPosition = 'center';
    bgLayer2.style.zIndex = '1';
    bgLayer2.style.opacity = '0';

    // Initialize backgrounds
    if (heroGradientEl && heroGradientEl.parentElement) {
      bgLayer1.style.backgroundImage = techBackgrounds[0];
      bgLayer2.style.backgroundImage = techBackgrounds[1];
      
      // Replace original with our dual-layer setup
      heroGradientEl.parentElement.insertBefore(bgLayer1, heroGradientEl);
      heroGradientEl.parentElement.insertBefore(bgLayer2, heroGradientEl);
      heroGradientEl.style.display = 'none';
      
      // Rotate backgrounds every 20 seconds with smooth 8-second crossfade
      setInterval(() => {
        currentBgIndex = (currentBgIndex + 1) % techBackgrounds.length;
        nextBgIndex = (currentBgIndex + 1) % techBackgrounds.length;
        
        // Determine which layer to fade to
        const activeBg = parseFloat(bgLayer1.style.opacity) === 1 ? bgLayer1 : bgLayer2;
        const nextBg = activeBg === bgLayer1 ? bgLayer2 : bgLayer1;
        
        // Set next image and crossfade
        nextBg.style.backgroundImage = techBackgrounds[currentBgIndex];
        nextBg.style.transition = 'opacity 8s ease-in-out';
        nextBg.style.opacity = '1';
        activeBg.style.opacity = '0';
      }, 28000);
    }

    const defaultConfig = {
      company_name: 'Cloud Connect AI',
      hero_title: 'Born to<br><span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>',
      hero_subtitle: 'Cloud Connect AI integrates your enterprise infrastructure with intelligent connectivity solutions. Unified, secure, and infinitely scalable.',
      cta_primary: 'Get Started Free',
      cta_secondary: 'Watch Demo',
      footer_text: '© 2024 Cloud Connect AI. All rights reserved.',
      background_color: '#0a0e27',
      surface_color: 'rgba(255, 255, 255, 0.03)',
      text_color: '#ffffff',
      primary_action_color: '#2563eb',
      secondary_action_color: '#9ca3af',
      font_family: 'Space Grotesk',
      font_size: 16
    };

    async function onConfigChange(config) {
      const heroTitle = document.getElementById('hero-title');
      const heroSubtitle = document.getElementById('hero-subtitle');
      const ctaPrimaryBtn = document.getElementById('cta-primary-btn');
      const ctaSecondaryBtn = document.getElementById('cta-secondary-btn');
      const footerText = document.getElementById('footer-text');
      const brandName = document.getElementById('brand-name');

      if (brandName) {
        brandName.textContent = config.company_name || defaultConfig.company_name;
      }
      if (heroTitle) {
        heroTitle.innerHTML = config.hero_title || defaultConfig.hero_title;
      }
      if (heroSubtitle) {
        heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      }
      if (ctaPrimaryBtn) {
        const span = ctaPrimaryBtn.querySelector('span:first-of-type');
        if (span) span.textContent = config.cta_primary || defaultConfig.cta_primary;
      }
      if (ctaSecondaryBtn) {
        const span = ctaSecondaryBtn.querySelector('span');
        if (span) span.textContent = config.cta_secondary || defaultConfig.cta_secondary;
      }
      if (footerText) {
        footerText.textContent = config.footer_text || defaultConfig.footer_text;
      }

      // Apply font
      const fontFamily = config.font_family || defaultConfig.font_family;
      document.body.style.fontFamily = `${fontFamily}, sans-serif`;

      // Apply font size scaling
      const baseSize = config.font_size || defaultConfig.font_size;
      if (heroSubtitle) heroSubtitle.style.fontSize = `${baseSize * 1.25}px`;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
              config.primary_action_color = value;
              window.elementSdk.setConfig({ primary_action_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ['company_name', config.company_name || defaultConfig.company_name],
        ['hero_title', config.hero_title || defaultConfig.hero_title],
        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
        ['cta_primary', config.cta_primary || defaultConfig.cta_primary],
        ['cta_secondary', config.cta_secondary || defaultConfig.cta_secondary],
        ['footer_text', config.footer_text || defaultConfig.footer_text]
      ]);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle('hidden');
      menuIcon.setAttribute('d', isMenuOpen 
        ? 'M6 18L18 6M6 6l12 12' 
        : 'M4 6h16M4 12h16M4 18h16'
      );
    });

    // Navigation active state handler
    const navItems = document.querySelectorAll('.nav-item');
    
    function setActivePage(page) {
      navItems.forEach(item => {
        if (item.dataset.page === page) {
          item.classList.add('active', 'text-white');
          item.classList.remove('text-gray-300');
        } else {
          item.classList.remove('active', 'text-white');
          item.classList.add('text-gray-300');
        }
      });
    }

    // Handle hash navigation
    window.addEventListener('hashchange', () => {
      const page = window.location.hash.slice(1) || 'home';
      setActivePage(page);
    });

    // Set initial active page
    const initialPage = window.location.hash.slice(1) || 'home';
    setActivePage(initialPage);

    // Handle nav link clicks
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const page = item.dataset.page;
        setActivePage(page);
        if (isMenuOpen) {
          isMenuOpen = false;
          mobileMenu.classList.add('hidden');
          menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
      });
    });

    // Initialize SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }