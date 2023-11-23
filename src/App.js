
import { element } from 'prop-types';
import './App.css';
import Header from './components/Header'
import Movie from './components/movie'
import movies from './Movie.json'
function App() {
  return (
    <div className="App">
    <Header/>
    <div className='main'>
    {
 
        movies.map((element)=>{
          return(
        <Movie title={element.Title} 
          year={element.Year}
          img={element.Poster}
        />
      )
  
      })
    }

   
    </div>
    
    </div>
  );
}

export default App;
