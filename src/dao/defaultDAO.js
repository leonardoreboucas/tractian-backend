const conn = require('../database/connection')
const collection='company'
const mongodb = require('mongodb')
const getById = async (id, collection) => {
    const listingQuery = { _id: new mongodb.ObjectId(id)}
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

const getPage = async (filter="{}", sort={_id:1}, collection) => {
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .find(JSON.parse(filter))
                .limit(50)
                .sort(sort)
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

    const listingQuery = { _id: new mongodb.ObjectId(id)};
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
    const listingQuery = { _id: new mongodb.ObjectId(id)};
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