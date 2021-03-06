
/**
 * Swagger documentation provided by swagger-autogen (https://www.npmjs.com/package/swagger-autogen) 
 */

const config = require("../../../config/environment");
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const multer = require("multer");
const upload = multer({
  dest: "/tmp/uploadedFiles"
});

module.exports = (app) => {       

  /*******************************************
  *                   Company
  ********************************************/
  const companyValidation = [
    body('name').isLength({ min: 10, max: 50 })    
  ]
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
    .post(companyValidation,
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
    .patch(
      companyValidation,
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


  /*******************************************
  *                   User
  ********************************************/
  const userValidation = [
    body('name').notEmpty().isLength({ min: 10, max: 50 }),
    body('username').notEmpty().isLength({ min: 8, max: 20 }),
    body('password').isLength({ min: 8, max: 20 }),
    body('active').isBoolean(),
    body('company_id').notEmpty(),
  ]
  router
  .route(`/user`)
    .get(
      app.controllers.UserController.list
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['User']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        
        */
    )
    .post(
      userValidation,
      app.controllers.UserController.create
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['User']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
             in: 'body',
             type: "object",
             description: "new object",
             schema: {
                    username:"",
                    password: "",
                    active: 0,
                    company_id: ""
                   }
           }
      */
    )
  router
  .route(`/user/:id`)
    .get(
      app.controllers.UserController.get
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['User']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
      */
    )
    .patch(
      userValidation,
      app.controllers.UserController.update
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['User']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
            in: 'body',
            type: "object",
            description: "update object",
            schema: {
                  username:"",
                  password: "",
                  active: 0,
                  company_id: ""
                  }
          }
       */
    )
    .delete(
      app.controllers.UserController.remove
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['User']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
    )

  /*******************************************
  *                   Unit
  ********************************************/
  const unitValidation = [
    body('name').isString(),
    body('company_id').isLength(8),
  ]
  router
  .route(`/unit`)
    .get(
      app.controllers.UnitController.list
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Unit']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        
        */
    )
    .post(
      unitValidation,
      app.controllers.UnitController.create
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Unit']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
             in: 'body',
             type: "object",
             description: "new object",
             schema: {
                    name:"",
                    company_id: ""
                   }
           }
      */
    )
  router
  .route(`/unit/:id`)
    .get(
      app.controllers.UnitController.get
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Unit']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
      */
    )
    .patch(
      unitValidation,
      app.controllers.UnitController.update
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Unit']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
            in: 'body',
            type: "object",
            description: "update object",
            schema: {
                  name:"",
                  company_id: ""
                  }
          }
       */
    )
    .delete(
      app.controllers.UnitController.remove
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Unit']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
    )


  /*******************************************
  *                   Asset
  ********************************************/
   const assetValidation = [
    body('unit_id').isLength(8),
    
    body('name').isString(),
    body('description').isString(),
    body('model').isString(),
    body('owner_id').isLength(8),
    body('status').matches(/\b(?:Running|Alerting|Stopped)\b/),
    body('health_level').isNumeric()
  ]
  router
  .route(`/asset`)
    .get(
      app.controllers.AssetController.list
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Asset']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        
        */
    )
    .post(
      assetValidation,
      app.controllers.AssetController.create
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Asset']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
             in: 'body',
             type: "object",
             description: "new object",
             schema: {
                    unit_id:"",
                    image: "",
                    name:"",
                    description:"",
                    model:"",
                    owner:"",
                    status:"",
                    health_level:""
                   }
           }
      */
    )
  router
    .route(`/asset/history`)
      .get(
        app.controllers.AssetController.history
        /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
          #swagger.tags = ['Asset']
          #swagger.responses[200] = { description: "Successful"}
          #swagger.responses[500] = { description: "Error on server"}
          
          */
      )
  router
  .route(`/asset/:id`)
    .get(
      app.controllers.AssetController.get
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Asset']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
      */
    )
    .patch(
      assetValidation,
      app.controllers.AssetController.update
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Asset']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        #swagger.parameters['type'] = {
            in: 'body',
            type: "object",
            description: "update object",
            schema: {
                    unit_id:"",
                    image: "",
                    name:"",
                    description:"",
                    model:"",
                    owner:"",
                    status:"",
                    health_level:""
                  }
          }
       */
    )
    .delete(
      app.controllers.AssetController.remove
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Asset']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
    )

    router
    .route(`/upload`)
      .post(
      upload.single("file"),
      app.controllers.UploadController.upload
      /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Misc']
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
    );

  router
    .route(`/login`)
      .post(
       app.controllers.LoginController.login
       /* >>> SWAGGER DOCUMENTATION (DONT DELETE) <<<
        #swagger.tags = ['Misc']
        #swagger.parameters['login'] = {
                description: 'login',
                in: 'query',
                required: true
            }
        #swagger.parameters['password'] = {
                description: 'password',
                in: 'query',
                required: true
            }
        #swagger.responses[200] = { description: "Successful"}
        #swagger.responses[404] = { description: "Not Found" }
        #swagger.responses[500] = { description: "Error on server"}
        */
      )

  app.use(app.basePath, router);
};
