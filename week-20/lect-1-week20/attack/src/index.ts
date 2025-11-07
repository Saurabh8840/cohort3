import axios from "axios";

//we put sendRequest in fucntion so that we can hit function again and again

async function sendRequest(otp: string) {
 
 



 
let data = JSON.stringify({
  "email": "saurabh@gmail.com"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/generate-otp',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-US,en;q=0.9', 
    'auth-key': 'appxapi', 
    'client-service': 'Appx', 
    'device-type': '', 
    'origin': 'https://harkirat.classx.co.in', 
    'priority': 'u=1, i', 
    'referer': 'https://harkirat.classx.co.in/', 
    'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'source': 'website', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', 
    'Content-Type': 'application/json'
  },
  data : data
};

try {
  await axios.request(config)
} catch (error) {
  
}


   
}


async function main() {
  for (let i = 0; i <= 999999; i += 100) {
    const p = [];
    console.log(i);
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()));
    }
    await Promise.all(p);
  } 
}

main();
