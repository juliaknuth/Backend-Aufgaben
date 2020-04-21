import {Router} from 'express'
import mongoose from 'mongoose'

const router = Router()

mongoose.connect('mongodb://localhost:27017/Produkte')

const Produkte = mongoose.model('Produkte', {
    Name: {
        type: String
    },
    Beschreibung: {
        type: String
    },
    Preis: {
        type: Number
    }
})

router.get('/', (request, response) => {
    Produkte.find().then(data => {
        response.json(data)
    })
})

router.post('/add', (request, response) => {
    Produkte.create({Name: request.body.Name, Beschreibung: request.body.Beschreibung, Preis: request.body.Preis})
    .then(() => response.json({created: true}))
    .catch(() => response.json({created: false}))
})

//Produkte.findByIdAndDelete(id).then(Produkt => {
    //response.json(Produkt)}
 //)

 //if(mongoose.Types.ObjectId.isValid(id)) {
   // User.findByIdAndUpdate(id,{$set:{Name:Produkt.Name}},{new:true})       .then((Produkte)=>{
   //    if(Produkte) {
   //      resolve({success:true,data:Produkte});
   //    } else {
   //      reject({success:false,data:"no such product exist"});
   //    }
   // }).catch((err)=>{
   //     reject(err);
   // })
  //  } 
 //Produkte.findByIdAndUpdate(id, data, { new: true }).then(Produkt => {

 //}
   // )

export default router