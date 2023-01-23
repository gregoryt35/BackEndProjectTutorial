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
    if (req.body.name && req.body.name.length > 4) {
        const course = {
            id: courses.length +1,
            name:req.body.name;
        }
    }
        courses.push(course);
        return course;
});

// here we need the specific id of the course we want to update
app.put('/api/courses/:id', (req,res)=>{
    // Write the code in order to look up the course, if not existing return a 404
            //otherwise 
                    //update the course
                    //return the updated course
});

// http DELETE request route
app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
     //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
});

// request course by id
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
        res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})