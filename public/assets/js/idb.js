// create a variable to hold db connection
let db;
// establish a connection to indexedDb database called 'pizza_hunt' and set it to version 1
const request = indexDB.open('pizza_hunt', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store (table) called `new_pizza` and set it to have an auto incrementing primary key of sorts
    db.createObjectStore('new_pizza', { autoIncrement: true });
};

// upon a succesful connection
request.onsuccess = function(event) {
    // when db is successly created with its object store (from onupgradeneeded) or simply established a connection, save reference to db in global variable.
    db = event.target.result;

    // check if app is online, if yes run uploadPizza() function to send all db data to api
    if (navigator.onLine) {
        // we havent created this yet but we will so lets comment out
        // uploadPizza();
    }
}

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};