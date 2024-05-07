// var tem =document.getElementsByClassName("QxRIg-CrMAQ-a3u7w");
//
// tem[0].addEventListener('click', myFunction1);
// tem[1].addEventListener('click', myFunction1);
// tem[2].addEventListener('click', myFunction1);
// function myFunction() {
//     var dots = document.getElementsByClassName("Wfune-RXjCk");
//     if (dots[0].style.display === "none") {
//         dots[0].style.display = "block";
//
//     } else {
//         dots[0].style.display = "none";
//
//     }
// }
// function myFunction1() {
//     var dot = document.getElementsByClassName("Wfune3");
//     if (dot[0].style.display === "none") {
//         dot[0].style.display = "block";
//
//     } else {
//         dot[0].style.display = "none";
//
//     }
// }
// function myFunction2() {
//     var dot = document.getElementsByClassName("Wfune-tOuu9");
//     if (dot[0].style.display === "none") {
//         dot[0].style.display = "block";
//
//     } else {
//         dot[0].style.display = "none";
//
//     }
// }

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
//
// const app = express();
// const port = 3000;
//
// // 设置 body-parser 中间件用于解析请求体
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // POST 请求处理程序，用于接收 AJAX 请求并将数据写入文件
// app.post('/save-data', (req, res) => {
//     // 从请求体中获取数据
//     const fullName = req.body.fullName;
//
//     // 将数据写入文件
//     fs.appendFile(path.join(__dirname, 'data.txt'), fullName + '\n', (err) => {
//         if (err) {
//             console.error('Error writing to file:', err);
//             res.status(500).send('Error writing to file');
//         } else {
//             console.log('Data written to file');
//             res.send('Data saved successfully');
//         }
//     });
// });
//
// // 启动服务器监听指定端口
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
