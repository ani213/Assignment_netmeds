let util=require("../util");
let card=require("./Card");
let sequelize=require("../config/connection");
const tableOption={
    timestamps: true,
    paranoid: true
}
module.exports=function(){
    console.log("init");
    util.model.Card=sequelize.define('Cards',card.cardDef,tableOption);
}
();