module.exports = {
    config: { projectId: process.env.FIRESTORE_PROJECT_ID },
    host: process.env.FIRESTORE_EMULATOR_HOST,
    port: process.env.FIRESTORE_EMULATOR_PORT ?? 3001,
    environment: process.env.ENVIRONMENT ?? 'dev'
}