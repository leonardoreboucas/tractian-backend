const conn = require('../database/connection')
const collection='company'
//const ObjectID = require('mongodb').ObjectID;

const getById = async (id, collection) => {
    const listingQuery = { _id: new ObjectID(id)}
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .findOne(listingQuery, function (err, result) {
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve(result)
                    }
                })
    })
}

const getPage = async (queryParams={}, collection) => {
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .find(queryParams).limit(50)
                .toArray(function (err, result) {
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve(result)
                    }
                })
    })
}

const create = (params, collection) => {
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .insertOne(params, function (err, result) {
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve(result)
                    }
                })
    })
}

const update = (id, params, collection) => {

    const listingQuery = { _id: new ObjectID(id)};
    const updadeDocument = { $set: params }
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .updateOne(listingQuery, updadeDocument, function (err, result) {
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve(result)
                    }
                })
    })
}

const remove = (id) => {
    const listingQuery = { _id: new ObjectID(id)};
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .deleteOne(listingQuery, function (err, result) {                    
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve(result)
                    }
                })
    })
}

exports.getById = getById
exports.getPage = getPage
exports.create = create
exports.update = update
exports.remove = remove