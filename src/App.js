import "./styles.css";
import React,{useEffect,useState} from 'react';
function First(props){
  var name = "Nagednra";
  return (
    <>
    <h2>Age is :{props.age}</h2>
    <h3>Hello {name} this is first react application</h3>
    </>
  );
}
export default function App() {
  const [data,setData] = useState();
  const url = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then((dat)=>setData(dat))
  })
  return (
    <div className="App">
      <First age='25'/>
      <h1>Apis</h1>
      <h2>Fetching Apis data</h2>
      <ol> {data && data.map((el)=>{ 
          return <li>{ el.title}</li>;
        })
        }</ol>
        
    </div>
  );
}
function textdata(na){
return na.firstname + " " +na.lastname;
}
const na = {
  firstname:"Nagendra",
  lastname :"Nandhu"
};

