const dao = require('../dao/defaultDAO')
const crypto = require('crypto')


module.exports = (app) => {

  const login = async (req, res) => {
    try {
        const collection = 'user'
        const page = 1
        const limit = 1
        const sort = "_id:asc"
        const password_hash = crypto.createHash('md5').update(req.body.password).digest("hex")

        const query = {
            username: req.body.email,
            password: password_hash,
            active: true
        }
        console.log("------------>",req)
        const userResult = await dao.getPage(query, sort, limit, page, collection);
        console.log(userResult)
        console.log("--------query---->",query)

        if (!userResult.result.length){
            return res.status(404).json(
                {
                    "success":false,
                    "message":`Failed to login ${req.body.email}`}
                )

        } else {
            const user = userResult.result[0]
            return res.json(
            {
                "success":true,
                "result":{
                    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDU4NzUzOTksImlkIjoiNjBiNGUyODJlYjMxNGIwMDE1ZmFmMmE5IiwiaWF0IjoxNjQ1Nzg4OTk5fQ.C92SLTyZAR-TIGOeFJTxMYT3bMO_1hlIF_KG0W2Ca0Y",
                    [`${req.body.email}`]:{
                        "id":user._id,
                        "name":user.name,
                        "isLoggedIn":true}
                },
                "message":`Successfully login ${req.body.email}`}
            )
        }
    } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }  
  };

  
  return {
    login,
  };
};
