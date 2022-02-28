const environment = require("../config/environment");
const path = require("path");
const fs = require("fs");

const handleError = (err, res) => {
    console.log(err)
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

module.exports = (app) => {

  const upload = async (req, res) => {
    try {
        const tempPath = req.file.path;
        const id = req.body.imgID;
        const targetFolder = __dirname +'../../../uploads'
        const targetPath = path.join(targetFolder, `./${id}.png`)
        const url = environment.configuration.host === 'localhost' ? `http://${environment.configuration.host}:${environment.configuration.port}/uploads/${id}.png` : `https://${environment.configuration.host}/uploads/${id}.png`
        fs.mkdirSync(targetFolder, {recursive:true})
        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
          fs.copyFile(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            res
              .status(200)
              .contentType("text/plain")
              .json({result:url});
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
    } catch (error) {
        return res.status(500).json(`Error: ${error}`)
    }
  };
  
  return {
    upload
  };
};
