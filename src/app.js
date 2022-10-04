const express = require("express");
const usersRouter = require("../crud/users.router");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server ok!",
  });
});

app.use("/", usersRouter);

app.listen(8000, () => {
  console.log("server started at port 8000");
});

/*
{
  "first_name":"maria" ,
  "last_name": "Alejandra",
  "email": "maria@gmail.com",
  "password": "Maria123",
  "birthday": "2002/7/12"
}
*/
