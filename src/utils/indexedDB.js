export function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('movie-app', 1);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users', { keyPath: 'email' });
            }
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            resolve(db);
        };

        request.onerror = function(event) {
            reject('Error opening database');
        };
    });
}

export function addUser(user) {
    openDatabase().then(db => {
        const transaction = db.transaction('users', 'readwrite');
        const store = transaction.objectStore('users');
        store.add(user);
    }).catch(error => {
        console.error('Error adding user:', error);
    });
}
