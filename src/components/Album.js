import React, {useContext,useState} from 'react'
import {AlbumContext} from '../App'
import './Album.css'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AlbumSongsList from './AlbumSongsList'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {CurrentAlbumSelected} from '../App'


function Album() {

    const albums=useContext(AlbumContext);
    let albumId;
    const [CurrentAlbumId,setCurrentAlbumId] = useContext(CurrentAlbumSelected);
    
    
    const albumClickHandler=(e)=>{
        const domelements = e.target
        console.log(domelements);
       albumId= domelements.id
       setCurrentAlbumId(albumId);
    }
    
    const Content=   <div className='Albumlist'>
                            {albums.map(album=>(
                            
                            <Link to='/specificAlbumSongs' > 
                            <div className='AlbumCard' onClick={albumClickHandler}>
                            <img  id= {album.id} src='../images/unkownAlbum.png' className='AlbumImg' alt='unknownAlbum'/> 
                            <PlayCircleFilledWhiteIcon className='PlayCircle'/>
                            <MoreVertIcon className='MoreVertIcon'/>
                             <h4 className='AlbumTitle'>{album.title.toUpperCase()}</h4>  
                              </div>
                              </Link>
                            
                              ))}  
                              </div> 



    return (
        <>    
        <p className='ActiveTitle'>Album</p>   
        {Content}
        </>
    )
}

export default Album



