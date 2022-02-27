const dao = require('../dao/defaultDAO')
const collection = 'company'

module.exports = (app) => {

  const get = async (req, res) => {
    try {
      const { id } = req.params
      const result = await dao.getById(id, collection)
      let status_code = 200
      if (Object.keys(result).length === 0){
        status_code = 404
      }
      return (res) ? res.status(status_code).json(result) : result;        
    } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }
  };

  const list = async (req, res) => {
    try {
        let sort = {name:1}
        if (req.query.sort){
          const field = req.query.sort.split(':')[0] || 'name'
          const ascendence = req.query.sort.split(':')[1] || 'asc'
          delete sort.name
          sort[field] = ascendence === 'desc' ? -1 : 1 
        }
        const limit = req.query.limit || 10
        const page = req.query.page || 1
        let query = {}
        if (req.query.fields && req.query.q ){
          query = {$or: []}
          for (const fieldIdx in req.query.fields.split(',')){
            query.$or.push({ [req.query.fields.split(',')[fieldIdx]]: { $regex: req.query.q } });
          }
        }
        const result = await dao.getPage(query, sort, limit, page,  collection);
        return (res) ? res.json(result) : result;
    } catch (error) {
        return (res) ? res.status(500).json(`Error: ${error}`) : `Error: ${error}`
    }
  };

  const update = async (req, res) => {
    try {
        const { id } = req.params
        const result = await dao.update(id, req.body, collection)
        let status_code = 200
        if (!result){
          status_code = 404
        }
        return (res) ? res.status(status_code).json(result) : result;        
      } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }  
  };

  const create = async (req, res) => {
    try {
        const result = await dao.create(req.body, collection)
        return res.json(result);
    } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }  
  };

  const remove = async (req, res) => {
    try {
        const { id } = req.params
        const result = await dao.remove(id, collection)
        let status_code = 200
        if (!result){
          status_code = 404
        }
        return (res) ? res.status(status_code).json(result) : result;   
    } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }  
  };

  
  return {
    get,
    list,
    remove,
    update,
    create,
  };
};
