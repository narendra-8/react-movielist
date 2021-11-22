import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

import { Counter } from './Counter';

import { useHistory } from 'react-router-dom'
// import { Initial } from './Initial';

// import { MovieForm } from './MovieForm';




  export function Movie({ Mname, poster, summary, Ratings, movieList,setmovieList, index} ) {

  const [show, setshow] = useState(true);
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();




 const Remove = ()=> {
   console.log (index)                      
   const removeindex =index;
   const remainingmovies = movieList .filter ((mv, idx) => {
    return idx !== removeindex;
    

  })
  console.log (remainingmovies, removeindex, movieList)
  setmovieList(remainingmovies)
}
 

  return (   
    
      <Card className="movieContainer">    
        <CardMedia         
          component="img"
          alt="green iguana"
          height="140"
          src={poster} alt="Movie Image" />

          <CardContent>
            
            
            <h3 className="firstrow_Moviecontainer">
              {Mname} 
              <IconButton onClick={() => setshow(!show)}  aria-label="Expand More & less Icon" color="primary">
                  {show ? <ExpandLessIcon  /> : <ExpandMoreIcon  />}
              </IconButton>               
              <span>⭐ {Ratings}</span>            
              </h3>
              
             

              <div className="firstrow_Moviecontainer-1">
                  <IconButton  onClick={()=> history.push('/films/' + index)} aria-label="Info Icon" color="primary">
                    <InfoIcon/>
                  </IconButton> 
                  <IconButton  onClick={()=> history.push('/Movies/Edit/' + index)} aria-label="Edit Icon" color="success">
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick= {Remove} aria-label="Delete Icon" color="error">
                    <DeleteIcon/>
                  </IconButton> 
              </div>            
              
              <p style={styles}>{summary} </p>
              
              <CardActions>
                  <Counter />
              </CardActions>

          </CardContent>

      
      </Card>
    
    
  );
}


