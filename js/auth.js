// ============================================
// STUDO — Auth (localStorage based)
// ============================================

const auth = {
  login(user, token) {
    localStorage.setItem('studo_user', JSON.stringify(user));
    if (token) localStorage.setItem('studo_token', token);
  },
  logout() {
    localStorage.removeItem('studo_user');
    localStorage.removeItem('studo_token');
    window.location.href = 'index.html';
  },
  getUser() {
    const stored = localStorage.getItem('studo_user');
    return stored ? JSON.parse(stored) : null;
  },
  getToken() {
    return localStorage.getItem('studo_token');
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
  // For demo: auto-login as Faizan Ali if no user set
  ensureDemo() {
    if (!this.getUser()) {
      this.login({
        id: 'u1',
        name: 'Faizan Ali',
        initials: 'FA',
        email: 'faizan.ali@mjpru.ac.in',
        university: 'MJPRU, Bareilly',
        semester: '3rd Semester',
        verified: true,
        avatarColor: 'linear-gradient(135deg, #0071e3, #5856d6)',
        isCreator: true,
      });
    }
    return this.getUser();
  }
};
