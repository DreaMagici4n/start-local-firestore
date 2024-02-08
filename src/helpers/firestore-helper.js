const { connectFirestoreEmulator, getFirestore, collection, terminate } = require('firebase/firestore')
const { initializeApp, deleteApp } = require('firebase/app')
const env = require('../config/env')

const FirestoreHelper = {
    client: null,
    config: null,
    db: null,

    connect(config) {
        this.client = initializeApp(config)
        this.config = config
    },

    async diconnect() {
        if(this.db) await terminate(this.db)
        if(this.client) await deleteApp(this.client)
        this.db = null
        this.client = null
    },

    getCollection(name) {
        if(!this.client) this.connect(this.config)
        const db = getFirestore(this.client);
        connectFirestoreEmulator(db, env.host, env.port)
        this.db = db;
        return collection(db, name)
    }
}

module.exports = FirestoreHelper