const cardController=require('./controller/card')

module.exports=function(router){
    router.route('/card').post(cardController.insertCard)
}