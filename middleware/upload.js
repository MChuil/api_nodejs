import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `./storage/`
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.')
        const filename = `file-${Date.now()}.${ext[1]}`  //file-195656565.jpg
        cb(null, filename)
    }
})

const uploadFile = multer({storage})

export default uploadFile