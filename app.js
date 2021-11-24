const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const axios = require('axios')
const cors = require('cors')
const path = require('path')

require('dotenv').config()
app.use(cors())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/statistics', async (req, res) => {
  const course = req.query.course
  const module = req.query.module
  console.log(course)
  console.log(module)
  const stats = await getStatistics(course, module)
  res.json(stats)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const getStatistics = async (course = 'TNM040', module = 'PRA1') => {
  const options = {
    method: 'GET',
    url: process.env.API_URI + '/ExamStatistics',
    params: { courseCode: course, moduleCode: module },
    headers: {
      'LiU-Operation-Id': process.env.LIU_OPERATION_ID,
      'LiU-Api-Version': 'v1',
      'Ocp-Apim-Subscription-Key': process.env.SUBSCRITPION_KEY
    },
    data: '{body}'
  }

  const response = await axios.request(options).catch(function (error) {
    console.error(error)
  })
  return await response.data
}
