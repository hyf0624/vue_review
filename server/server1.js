const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器1了')
  console.log('请求资源是:', request.url)
  console.log('请求来自于:', request.get('Host'))
  next()
})

app.get('/students', (request, response) => {
  const students = [
    {
      id: '001',
      name: '李卓',
      age: 18
    },
    {
      id: '002',
      name: '王祥',
      age: 19
    },
    {
      id: '003',
      name: '王发宇',
      age: 20
    },
    {
      id: '004',
      name: '诸葛大力',
      age: 25
    }
  ]
  response.send(students)
})

app.listen(5000, (err) => {
  if (!err) {
    console.log('服务器启动成功了，获取用户信息')
  }
})
