import jwt from 'jsonwebtoken';

export function generarToken(payload){
    return new Promise ((resolve, reject) =>{
        jwt.sign(payload, 'keysecret',{expiresIn: '1h'},(error, token)=>{
            if(error){
                reject(error);
            }else{
                resolve(token);
            }
        });
    });
}
export function verificarToken(token){
    return new Promise ((resolve, reject)=>{
        jwt.verify(token, 'keysecret',(error, validacion)=>{
            if(error){
                reject(error);
            }else{
                resolve(validacion);
            }
        });
    });
}