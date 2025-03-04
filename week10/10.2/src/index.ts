

import {PrismaClient} from "@prisma/client";

const prisma =new PrismaClient();

// 
//if you run this code some auto generated code will be created
//

//creating your first app

async function insertUser(username:string,password:string,firstname:string,lastname:string) {
    const res=await prisma.user.create({
     data:{
        email:username,
        password,
        firstname,
        lastname
     },
     select:{
        id:true,
        password:true,
        firstname:true
     }
    })
    console.log(res);
}


interface updateparams{
    firstname:string,
    lastname:string
}
async function updateuser(username:string,{
    firstname,
    lastname
}:updateparams){
    const res= await prisma.user.update({
        where:{email:username},
        data:{
            firstname,
            lastname
        }
    })
    console.log(res);

}




//insertUser("saurabhofficial884@gmail.com","password","saurabh ","tripathi")
updateuser('saurabhofficial884@gmail.com',{
    firstname:'annu',
    lastname:'tripathi'
})