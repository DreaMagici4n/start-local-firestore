const FirestoreRepository = require('./repository/firestore-repository')
const FirestoreHelper = require('./helpers/firestore-helper')
const env = require('./config/env')
const firestoreRepository = new FirestoreRepository()

FirestoreHelper.connect(env.config)

const doc = {
    name: "Lucas"
}

const docRef = firestoreRepository.add(doc, 'users').then((res) => console.log(res))
