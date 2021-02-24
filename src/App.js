import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Name=['Mohammad Osman Goni',"Mohammad Shakib Al Hasan",'Mohammad Tahsan uddin'];
  const Products=[
    {name:'Photoshop',prize:'$50'},
    {name:'Illestrator',prize:'$75'},
    {name:'PdfReader',prize:'$20'},
    {name:'AdobeReader',prize:'$15'}
  ]
  const Students=[
    {name:'Mohammad Osman Goni',age:25,id:254521,Roll:1200},
    {name:'Anamul Haque',age:27,id:968521,Roll:1500},
    {name:'Ibrahim Mollah',age:20,id:225874,Roll:1700},
    {name:'Taskin Ahmed',age:15,id:258751,Roll:1800},
    {name:'Sanjid ul alom',age:27,id:254521,Roll:1100},
    {name:'Azizullah Miyazi',age:18,id:212547,Roll:1900},
    {name:'Rahat uddin',age:15,id:845712,Roll:1300},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <CountLike></CountLike>
        <img src={logo} className="App-logo" alt="logo" />

        <div className='main'>
          <Users></Users>
        </div>
        <div className='main'>
        {
        Products.map(pd=><Product product={pd}></Product>)
        }
        </div>
      <div className='main'>
      {
        Students.map(Features=><Student information={Features}></Student>)
      }
      </div>

     
       {/* <Person name={Name[0]} Fother-Name='Anwar Hossain' Age='20' profession='Student'></Person>

       <Person name={Name[1]} Fother-Name='Tamim Hossain' Age='28' profession='Teacher'></Person>

       <Person name={Name[2]} FotherName='Musfiq Hossain' Age='35' profession='Crickter'></Person> */}
      
      </header>
    </div>
  );
}

function CountLike(){
  const[countvalue,setcount]=useState(0)
  return(
    <div>
    <h1>Count:{countvalue}</h1>
    <button onClick={()=>setcount(0)}>Reset</button>
    <button onClick={()=>setcount(countvalue+1)}>Increase</button>
    <button onClick={()=>setcount(countvalue-1)}>Decrease</button>
    </div>
  
  )
}

function Users(){
  const userrStyle={
        color:'black',
        backgroundColor:'cyan',
        border:'2px solid red',
        borderRadius:'15px',
        margin:'10px',
        padding:'5px',
        textAlign:'left',
      }
    const [user,setuser]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setuser(data))
    },[])
   return(
     
         user.map(userinform=>
         <div style={userrStyle}>
            <h1>Name:{userinform.name}</h1>
            <p>email:{userinform.email}</p>
            <p>City:{userinform.address.city}</p>
            <p>Website:{userinform.website}</p>
          </div>)
   )
}


// function Person(profs){
//   const personStyle={
//     color:'black',
//     backgroundColor:'cyan',
//     border:'2px solid red',
//     borderRadius:'15px',
//     margin:'10px',
//     padding:'5px',
//     textAlign:'left',
//     width:'600px'
//   }
//   return(
//   <div style={personStyle}>
//     <h2>Name:{profs.name}</h2>
//     <p>Fother-Name:{profs.FotherName}</p>
//     <p>Age:{profs.Age}</p>
//     <p>Profession:{profs.profession}</p>
//   </div>
//   )
  
// }



function Product(profs){
  const Style={
    border:'1px solid gray',
    borderRadius:'10px',
    padding:'10px',
    backgroundColor:'lightGray',
    color:'black',
    width:'250px',
    height:'200px',
    margin:'10px'
  }
  const {name,prize}=profs.product;
  return(
   
      <div style={Style}>
        <h1>{name}</h1>
        <h5>{prize}</h5>
        <button>Buy Now</button>
      </div>  
   
  )
}

function Student(profs){
  const Style={
    border:'1px solid gray',
    borderRadius:'10px',
    padding:'10px',
    backgroundColor:'lightGray',
    color:'black',
    width:'250px',
    height:'200px',
    margin:'10px',
    overflow: 'hidden'
  }
  const {name,age,id,Roll}=profs.information;
  return(
    <div style={Style}>
        <h4>Name:{name}</h4>
        <p>Age:{age}</p>
        <p>Id:{id}</p>
        <p>Roll:{Roll}</p>
      </div>
     )
}

export default App;
