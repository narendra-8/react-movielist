import './App.css';
import React, { useState} from "react";

function App() {
  // array object method Task given by Mentor
  const Users = [
    {
      Mname: "Ironman",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69mnaz2z3AeZitFmqCWJFUeujGjGPJzKfkw&usqp=CAU",
      summary:
        "Marvel's Iron Man 3 - pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle.",
      Ratings: 4
    },
    {
      Mname: "Spiderman",
      poster:
        "https://www.denofgeek.com/wp-content/uploads/2019/07/spider-man-far-from-home-ending-explained.jpg?fit=1920%2C1080",
      summary:
        "Spider-Man is a Marvel commic story, When a human bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
      Ratings: 4.2
    },
    {
      Mname: "Arjun Reddy",
      poster:
        "https://th.bing.com/th/id/OIP.qAMaF4LPOpxxC48g9pAyQQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      summary:
        "Arjun Reddy, a medico with anger management issues, gets into a brawl with another student and is asked to either apologize or leave college. Arjun prepares to leave but stays back after seeing a first year student, Preethi Shetty. Arjun, along with his friend Shiva, goes to first year class room and announces that he is in love with Preethi and she is exclusive to him.",
      Ratings: 4.4
    },
	
	{
      Mname: "Dark",
      poster:
        "https://www.bing.com/th?id=AMMS_3210edbdc9a03cfab36e034bdc70c9f8&w=123&h=183&c=8&rs=1&o=5&dpr=1.25&pid=3.1&rm=2",
      summary:
        "Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese.[5][6][7] It ran for three seasons from 2017 to 2020. In the aftermath of a child's disappearance, Dark follows characters from the fictional German town of Winden as they pursue the truth.",
      Ratings: 4.5
    },
	
	{
      Mname: "Money Heist",
      poster:
        "https://th.bing.com/th/id/OIP.id0OxKoly7a6yTeRGrgTPgHaEe?w=266&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      summary:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      Ratings: 4.8
    },
	
  ];
  return (
    <div className="App">
      {Users.map((e) => (
        
        <Movie  Mname={e.Mname} poster={e.poster}  summary={e.summary} Ratings={e.Ratings}  />
        
      ))}
      
      <AddColor/>
      
    </div>
  );
}

// Task Like & DisLike


function Counter (){

  

  const [Like, setLike] = useState(0);
  const [DisLike, setDisLike] = useState(0);


 

  return(
    <div className="counter-container">
      
      <button className= "like-Dislike" onClick = {() => setLike(Like + 1)} > 👍 {Like}</button>      
    
      <button className= "like-Dislike"  onClick = {() => setDisLike(DisLike + 1)} > 👎 {DisLike}</button>     

      
    </div>

    
  );
}



// FINAL TASK GIVEN BY MENTORE DONE HERE

// Task
// 1. List Users  // 2. Movies  // 3. Movie poster
// 4. Movie name // 5. Summary // 6. Rating

function Movie({ Mname, poster, summary, Ratings }) {

  const [show,setShow] = useState(true);
  const styles = { display: show ? "block" : "none"};

  return (
    <div className="container">
      <img height="200" width=" 250" src={poster} alt={Mname} />
      <h3> MovieName: {Mname}</h3>
      <div></div>
      <button onClick= { () =>setShow(!show)}  > {show ? "Hide": "show"} Description</button>
      <p style ={styles} > {summary} </p>
      
      {/* <p> Summary: {summary} </p> */}
      <h5> Ratings: {Ratings}</h5>
      <div className="container-2">
      <Counter  />

      
      </div>
      
    </div>
  );
}


function AddColor (){
  
  
  const [color, setColor] = useState(""); 
  const styles = { backgroundColor: color};

  // const colors = ["red", "orange","yellow","orange"];
  const [colors, setColors] = useState(["red", "orange","yellow","orange"]); 


  return(
    <div>
      <input style ={styles} onChange={(e)=> { setColor(e.target.value) }}  placeholder ="Enter a color"  />

      <button onClick={() => setColors([...colors, color])}>  Add color  </button>

      {  colors.map(  (x)=>  (<ColorBox y={x} />)  )   }
      
      <ColorBox/>
    </div>
  )
}

function ColorBox ({y}){

  const styles ={
    backgroundColor:y ,
    height:"50px",
    width:"200px",
    margin:"10px",
  };

  return (

 <div style= {styles}>  </div>

  )
}

export default App;
