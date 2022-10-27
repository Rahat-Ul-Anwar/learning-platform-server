const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learn management api running');
})

app.get('/courses', (req, res) => {
    res.send(courses);

})

app.listen(port , ()=> {
    console.log('Learning management server running on port', port);
})