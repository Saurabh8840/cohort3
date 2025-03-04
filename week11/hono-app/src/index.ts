
//ek to hamne phle banaya tha jo isi folder me hai 
//abb hono create kr rhe hai dost dekhte hai kya hoga okk
//aage explain karunga okk


import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {

  const body=await c.req.json()
  
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
