const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
require('dotenv').config()

app.get('/', async (req, res) => {
    const stats = await getStatistics()
    res.json(stats)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


const getStatistics = async () => {
    const options = {
        method: 'GET',
        url: process.env.API_URI + '/ExamStatistics',
        params: { courseCode: 'TNM040', moduleCode: 'PRA1' },
        headers: {
            'LiU-Operation-Id': process.env.LIU_OPERATION_ID,
            'LiU-Api-Version': 'v1',
            'Ocp-Apim-Subscription-Key': process.env.SUBSCRITPION_KEY
        },
        data: '{body}'
    };

    const response = await axios.request(options).catch(function (error) {
        console.error(error);
    });
    return await response.data
}