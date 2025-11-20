// import axios from "axios"

import axios from "axios"

// async function  getUserdetails(){
//     const response=await axios.get("http://localhost:3000/api/user");
//     return response.data;
// }

// export default async function Home() {
//   const userDetails= await getUserdetails();
//   return <div>
//         hii there 
//         {userDetails.email}
//         {userDetails.name}
        
//   </div>; 
// }

//https://week14-saurabh.com

async function getUserdetails(){
  const response=await axios.get("http://localhost:3000/api/user")
  return response.data
}

export default async function Home(){
   const userData=await getUserdetails();

  return <div>
    hii there 
    {userData.name}
    {userData.email}
  </div>
}