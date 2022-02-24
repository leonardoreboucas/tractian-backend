
/**
 * Swagger documentation provided by swagger-autogen (https://www.npmjs.com/package/swagger-autogen) 
 */

const config = require("../../../config/environment");
const express = require('express');
const router = express.Router();
function makeCallbackList(list,keycloak,checkRoles){
  if (apiProtected){
    let new_list = [keycloak.protect(checkRoles)]
    return new_list.concat(list) 
  }
  return list
}

module.exports = (app) => {       
    
  
  
  /*******************************************
  *                   Company
  ********************************************/
  router
  .route(`/company`)
    .get(
      app.controllers.CompanyController.list
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Company']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        */
    )
    .post(
      app.controllers.CompanyController.create
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Company']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
             in: 'body',
             type: "object",
             description: "new object",
             schema: {
                    name:"",
                    acronym: "",
                    active: 0
                   }
           }
      */
    )
  router
  .route(`/company/:id`)
    .get(
      app.controllers.CompanyController.get
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Company']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
      */
    )
    .put(
      app.controllers.CompanyController.update
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Company']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
            in: 'body',
            type: "object",
            description: "update object",
            schema: {
                  name:"",
                  acronym: "",
                  active: 0
                  }
          }
       */
    )
    .delete(
      app.controllers.CompanyController.remove
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Company']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
    )

  app.use(app.basePath, router);
};
