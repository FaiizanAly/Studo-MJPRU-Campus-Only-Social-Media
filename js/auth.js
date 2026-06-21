// ============================================
// UniUFO — Auth (localStorage based)
// No auto-login. Users must sign in manually.
// ============================================

const auth = {
  _KEY_USER:  'uniufo_user',
  _KEY_TOKEN: 'uniufo_token',

  login(user, token) {
    localStorage.setItem(this._KEY_USER, JSON.stringify(user));
    if (token) localStorage.setItem(this._KEY_TOKEN, token);
  },
  logout() {
    localStorage.removeItem(this._KEY_USER);
    localStorage.removeItem(this._KEY_TOKEN);
    window.location.href = 'index.html';
  },
  getUser() {
    try {
      const stored = localStorage.getItem(this._KEY_USER);
      return stored ? JSON.parse(stored) : null;
    } catch (e) { return null; }
  },
  getToken() {
    return localStorage.getItem(this._KEY_TOKEN);
  },
  isLoggedIn() {
    return !!this.getUser();
  },
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },
  // Used by app pages — redirects to login if no user (NO auto-login)
  ensureDemo() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return null;
    }
    return this.getUser();
  }
};
