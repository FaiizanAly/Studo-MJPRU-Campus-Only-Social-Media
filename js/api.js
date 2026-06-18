// ============================================
// STUDO — API Wrapper (talks to Node.js backend)
// ============================================

const API_BASE = 'http://localhost:8080/api';

const api = {
  // GET request
  async get(endpoint) {
    try {
      const res = await fetch(API_BASE + endpoint, {
        headers: { 'Authorization': 'Bearer ' + (localStorage.getItem('studo_token') || '') }
      });
      if (!res.ok) throw new Error('API error: ' + res.status);
      return await res.json();
    } catch (e) {
      console.warn('[API] GET failed for', endpoint, '— using mock data');
      return null; // Caller should fall back to mock data
    }
  },

  // POST request
  async post(endpoint, data) {
    try {
      const res = await fetch(API_BASE + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + (localStorage.getItem('studo_token') || '')
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('API error: ' + res.status);
      return await res.json();
    } catch (e) {
      console.warn('[API] POST failed for', endpoint);
      return null;
    }
  },

  // PUT request
  async put(endpoint, data) {
    try {
      const res = await fetch(API_BASE + endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + (localStorage.getItem('studo_token') || '')
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('API error: ' + res.status);
      return await res.json();
    } catch (e) {
      console.warn('[API] PUT failed for', endpoint);
      return null;
    }
  },

  // DELETE request
  async delete(endpoint) {
    try {
      const res = await fetch(API_BASE + endpoint, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + (localStorage.getItem('studo_token') || '') }
      });
      if (!res.ok) throw new Error('API error: ' + res.status);
      return true;
    } catch (e) {
      console.warn('[API] DELETE failed for', endpoint);
      return false;
    }
  },

  // ---- Specific API methods ----
  async login(email, password) {
    return this.post('/auth/login', { email, password });
  },
  async register(data) {
    return this.post('/auth/register', data);
  },
  async getPosts() {
    return this.get('/posts');
  },
  async createPost(content, tags) {
    return this.post('/posts', { content, tags });
  },
  async likePost(id) {
    return this.post(`/posts/${id}/like`, {});
  },
  async getMarketplace() {
    return this.get('/marketplace');
  },
  async getNotes() {
    return this.get('/notes');
  },
  async getEvents() {
    return this.get('/events');
  },
  async getCommunities() {
    return this.get('/communities');
  },
  async getLostFound() {
    return this.get('/lost-found');
  },
  async getConversations() {
    return this.get('/conversations');
  },
  async getAdminStats() {
    return this.get('/admin/stats');
  },
  async getVerifications() {
    return this.get('/admin/verifications');
  },
};
