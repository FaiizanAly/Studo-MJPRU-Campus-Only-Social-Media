// ============================================
// UniUFO — Shared Components (Navbar + Mobile Bottom Nav)
// ============================================

(function () {
  // Apply saved dark mode before render
  const _THEME_KEY = 'uniufo-theme';
  const _USER_KEY  = 'uniufo_user';
  if (localStorage.getItem(_THEME_KEY) === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Logo image tag (uses the original logo.png)
  function _logoImg(size) {
    size = size || 28;
    return `<img src="logo.png" alt="UniUFO" width="${size}" height="${size}" style="object-fit:contain;flex-shrink:0;" onerror="this.style.display='none'">`;
  }

  // Mobile bottom nav tabs (5 main pages)
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
    const user    = _getUser();
    const isDark  = document.documentElement.classList.contains('dark');
    const initials = user ? user.initials : '?';

    // Center nav
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

    // Right actions — for app pages, show login buttons if not logged in
    let rightHTML;
    if (landing) {
      rightHTML = `<a href="login.html"    class="btn-secondary hide-mobile" style="padding:7px 16px;font-size:13px;">Sign in</a>
                   <a href="register.html" class="btn-primary   hide-mobile" style="padding:7px 16px;font-size:13px;">Get started</a>`;
    } else if (!user) {
      // Not logged in on an app page — show sign in button
      rightHTML = `<a href="login.html" class="btn-primary hide-mobile" style="padding:7px 16px;font-size:13px;">Sign In</a>`;
    } else {
      // Logged in — show search, bell, avatar dropdown
      rightHTML = `<button class="btn-ghost hide-mobile" style="padding:6px 10px;" title="Search" onclick="alert('Search coming soon!')">
           <i data-lucide="search"></i>
         </button>
         <button class="btn-ghost hide-mobile" style="padding:6px 10px;" title="Notifications" onclick="alert('Notifications coming soon!')">
           <i data-lucide="bell"></i>
         </button>
         <div class="nav-avatar-wrap hide-mobile" style="position:relative;">
           <a href="profile.html" class="nav-avatar" title="My Profile" aria-label="My Profile" id="nav-avatar-btn">${initials}</a>
           <div id="avatar-dropdown" style="display:none;position:absolute;right:0;top:calc(100% + 8px);background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);min-width:180px;z-index:200;overflow:hidden;">
             <a href="profile.html" style="display:flex;align-items:center;gap:10px;padding:12px 14px;font-size:13px;color:var(--text-primary);text-decoration:none;transition:background .15s;" onmouseover="this.style.background='var(--bg-secondary)'" onmouseout="this.style.background='transparent'">
               <i data-lucide="user" style="width:15px;height:15px;"></i> My Profile
             </a>
             <div style="height:1px;background:var(--border-light);margin:0 14px;"></div>
             <button id="desktop-signout-btn" style="display:flex;align-items:center;gap:10px;padding:12px 14px;font-size:13px;color:#ef4444;background:none;border:none;cursor:pointer;width:100%;text-align:left;transition:background .15s;" onmouseover="this.style.background='#fff1f0'" onmouseout="this.style.background='transparent'">
               <i data-lucide="log-out" style="width:15px;height:15px;"></i> Sign out
             </button>
           </div>
         </div>`;
    }

    rightHTML += `
      <button id="dark-toggle" class="dark-toggle" title="Toggle dark mode" aria-label="Toggle dark mode">
        <i data-lucide="${isDark ? 'sun' : 'moon'}"></i>
      </button>
      <button id="hamburger-btn" class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
        <i data-lucide="menu"></i>
      </button>`;

    // Hamburger menu items
    const menuItems = ALL_NAV_LINKS.map(l => `
      <a href="${l.href}" class="nav-item${page === l.href ? ' active' : ''}">
        <i data-lucide="${l.icon}"></i>${l.label}
      </a>`).join('');

    // Hamburger menu auth footer
    const authFooter = landing
      ? `<a href="login.html"    class="btn-secondary" style="width:100%;justify-content:center;">Sign in</a>
         <a href="register.html" class="btn-primary"   style="width:100%;justify-content:center;">Get started</a>`
      : user
        ? `<button id="signout-btn" class="btn-danger" style="width:100%;justify-content:center;border-radius:var(--radius-full);">
             <i data-lucide="log-out"></i> Sign out
           </button>`
        : `<a href="login.html" class="btn-primary" style="width:100%;justify-content:center;">Sign In</a>
           <a href="register.html" class="btn-secondary" style="width:100%;justify-content:center;">Register</a>`;


    const adminNavBadge = (!landing && user && user.isAdmin)
      ? `<span style="font-size:10px;font-weight:700;color:white;background:linear-gradient(135deg,#0071e3,#5856d6);padding:2px 8px;border-radius:999px;letter-spacing:.04em;flex-shrink:0;">ADMIN</span>`
      : '';

    const navbar = `
      <nav id="main-nav" role="navigation" aria-label="Main navigation">
        <a href="index.html" class="nav-logo" aria-label="UniUFO Home">
          ${_logoImg(32)}
          <span class="nav-logo-text">Uni<span style="color:#2563eb;">UFO</span></span>
          ${adminNavBadge}
        </a>
        ${centerHTML}
        <div class="nav-right">${rightHTML}</div>
      </nav>

      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div id="mobile-menu-inner">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border-light);">
            <div style="display:flex;align-items:center;gap:8px;">
              ${_logoImg(26)}
              <span style="font-size:16px;font-weight:800;color:var(--text-primary);">Uni<span style="color:#2563eb;">UFO</span></span>
              ${adminNavBadge}
            </div>
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

    // Mobile bottom nav (app pages only)
    const noBottomNav = ['index.html', 'login.html', 'register.html', ''];
    if (!noBottomNav.includes(page)) {
      const bottomNavHtml = `
        <nav id="mobile-bottom-nav" aria-label="Mobile navigation">
          <div class="mobile-nav-bar">
            ${NAV_LINKS.map(l => `
              <a href="${l.href}" class="mobile-nav-item${page === l.href ? ' active' : ''}" aria-label="${l.label}">
                <i data-lucide="${l.icon}"></i>
                <span>${l.label}</span>
              </a>`).join('')}
            <a href="profile.html" class="mobile-nav-item${page === 'profile.html' ? ' active' : ''}" aria-label="Profile">
              <i data-lucide="user"></i>
              <span>Me</span>
            </a>
          </div>
        </nav>`;
      document.body.insertAdjacentHTML('beforeend', bottomNavHtml);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
    _wireEvents(landing);
  }

  function _getUser() {
    try {
      const s = localStorage.getItem(_USER_KEY);
      return s ? JSON.parse(s) : null;
    } catch (e) { return null; }
  }

  function _wireEvents(landing) {
    // Dark mode toggle
    const darkBtn = document.getElementById('dark-toggle');
    if (darkBtn) {
      darkBtn.addEventListener('click', function () {
        const dark = document.documentElement.classList.toggle('dark');
        localStorage.setItem(_THEME_KEY, dark ? 'dark' : 'light');
        this.innerHTML = `<i data-lucide="${dark ? 'sun' : 'moon'}"></i>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    }

    // Hamburger
    const hamburger  = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn   = document.getElementById('menu-close-btn');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        _openMenu();
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        _closeMenu();
      });
    }
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) _closeMenu();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') _closeMenu();
    });

    // Mobile sign out button (hamburger menu)
    const signoutBtn = document.getElementById('signout-btn');
    if (signoutBtn) {
      signoutBtn.addEventListener('click', function () {
        if (typeof auth !== 'undefined') auth.logout();
        else { localStorage.removeItem(_USER_KEY); window.location.href = 'index.html'; }
      });
    }

    // Desktop sign out button (avatar dropdown)
    const desktopSignout = document.getElementById('desktop-signout-btn');
    if (desktopSignout) {
      desktopSignout.addEventListener('click', function () {
        if (typeof auth !== 'undefined') auth.logout();
        else { localStorage.removeItem(_USER_KEY); window.location.href = 'index.html'; }
      });
    }

    // Avatar dropdown toggle (click to open/close)
    const avatarBtn  = document.getElementById('nav-avatar-btn');
    const dropdown   = document.getElementById('avatar-dropdown');
    if (avatarBtn && dropdown) {
      avatarBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';
      });
      // Close dropdown on outside click
      document.addEventListener('click', function () {
        if (dropdown) dropdown.style.display = 'none';
      });
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation(); // don't close on inner click
      });
    }
  }


  function _openMenu() {
    const m = document.getElementById('mobile-menu');
    const h = document.getElementById('hamburger-btn');
    if (!m) return;
    m.classList.add('open');
    if (h) h.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function _closeMenu() {
    const m = document.getElementById('mobile-menu');
    const h = document.getElementById('hamburger-btn');
    if (!m) return;
    m.classList.remove('open');
    if (h) h.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  window.__closeMobile = _closeMenu;

  // ---- Sidebar builder ----
  window.buildSidebar = function (containerId) {
    const user        = (typeof auth !== 'undefined') ? auth.ensureDemo() : null;
    if (!user) return; // ensureDemo redirects to login if not logged in
    const page        = getCurrentPage();

    // Filter links: Admin link only for admin users
    const visibleLinks = ALL_NAV_LINKS.filter(l => {
      if (l.href === 'admin.html') return user.isAdmin === true;
      return true;
    });

    const links       = visibleLinks.map(l => `
      <a href="${l.href}" class="nav-item${page === l.href ? ' active' : ''}" aria-current="${page === l.href ? 'page' : 'false'}">
        <i data-lucide="${l.icon}"></i>${l.label}
      </a>`).join('');

    const initials    = user.initials    || '?';
    const avatarColor = user.avatarColor || 'linear-gradient(135deg,#0071e3,#5856d6)';
    const name        = user.name        || 'Student';
    const semester    = user.semester    || 'MJPRU';
    const roleLabel   = user.isAdmin
      ? `<span style="font-size:10px;font-weight:700;color:white;background:linear-gradient(135deg,#0071e3,#5856d6);padding:1px 7px;border-radius:999px;margin-left:4px;">ADMIN</span>`
      : `<span style="font-size:10px;font-weight:600;color:var(--accent-blue);background:var(--accent-blue-light);padding:1px 7px;border-radius:999px;margin-left:4px;">Student</span>`;

    const html = `
      <a href="profile.html" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-light);margin-bottom:16px;text-decoration:none;${user.isAdmin ? 'border-color:#0071e3;box-shadow:0 0 0 1px #0071e320;' : ''}" aria-label="View profile">
        <div style="width:36px;height:36px;border-radius:50%;background:${avatarColor};display:flex;align-items:center;justify-content:center;flex-shrink:0;" aria-hidden="true">
          <span style="color:white;font-size:12px;font-weight:700;">${initials}</span>
        </div>
        <div style="overflow:hidden;min-width:0;">
          <div style="font-size:13px;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;">${name}${roleLabel}</div>
          <div style="font-size:11px;color:var(--text-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${semester} · MJPRU</div>
        </div>
      </a>
      <nav style="display:flex;flex-direction:column;gap:2px;" aria-label="Sidebar navigation">${links}</nav>
      <div style="flex:1;"></div>
      <div style="padding:12px;border-radius:12px;background:var(--bg-card);border:1px solid var(--border-light);margin-top:16px;">
        ${user.isAdmin
          ? `<div style="font-size:12px;font-weight:700;color:#0071e3;margin-bottom:4px;">🛡️ Admin Mode Active</div>
             <div style="font-size:11px;color:var(--text-tertiary);line-height:1.5;">You have full admin access to UniUFO platform.</div>`
          : `<div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:4px;">🎓 MJPRU Verified Campus</div>
             <div style="font-size:11px;color:var(--text-tertiary);line-height:1.5;">Only verified MJPRU students can post and interact.</div>`}
        <div style="font-size:10px;color:var(--text-tertiary);margin-top:6px;border-top:1px solid var(--border-light);padding-top:6px;">
          Made by <strong style="color:var(--accent-blue);">Faizan Ali</strong> · MCA · MJPRU
        </div>
      </div>`;

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  document.addEventListener('DOMContentLoaded', buildNavbar);
})();
