// //https://petal-estimate-4e9.notion.site/Step-3-Initialize-handlers-047719a9c5b245309c34e134c519c82c
// //slides link




// import { userRouter } from "./routes/user"
// import bookRouter

import { userRouter } from "./routes/user"
import bookRouter


// // Create the main Hono app

// //const app = new Hono();

// //this is done bcz above line have some error



// app.route('/api/v1/user',userRouter)
// app.route('/api/v1/user',bookRouter)

// //middleware




// //(c)--Context,your response
// //in express we get res,req here in hono we have c



// app.post('/api/v1/signin', (c) => {
// 	return c.text('signin route')
// })

// app.get('/api/v1/blog/:id', (c) => {
// 	const id = c.req.param('id')
// 	console.log(id);
// 	return c.text('get blog route')
// })

// app.post('/api/v1/blog', (c) => {

// 	return c.text('signin route')
// })

// app.put('/api/v1/blog', (c) => {
// 	return c.text('signin route')
// })

// export default app;



import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();
app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app