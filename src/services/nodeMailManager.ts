import * as nodemailer from 'nodemailer'



const transport = nodemailer.createTransport({
host :'smtp.office365.com',
port: 587,
secure: true,


auth:{
    user:'luan.moura-rj@hotmail.com',
    pass:'arthur192428'
}

})

export const enviarEmail = () => { 
    transport.sendMail({
        from:'Teste <luan.moura-rj@hotmail.com>',
        to:'luan.glsenge@gmail.com',
        subject:'Orçamento',
        text:'Teste envio de email'
    
    })
    .then(()=>console.log('email enviado'))
    .catch((err) => console.log('erro ao enviar ' + err))
}

