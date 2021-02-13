let util=require("../util")
module.exports.insertCard=(req,res)=>{
   util.model.Card.build(req.body).save()
   .then((data)=>{
       res.send(data)
   }).catch((err)=>{
       res.status(400).send({message:err.message})
   })
}