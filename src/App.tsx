import React from 'react';
import './App.css';

function App() {

  const [answer,setAnwer] =React.useState<string>("")
  const [question, setQ] = React.useState<string>("");
  const [ans, setA] = React.useState<string>("");

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setAnwer( event.target.value);  }

  const handleSubmit =(event:any) =>{
    if(answer.toLowerCase() === ans.toLowerCase()){
      alert('Correct answer')
    }else{
      alert('Incorrect Input , Correct anser is:   ' + ans);
    }
    
    // event.preventDefault();
  }

React.useEffect(() => {  
  fetch("https://jservice.io/api/random")
  .then(res => res.json())
  .then(
    (result) => {
     
      setQ(result[0].question);
      setA(result[0].answer);
      
    })
    .catch(e=>{
      console.log(e)
    })
  
}, [])

  return (
    <div className="container">
    <div className="row">
     <div className="col-md-4"></div>
     <div className="col-md-4"> 
    
     <h1 style={{textAlign:"center",marginTop:40,color:"tomato",fontWeight:"bold"}}>Trivia Game</h1>
    <div className="mt-4" style={{textAlign:"center"}}>
      <h5 ><span style={{color:"red",fontWeight:'bold'}}>Question: </span>{ question === ""? "Loading...":question}</h5>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label  >
          <span className="mr-2">Answer: </span>
          <input type="text" name="answer" value={answer} onChange={handleChange} />
        </label>

        <input className="btn-primary " type="submit" value="Submit" />
        <p>{ans}</p>
      </form>
    </div>
       
     </div>
     <div className="col-md-4"></div>
    </div>
    </div>
  );
}

export default App;
