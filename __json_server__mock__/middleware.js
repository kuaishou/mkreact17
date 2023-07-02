module.exports = (req, res, next) => {
  //json-server自定义api
  if (req.method === "POST" && req.path === "/login") {
    console.log(req.body);
    if (req.body.username === "xing" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: "8888",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};
