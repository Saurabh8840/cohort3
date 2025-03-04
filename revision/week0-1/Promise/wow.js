


// function calculatesum(n){

//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// let a=calculatesum(5);
// console.log(a);

//if you wnat to exposse this logic to world ?
//this is where http come into picutre 


//let's create http server using express

const express=require("express");
function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
const app=express();
app.get('/',function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("hii there your ans is "+ans);
})

app.listen(3000);