import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
    return `<html>
  <head>
  <style>
  body {
    background-color:rgb(255, 255, 255);
  }
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>
  `
  }
  

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = page(`
<h1>我的自我介紹</h1>
<ol>
<li><a href="/name">姓名</a></li>
<li><a href="/age">年齡</a></li>
<li><a href="/gender">性別</a></li>
</ol>

`)
  } else if (pathname == '/name') {
    ctx.response.body = page('洪偉升')
  } else if (pathname == '/age') {
    ctx.response.body = page('20')
  } else if (pathname == '/gender') {
     ctx.response.body = page('男')
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })