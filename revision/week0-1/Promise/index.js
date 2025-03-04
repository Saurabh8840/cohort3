

//async fucntion without promise

// const fs=require('fs');

// function saurabhreadfile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data);
//     });

// }

// function onDone(data){
//     console.log(data);
// }

// saurabhreadfile(onDone);

//async with promise (if we use promise there is no call back)

// const fs=require('fs');

// //my own async function 
// function saurabhreadfile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt","utf-8",fucntion(err,data){
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// saurabhreadfile().then(onDone);
