import React,{useState} from "react";
import Card from '@material-ui/core/Card';
import './App.css';
import PreLoader from "./PreLoader";

function App() {
  const [state, setstate] = useState({id:null})

let cards=[{id:1,name:"Club",value:"A"},{id:2,name:"Spades",value:4},{id:3,name:"Heart",value:"A"},{id:4,name:"Heart",value:"5"},
{id:5,name:"Club",value:2},{id:6,name:"Spades",value:3},{id:7,name:"Diamond",value:2},{id:8,name:"Club",value:3},{id:9,name:"Spades",value:5},
{id:10,name:"Heart",value:4},{id:11,name:"Heart",value:3},{id:12,name:"Club",value:5},{id:13,name:"Diamond",value:3},{id:14,name:"Diamond",value:4},
{id:15,name:"Heart",value:2},
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
const handleClick=(data)=>{
  setstate({id:data.id})
  let bodyData={
    cardName:data.name,
    value:data.value
  }
  // console.log(data)
  fetch("http://localhost:8080/app/card",{
    method:"POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body:JSON.stringify(bodyData)
  }).then((response)=>{
     if(response.ok){
       response.json().then((res)=>{
          // console.log(res)
          setstate({id:null})
       })
     }else{
      setstate({id:null})
     }
  })
}

  return (
    <div className="main-container">
        <div className="card-main-container">
        {cards.map((ele,index)=>{
          return( <div key={index} className="relative">
                  <Card  className="card-container"  onClick={()=>handleClick(ele)}>
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
                {(state.id==ele.id) &&<div className="preloader-main-container" >
                      <div className="preloader-container">
                         <PreLoader />
                      </div>
                  </div>}
                </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
