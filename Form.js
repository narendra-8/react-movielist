import {useState} from 'react'
import Button from '@mui/material/Button';
import { Initial } from './Initial';


function Form (){

    const [mname,setMname]     = useState("") 
    const [poster,setPoster]   = useState ("")
    const [summary,setSummary] = useState("")
    const [rating,setRating]   = useState("")

    const  currentMovie  = [{ name:mname,poster,summary,rating }]

    const [movieList, setmovieList] = useState(Initial)

    return (

             <div className="container">

                    
                    <h1 >Movie Data Base</h1>
               
                    <input  placeholder="Enter Movie name"       onChange  ={(x)=> setMname(x.target.value)}  />   
                    <input  placeholder="Paste your image link"  onChange  ={(y)=> setPoster(y.target.value)} />                  
                    <input  placeholder="Movie summary "         onChange  ={(z)=>  setSummary(z.target.value)} />  
                    <input  placeholder="Ratings"                onChange  ={(e)=>  setRating(e.target.value)} />  
                   
                   

                   <Button variant="contained" type="submit" onClick= { () => setmovieList([...movieList, ...currentMovie])} >Add Movie</Button>
                    
                    <div className="movielist">
                    {movieList.map ((x)=>(<Movie Mname ={x.mname}    poster= {x.poster} 
                                                summary={x.summary}  Ratings= {x.rating}
                                            />))}

                    </div>
                    

             </div>    

    )
}

function Movie({ Mname, poster, summary, Ratings }) {
    return (

      <div className="movieContainer">
          
          <div  >
                <img  src={poster} alt="Movie Image" />
                <h3> {Mname}</h3>
                <p>  {summary} </p>
                <h5> {Ratings}</h5>
              
          
          </div>
    
      </div>
        
        
        
      
    );
    }

    export default Form;