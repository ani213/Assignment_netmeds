import React,{useState} from "react";
import Card from '@material-ui/core/Card';
import './App.css';

function App() {
  
let cards=[{name:"Club",value:"A"},{name:"Spades",value:"4"},{name:"Heart",value:"A"},{name:"Heart",value:"5"},
{name:"Club",value:2},{name:"Spades",value:3},{name:"Diamond",value:2},{name:"Club",value:3},{name:"Spades",value:5},
{name:"Heart",value:4},{name:"Heart",value:3},{name:"Club",value:5},{name:"Diamond",value:3},{name:"Diamond",value:4},
{name:"Heart",value:2},
];
let getCardSymbol=(name)=>{
   if(name==="Club"){
      return <div>&clubs;</div>
   }
   if(name==="Diamond"){
    return <div style={{color:"red"}}>&diams;</div>
 }
   if(name==="Heart"){
    return <div style={{color:"red"}}>&hearts;</div>
  }
  if(name==="Spades"){
    return <div>&spades;</div>
 }
 else return <div>Not Avilable</div>
}
let getMiddlePart=(data)=>{
    if(data.value=="A"){
     return(
       <div className="A-class">
           <div className="symbol-size">{getCardSymbol(data.name)}</div>
       </div>
     )
    }
    if(data.value==2){
      return(
        <div className="class-2">
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
        </div>
      )
     }
     if(data.value==3){
      return(
        <div className="class-2">
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
        </div>
      )
     }
     if(data.value==4){
      return(
        <div className="vertical">
          <div className="horizental">
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
          </div>
          <div className="horizental">
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
          </div>
        </div>
      )
     }
     if(data.value==5){
      return(
        <div className="vertical">
          <div className="horizental">
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
            <div className="symbol-size">{getCardSymbol(data.name)}</div>
          </div>
          <div className="center"><div className="symbol-size">{getCardSymbol(data.name)}</div></div>
          <div className="horizental">
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
            <div className="symbol-size rotate">{getCardSymbol(data.name)}</div>
          </div>
        </div>
      )
     }
}

  return (
    <div className="main-container">
        <div className="card-main-container">
        {cards.map((ele,index)=>{
          return( 
                  <Card key={index} className="card-container">
                  <div>
                    <div style={{color:`${(ele.name=="Heart"||ele.name=="Diamond")?"red":""}`}} className="number-size">{ele.value}</div>
                     <span className="number-size">{getCardSymbol(ele.name)}</span>
                  </div>
                  <div className="middle">
                     {getMiddlePart(ele)}
                  </div>
                  <div>
                    <div className="bottom-content">
                    <div style={{color:`${(ele.name=="Heart"||ele.name=="Diamond")?"red":""}`}} className="number-size">{ele.value}</div>
                      <span className="number-size">{getCardSymbol(ele.name)}</span>
                    </div>
                  </div>
                </Card>
          )
        })}
        </div>
    </div>
  );
}

export default App;
