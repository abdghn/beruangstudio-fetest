import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';

const cookies = useCookies();

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        register(name, email, password) {
            return new Promise((resolve) => {
                const user = {
                    name,
                    email,
                    password,
                    balance: 450000,
                    purchases: []
                };
                indexedDB.open('movie-app', 1).onsuccess = function(event) {
                    const db = event.target.result;
                    const transaction = db.transaction('users', 'readwrite');
                    const store = transaction.objectStore('users');
                    store.add(user);
                    resolve();
                };
            });
        },
        login(email, password) {
            return new Promise((resolve, reject) => {
                indexedDB.open('movie-app', 1).onsuccess = function(event) {
                    const db = event.target.result;
                    const transaction = db.transaction('users', 'readonly');
                    const store = transaction.objectStore('users');
                    const request = store.get(email);
                    request.onsuccess = function() {
                        if (request.result && request.result.password === password) {
                            this.user = request.result;
                            this.isLoggedIn = true;
                            cookies.set('loggedIn', true);
                            resolve();
                        } else {
                            reject();
                        }
                    }.bind(this);
                }.bind(this);
            });
        },
        logout() {
            this.user = null;
            this.isLoggedIn = false;
            cookies.remove('loggedIn');
        },
        buyMovie(movie) {
            const price = this.getPrice(movie.vote_average);
            if (this.user.balance >= price) {
                this.user.balance -= price;
                this.user.purchases.push(movie);
                indexedDB.open('movie-app', 1).onsuccess = function(event) {
                    const db = event.target.result;
                    const transaction = db.transaction('users', 'readwrite');
                    const store = transaction.objectStore('users');
                    store.put(this.user);
                }.bind(this);
            } else {
                alert('Saldo tidak mencukupi');
            }
        },
        getPrice(rating) {
            if (rating < 3) return 7500;
            if (rating >= 3 && rating < 6) return 17500;
            if (rating >= 6 && rating < 8) return 37350;
            return 57250;
        }
    }
});
