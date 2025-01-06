class SessionStore {
  store = new Map();

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }
}

const sessionStore = new SessionStore();

module.exports = sessionStore;
