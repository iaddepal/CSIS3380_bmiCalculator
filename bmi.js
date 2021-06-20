const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

var newBmi="";
app.get('/',(req,res)=>{

    res.render('bmiapp',{bmiValue:newBmi});
})

app.post('/',(req,res) => {

    var bmi_age = Number(req.body.age);
    var bmi_weight = Number(req.body.weight);
    var bmi_height = Number(req.body.height);

    newBmi = (bmi_weight/(bmi_height*bmi_height))*10000;
    
    res.redirect("/");
})



app.listen(3000, function () {
 console.log("server started on port 3000");
});
