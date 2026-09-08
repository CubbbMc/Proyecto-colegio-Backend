import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

    destination:'imagenes',
    filename: (req, file, picture)=>{
        const extention = path.extname(file.originalname);
        const onlyName  = path.basename(file.originalname, extention).replace(/\s+/g, '-').toLowerCase();
        const timeStamp = new Date();
        const fullName  = `${onlyName}${timeStamp}${extention}`;
        picture(null, fullName)
        }
    }
); 
        export const uploadImage = multer({
        storage
}).single('image');
