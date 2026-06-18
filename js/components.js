// ============================================
// STUDO — Shared Components (Navbar + Mobile Bottom Nav)
// FIXED: Hamburger, event bubbling, all mobile bugs
// ============================================

(function () {
  // Apply saved dark mode before render
  if (localStorage.getItem('studo-theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Bottom nav (5 tabs on mobile)
  const NAV_LINKS = [
    { href: 'feed.html',        label: 'Home',     icon: 'home' },
    { href: 'notes.html',       label: 'Notes',    icon: 'file-text' },
    { href: 'marketplace.html', label: 'Market',   icon: 'shopping-bag' },
    { href: 'events.html',      label: 'Events',   icon: 'calendar' },
    { href: 'messages.html',    label: 'Chats',    icon: 'message-circle' },
  ];

  // Full list for sidebar and hamburger
  const ALL_NAV_LINKS = [
    { href: 'feed.html',        label: 'Home',         icon: 'home' },
    { href: 'notes.html',       label: 'Notes',        icon: 'file-text' },
    { href: 'marketplace.html', label: 'Marketplace',  icon: 'shopping-bag' },
    { href: 'lost-found.html',  label: 'Lost & Found', icon: 'map-pin' },
    { href: 'events.html',      label: 'Events',       icon: 'calendar' },
    { href: 'communities.html', label: 'Communities',  icon: 'users' },
    { href: 'messages.html',    label: 'Messages',     icon: 'message-circle' },
    { href: 'admin.html',       label: 'Admin',        icon: 'layout-dashboard' },
  ];

  function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function isLandingPage() {
    const p = getCurrentPage();
    return p === 'index.html' || p === '' || p === '/';
  }

  function buildNavbar() {
    const page    = getCurrentPage();
    const landing = isLandingPage();
    const user    = JSON.parse(localStorage.getItem('studo_user') || 'null');
    const isDark  = document.documentElement.classList.contains('dark');
    const initials = user ? user.initials : 'FA';

    // Center nav links
    let centerHTML = '';
    if (landing) {
      centerHTML = `
        <div class="nav-center">
          <a href="#features"     class="nav-landing-link">Features</a>
          <a href="#how-it-works" class="nav-landing-link">How it works</a>
          <a href="#security"     class="nav-landing-link">Security</a>
          <a href="#community"    class="nav-landing-link">Community</a>
        </div>`;
    } else {
      const links = ALL_NAV_LINKS.slice(0, 6).map(l => `
        <a href="${l.href}" class="nav-app-link${page === l.href ? ' active' : ''}">
          <i data-lucide="${l.icon}"></i>${l.label}
        </a>`).join('');
      centerHTML = `<div class="nav-center hide-mobile">${links}</div>`;
    }

    // Right side
    let rightHTML = landing
      ? `<a href="login.html"    class="btn-secondary hide-mobile" style="padding:7px 16px;font-size:13px;">Sign in</a>
         <a href="register.html" class="btn-primary   hide-mobile" style="padding:7px 16px;font-size:13px;">Get started</a>`
      : `<button class="btn-ghost hide-mobile" style="padding:6px 10px;" title="Search" onclick="alert('Search coming soon!')">
           <i data-lucide="search"></i>
         </button>
         <button class="btn-ghost hide-mobile" style="padding:6px 10px;" title="Notifications" onclick="alert('Notifications coming soon!')">
           <i data-lucide="bell"></i>
         </button>
         <a href="profile.html" class="nav-avatar" title="Profile">${initials}</a>`;

    rightHTML += `
      <button id="dark-toggle" class="dark-toggle" title="Toggle dark mode">
        <i data-lucide="${isDark ? 'sun' : 'moon'}"></i>
      </button>
      <button id="hamburger-btn" class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
        <i data-lucide="menu"></i>
      </button>`;

    // Hamburger menu items
    const menuItems = ALL_NAV_LINKS.map(l => `
      <a href="${l.href}" class="nav-item${page === l.href ? ' active' : ''}" id="menu-link-${l.href.replace('.html','')}">
        <i data-lucide="${l.icon}"></i>${l.label}
      </a>`).join('');

    const authFooter = landing
      ? `<a href="login.html"    class="btn-secondary" style="width:100%;justify-content:center;">Sign in</a>
         <a href="register.html" class="btn-primary"   style="width:100%;justify-content:center;">Get started</a>`
      : `<button id="signout-btn" class="btn-danger" style="width:100%;justify-content:center;border-radius:var(--radius-full);">Sign out</button>`;

    const navbar = `
      <nav id="main-nav" role="navigation" aria-label="Main navigation">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-icon"><i data-lucide="book-open"></i></div>
          <span class="nav-logo-text">Studo</span>
        </a>
        ${centerHTML}
        <div class="nav-right">${rightHTML}</div>
      </nav>

      <!-- Mobile fullscreen menu overlay -->
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div id="mobile-menu-inner">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
            <span style="font-size:17px;font-weight:700;color:var(--text-primary);">Menu</span>
            <button id="menu-close-btn" class="dark-toggle" aria-label="Close menu">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">${menuItems}</div>
          <div style="height:1px;background:var(--border-light);margin:16px 0;"></div>
          <div style="display:flex;flex-direction:column;gap:8px;">${authFooter}</div>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('afterbegin', navbar);

    // Mobile bottom nav — inject for app pages
    const noBottomNav = ['index.html', 'login.html', 'register.html', ''];
    if (!noBottomNav.includes(page)) {
      const bottomNavHtml = `
        <nav id="mobile-bottom-nav" aria-label="Mobile navigation">
          <div class="mobile-nav-bar">
            ${NAV_LINKS.map(l => `
              <a href="${l.href}" class="mobile-nav-item${page === l.href ? ' active' : ''}">
                <i data-lucide="${l.icon}"></i>
                <span>${l.label}</span>
              </a>`).join('')}
            <a href="profile.html" class="mobile-nav-item${page === 'profile.html' ? ' active' : ''}">
              <i data-lucide="user"></i>
              <span>Me</span>
            </a>
          </div>
        </nav>`;
      document.body.insertAdjacentHTML('beforeend', bottomNavHtml);
    }

    // Render icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // ---- Wire up event listeners (AFTER DOM insertion) ----
    _wireEvents(landing);
  }

  function _wireEvents(landing) {
    // Dark mode toggle
    const darkBtn = document.getElementById('dark-toggle');
    if (darkBtn) {
      darkBtn.addEventListener('click', function () {
        const dark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('studo-theme', dark ? 'dark' : 'light');
        this.innerHTML = `<i data-lucide="${dark ? 'sun' : 'moon'}"></i>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    }

    // Hamburger button — FIX: use addEventListener not onclick
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn   = document.getElementById('menu-close-btn');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent document click from closing immediately
        openMenu();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeMenu();
      });
    }

    // Close menu when clicking the overlay (outside the inner box)
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function (e) {
        // Close if click is on the dark overlay, not the white box
        if (e.target === mobileMenu) closeMenu();
      });
    }

    // Close menu when pressing Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Sign out button
    const signoutBtn = document.getElementById('signout-btn');
    if (signoutBtn) {
      signoutBtn.addEventListener('click', function () {
        if (typeof auth !== 'undefined') auth.logout();
        else { localStorage.removeItem('studo_user'); window.location.href = 'login.html'; }
      });
    }
  }

  function openMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger  = document.getElementById('hamburger-btn');
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger  = document.getElementById('hamburger-btn');
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Make close accessible globally (for nav-item links inside menu)
  window.__closeMobile = closeMenu;

  // ---- Sidebar builder (desktop) ----
  window.buildSidebar = function (containerId) {
    const user        = (typeof auth !== 'undefined') ? auth.ensureDemo() : null;
    const page        = getCurrentPage();
    const links       = ALL_NAV_LINKS.map(l => `
      <a href="${l.href}" class="nav-item${page === l.href ? ' active' : ''}">
        <i data-lucide="${l.icon}"></i>${l.label}
      </a>`).join('');
    const initials    = user ? user.initials    : 'FA';
    const avatarColor = user ? user.avatarColor : 'linear-gradient(135deg,#0071e3,#5856d6)';
    const name        = user ? user.name        : 'Faizan Ali';
    const semester    = user ? user.semester    : '3rd Semester';

    const html = `
      <a href="profile.html" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-light);margin-bottom:16px;text-decoration:none;">
        <div style="width:36px;height:36px;border-radius:50%;background:${avatarColor};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="color:white;font-size:12px;font-weight:700;">${initials}</span>
        </div>
        <div style="overflow:hidden;">
          <div style="font-size:13px;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
          <div style="font-size:11px;color:var(--text-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${semester} · MJPRU</div>
        </div>
      </a>
      <nav style="display:flex;flex-direction:column;gap:2px;">${links}</nav>
      <div style="flex:1;"></div>
      <div style="padding:12px;border-radius:12px;background:var(--bg-card);border:1px solid var(--border-light);margin-top:16px;">
        <div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:4px;">🎓 MJPRU Verified Campus</div>
        <div style="font-size:11px;color:var(--text-tertiary);line-height:1.5;">Only verified MJPRU students can post and interact.</div>
        <div style="font-size:10px;color:var(--text-tertiary);margin-top:6px;border-top:1px solid var(--border-light);padding-top:6px;">Made by <strong style="color:var(--accent-blue);">Faizan Ali</strong> · MCA · MJPRU</div>
      </div>`;

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  document.addEventListener('DOMContentLoaded', buildNavbar);
})();
