
/**
 * Swagger documentation provided by swagger-autogen (https://www.npmjs.com/package/swagger-autogen) 
 */

const config = require("../../../config/environment");
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const path = require("path");
const fs = require("fs");

const multer = require("multer");

const handleError = (err, res) => {
  console.log(err)
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/tmp/uploadedFiles"
});

module.exports = (app) => {       
    
  
  
  /*******************************************
  *                   Company
  ********************************************/
  const companyValidation = [
    body('name').isLength(10),
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
    .put(
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
    body('username').isEmail(),
    body('password').isLength({ min: 8 }),
    body('active').isBoolean(),
    body('company_id').isLength(8),
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
    .put(
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
    .put(
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
    body('image').isString(),
    body('name').isString(),
    body('description').isString(),
    body('model').isString(),
    body('owner').isString(),
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
    .put(
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
      (req, res) => {
        const tempPath = req.file.path;
        const id = req.body.imgID;
        const targetFolder = __dirname +'/uploads'
        const targetPath = path.join(targetFolder, `./${id}.png`);
        fs.mkdirSync(targetFolder, {recursive:true})
        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
          fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
    
            res
              .status(200)
              .contentType("text/plain")
              .end("File uploaded!");
          });
        } else {
          fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);
    
            res
              .status(403)
              .contentType("text/plain")
              .end("Only .png files are allowed!");
          });
        }
      }
    );

  app.use(app.basePath, router);
};
