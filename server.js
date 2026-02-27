const http = require("http");

const app = http.createServer((req, res) => {
  const { method, url } = req;

 if(method === 'GET'){
     if (url.toLowerCase() === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<html>
      <head>
      <style>
      *{
      text-align: center;
      padding: 0;
      margin: 0;
      }
      h1{
      padding: 80px;
      }
      a{
      text-decoration: none;
      color: black;
      }
      </style>
      </head>
      <body>
      <h1 class= "name">
      Working...
      </h1>
      <div>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
      </body>
      </html>`,
    );
    return res.end();
  } else if (url.toLowerCase() === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<html>
      <head>
      <style>
      *{
      text-align: center;
      padding: 0;
      margin: 0;
      }
      h1{
      padding: 80px;
      }
      a{
      text-decoration: none;
      color: black;
      }
      </style>
      </head>
      <body>
      <h1>
      Home Page
      </h1>
      <div>
      <ul>
        <li><a href="/">Welcome</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
      </body>
      </html>`,
    );
    return res.end();
  } else if (url.toLowerCase() === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<html>
      <head>
      <style>
      *{
      text-align: center;
      padding: 0;
      margin: 0;
      }
      h1{
      padding: 80px;
      }
      p{
      padding: 30px;
      }
      a{
      text-decoration: none;
      color: blue;
      }
      </style>
      </head>
      <body>
      <h1>
      About Page
      </h1>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in quo corporis praesentium, architecto distinctio exercitationem quas nisi eius eaque delectus laborum magnam saepe illo ipsum, at corrupti doloremque incidunt sunt illum vero quisquam enim quibusdam? Cupiditate debitis excepturi quo dicta, facere facilis id aut eveniet totam dolores alias exercitationem et ipsa aspernatur nobis nesciunt esse fugit incidunt voluptatum itaque illo quos iure assumenda officia! Tempore, molestiae tempora labore mollitia commodi possimus harum exercitationem, nulla sequi officia maxime odio delectus.</div>
      </body>

      <a href="/">Back</a>
      </html>`,
    );
    return res.end();
  } else if (url.toLowerCase() === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
      `<html>
      <head>
      <style>
      *{
      text-align: center;
      padding: 0;
      margin: 0;
      }
      h1{
      padding: 80px;
      }
      a{
      text-decoration: none;
      color: blue;
      }
      </style>
      </head>
      <body>
      <h1>
      Contact Page
      </h1>
      <a href="/">Back</a>
      </body>
      </html>`,
    );
    return res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      `<html>
      <head>
      <style>
      *{
      text-align: center;
      padding: 0;
      margin: 0;
      }
      h1{
      padding: 20%;
      }
      a{
      text-decoration: none;
      color: blue;
      }
      </style>
      </head>
      <body>
      <h1>
      Page Not Found...
      </h1>
      <a href="/">Back</a>
      </body>
      </html>`,
    );
    return res.end();
  }
 }else{
    res.writeHead(500, { "Content-Type": "text/html" })
    res.end("Method Not Allowed");
 }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
