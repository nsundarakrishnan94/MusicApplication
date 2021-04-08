import React,{useContext} from 'react'
import './MainBody.css'
import AllSongs from './AllSongs'
import Searchbar from './Searchbar'
import Album from './Album'
import Home from './Home'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import AlbumSongsList from './AlbumSongsList'
import Browse from './Browse'
import {CurrentAlbumSelected} from '../App'
import SpecificPlaylist from './SpecificPlaylist'

function MainBody() {
    const [AlbumId,setCurrentAlbumId] = useContext(CurrentAlbumSelected);

    return (
        
        <div className='MainBody-container'>
        <div className='MainContents'>
       
        <Switch>
        <Route exact path="/allsong" component={AllSongs}/>
        <Route exact path="/album" component={Album}/>
        <Route exact path='/specificAlbumSongs' component={AlbumSongsList}/>
        <Route exact path='/playlists/Carnatic' component={SpecificPlaylist}/>
        <Route exact path="/" component={Home}/>
        </Switch>
    
        
          
        </div>
          
        </div>
        
    )
}



export default MainBody
