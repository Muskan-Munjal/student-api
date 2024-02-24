
const express = require('express')
const router = express.Router()
// students api


let students = [
    {
        name: "Muskan",
        class:"Btech",
        rollno:1
    },
    {
        name: "Anjali",
        class:"B.sc",
        rollno:2
    },
    {
        name: "Mansi",
        class:"MBA",
        rollno:3
    }
]


  router.get('/api/students', (req , res) =>{
   
    res.send(students)
}
)

  router.get('/api/students/:rollno' , (req,res) => {
   
    res.send(students[req.params.rollno - 1])
   })
   
   
   router.post("/api/students" , (req,res)=> {
    console.log(req.body)
   const body  = req.body;
   students.push(body)
   res.send({success:true})
   }
   )

   
module.exports = router;