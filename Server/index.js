const express = require ('express');
const app = express();
app.use(express.json());
const  db = require('./models')

const costumersRouter = require('./routes/Costumer')
const requestRouter = require('./routes/Request')


app.use('/costumer', costumersRouter)
app.use('/request', requestRouter)

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
        console.log("Server running on port: 3001");
    })
})
