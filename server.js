const express=require('express');
const morgan = require("morgan");


const app=express();

const PORT=process.env.PORT || 5000;

app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.json({msg: 'Welcome to the contact keeper API'});
});

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));