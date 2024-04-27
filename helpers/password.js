import bcrypjs from 'bcryptjs'

const encrypt = async (pass)=>{
    const hash = await bcrypjs.hash(pass, 10);
    return hash;
}


const compare = async (pass, hashPassword)=>{
    return await bcrypjs.compare(pass, hashPassword);
}


export{
    encrypt,
    compare
}