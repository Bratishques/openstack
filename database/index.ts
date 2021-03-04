const {MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB} = process.env

export const DBData = {
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`,
    options: {useNewUrlParser: true, useUnifiedTopology: true}
}