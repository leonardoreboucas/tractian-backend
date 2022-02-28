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

const getPage = async (filter="{}", sort={_id:1}, limit, page, collection) => {
    const skip = page * limit - limit;
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                    .collection(collection)
                    .find(filter)
                    .count((err, count) => {
                        if (err) {
                            console.log(err)
                            return  reject(err)
                        }
                        conn.getDb()
                                    .collection(collection)
                                    .find(filter)
                                    .limit(limit)
                                    .skip(skip)
                                    .sort(sort)
                                    .toArray((err, result) => {
                                        if (err) {
                                            console.log(err)
                                            return  reject(err)
                                        } else {
                                            return resolve({
                                                            "result":result,
                                                            success:true,
                                                            pagination:{
                                                                page:page,
                                                                pages:Math.ceil(count/limit),
                                                                count:count
                                                            },
                                                            message:"OK"
                                                        })
                                        }
                                    })
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
                        return resolve({
                                    result:result,
                                    success:true
                                }
                            )
                    }
                })
    })
}

const update = (id, params, collection) => {
    const listingQuery = { _id: new mongodb.ObjectId(id)};
    conn.connectToServer(()=>{})
            conn.getDb()
                .collection(`${collection}-history`)
                .insertOne({date:new Date(),params:Object.assign({_id:id},params)})
    const updadeDocument = { $set: Object.assign({},params) }
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .updateOne(listingQuery, updadeDocument, function (err, result) {
                    if (err) {
                        console.log(err)
                        return  reject(err)
                    } else {
                        return resolve({
                            result:result,
                            success:true
                        })
                    }
                })
    })
}

const remove = (id, collection) => {
    const objectID = new mongodb.ObjectId(id)
    const listingQuery = { _id: objectID};
    console.log(listingQuery)
    return new Promise((resolve, reject) => {
        conn.connectToServer(()=>{})
            conn.getDb()
                .collection(collection)
                .deleteOne(listingQuery, function (err, result) {                    
                    if (err) {
                        console.err(err)
                        return  reject(err)
                    } else {
                        return resolve({
                            result:result,
                            success:result.deletedCount?true:false
                        })
                    }
                })
    })
}

exports.getById = getById
exports.getPage = getPage
exports.create = create
exports.update = update
exports.remove = remove