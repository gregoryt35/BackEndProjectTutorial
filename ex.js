const express = require('express');
const { send } = require('process');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello there');
});

const courses = [
    {id:1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

// http GET requests route
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

// http POST requests route
app.post('/api/courses', (req,res) => {
    if (Object.values(req.body)[0].length > 3) {
        const course = {
            id: courses.length +1,
            name:req.body.name
        }
        courses.push(course);
        res.send(course);
        return 200;
    }
    else {
        return 404;
    }   
});

// here we need the specific id of the course we want to update
app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return 404;
    }
    else if (Object.values(req.body)[0].length > 3){
        const newCourse ={
            id: req.params.id,
            name:req.body.name    
        }
        const num = courses.indexOf(course)
        courses[num] = newCourse;
        res.send(newCourse);
        return 200;
    }
    else {
        return 404;
    }
});

// http DELETE request route
app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return 404;
    }
    else if (Object.values(req.body)[0].length > 3){
        const num = courses.indexOf(course)
        courses.splice(num);
        res.send(course);
        return 200;
    }
    else {
        return 404;
    }
});

// request course by id
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
    res.send(course);
})

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})