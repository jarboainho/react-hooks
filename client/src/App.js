import React,{useState} from 'react'
import MoviesList from './Component/MoviesList/MoviesList';
import movie1 from "./images/movie1.jpeg"
import movie2 from "./images/movie2.jpg"
import movie3 from "./images/movie3.jpg"
import movie4 from "./images/movie4.jpg"
import movie5 from "./images/movie5.jpg"
import movie6 from "./images/movie6.jpg"
import movie7 from "./images/movie7.jpg"
import movie8 from "./images/movie8.jpg"
import movie9 from "./images/movie9.jpg"
import movie10 from "./images/movie10.jpg"
import './App.css'
import Search from './Component/Search/Search';
import AddMovies from './Component/AddMovies/AddMovies';


function App() {
  const [movies,setMovies]=useState(
    [
      {
        id: Math.random(),
        title: "LE RETOUR",
        img: movie1,
        rating: 5,
        desc: "It tells the story of two Russian boys whose father suddenly returns home after a 12-year absence. He takes the boys on a holiday to a remote island on a lake that turns into a test of manhood of almost mythic proportions",
      },
      {
        id: Math.random(),
        title: "THE REVENANT",
        img: movie2,
        rating: 5,
        desc: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      },
      {
        id: Math.random(),
        title: "DOGS OF BERLIN",
        img: movie3,
        rating: 3,
        desc: "A politically sensitive murder forces two disparate detectives into a battle with the Berlin underworld and a confrontation with their own corruption.",
      },
      {
        id: Math.random(),
        title: "GREEN BOOK",
        img: movie4,
        rating: 2,
        desc: "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
      },
      {
        id: Math.random(),
        title: "DUNE",
        img: movie5,
        rating: 5,
        desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      },
      {
        id: Math.random(),
        title: "JOKER",
        img: movie6,
        rating: 4,
        desc: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      },
      {
        id: Math.random(),
        title: "THE RESCUE",
        img: movie7,
        rating: 3,
        desc: "A chronicle of the enthralling, against-all-odds story that transfixed the world in 2018: the daring rescue of twelve boys and their coach from deep inside a flooded cave in Northern Thailand.",
      },
      {
        id: Math.random(),
        title: "HOCUS POCUS 2",
        img: movie8,
        rating: 1,
        desc: "Two young women accidentally bring back the Sanderson Sisters to modern day Salem and must figure out how to stop the child-hungry witches from wreaking havoc on the world.",
      },
      {
        id: Math.random(),
        title: "AFTERSUN",
        img: movie9,
        rating: 4,
        desc: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between as she tries to reconcile the father she knew with the man she didn't.",
      },
      {
        id: Math.random(),
        title: "UPGRADE",
        img: movie10,
        rating: 4,
        desc: "Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.",
      },
    ]
  )
  return (
    <div className="App">
       <Search/> 
       <AddMovies/>
       <MoviesList movies={movies}/>
   
      
    </div>
  );
}

export default App;
