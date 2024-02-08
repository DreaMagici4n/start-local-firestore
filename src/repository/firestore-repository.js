const { terminate, addDoc, getDocs } = require('firebase/firestore')

const FirestoreHelper = require('../helpers/firestore-helper')


class FirestoreRepository {
    async add(doc, collection) {
        const docRef = await addDoc(await FirestoreHelper.getCollection(collection), doc)
        await terminate(FirestoreHelper.db)
        return docRef.id
    }

    async findAll(collection) {
        const docsArr = []
        const docs = await getDocs(await FirestoreHelper.getCollection(collection))
        docs.forEach(doc => docsArr.push(doc.data()))
        await terminate(FirestoreHelper.db)
        console.log(docsArr)
        return docsArr
    }
}

module.exports = FirestoreRepository