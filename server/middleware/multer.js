const multer = require('multer')

//set storage
const storage =  multer.diskStorage({
  destination: (req, file,cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

    cb(null, file.name + '-' + Date.now() + ext)
  }
})

store = multer({storage})
module.exports = store