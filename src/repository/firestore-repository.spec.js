const { } = require('firebase/firestore')

const FirestoreHelper = require('../helpers/firestore-helper.js')
const FirestoreRepository = require('./firestore-repository.js');
const env = require('../config/env.js')

describe('Firestore ReFirestoreRepository', () => {

    beforeAll(() => FirestoreHelper.connect(env.config))
    
    afterAll(async () => { 
        await FirestoreHelper.diconnect()

    })

    test('Should return an account id when call add method', async () => {
        const sut = new FirestoreRepository()
        const doc = {
            name: "any_name"
        }
        const response = await sut.add(doc, 'users')
        expect(response).toBeTruthy()
    })

    test('Should return all docs when call findAll  method', async () => {
        const sut = new FirestoreRepository()
        const doc = {
            name: "any_name"
        }
        await sut.add(doc, 'users')
        const response = await sut.findAll('users');
        expect(response).toBeTruthy()
    })
})