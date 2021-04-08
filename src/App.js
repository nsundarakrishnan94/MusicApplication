import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Music from './components/Music'
import Searchbar from './components/Searchbar'
import Types from './components/Types';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';
import CurrentPlaying from './components/CurrentPlaying'
import AllSongs from './components/AllSongs';
import {BrowserRouter, Switch,Route} from 'react-router-dom'



export const AlbumContext=React.createContext()
export const SongsContext=React.createContext()

export const CurrentSongDetails=React.createContext()
export const CurrentAlbumSelected=React.createContext()

function App() {

  const [albums, setAlbums]= useState([])
  const [songs, setSongs]= useState([])

  const [CurrentTitle, setCurrentTitle]= useState('')
  const [CurrentTime, setCurrentTime]= useState('')
  const [CurrentImg, setCuttentImg]= useState('')

  const [AlbumId, setAlbumId]= useState('')

  console.log('This is from App comp'+AlbumId)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(response=> setAlbums(response.data))
    .catch(error=> console.log('Incorrect URL'))
  },[]);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response=> {setSongs(response.data)})
      .catch(error=> console.log('Incorrect URL'))
    },[]);

    


  return (
    <div className="App">
    <BrowserRouter>
    <CurrentSongDetails.Provider value={[CurrentTitle, CurrentTime,CurrentImg, setCurrentTime,setCurrentTitle,setCuttentImg]}>
    <Sidebar/>
    <SongsContext.Provider value={songs} >
    <AlbumContext.Provider value={albums}>
    <CurrentAlbumSelected.Provider value={[AlbumId, setAlbumId]}>
    <MainBody/>
    </CurrentAlbumSelected.Provider>
    </AlbumContext.Provider>
    </SongsContext.Provider>
   
    <CurrentPlaying/>
    </CurrentSongDetails.Provider>
    
    </BrowserRouter>
  
    </div>
  );
}

export default App;
