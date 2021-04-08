import React, {useContext,useState,useEffect} from 'react'
import './AlbumSongsList.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {CurrentAlbumSelected} from '../App'
import {AlbumContext,SongsContext} from '../App'
// import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
let faker = require('faker');

function AlbumSongsList() {
    
    const albums=useContext(AlbumContext);
    const songs=useContext(SongsContext);


    const [CurrentAlbumId,setCurrentAlbumId] = useContext(CurrentAlbumSelected);
    const [filteredData, setfilteredData] = useState(songs);


    let filteredSongs;
    let albumTitle='';


    const songfilteredData=songs.filter(song=>{
      return song.albumId== Number(CurrentAlbumId);
  });


  useEffect(() => {
    setfilteredData(songfilteredData);
    }, []);


    const randomTimeGenerator=()=>{
      const randomNumber=Math.random()*10;
      return randomNumber.toFixed(2)
  }
  


    return (
        
        <div className='AlbumSongsListContainer'>
                <Link to='/album' > 
                <ArrowBackIosIcon/>
                <br></br>
                </Link>
                <img src='../images/unkownAlbum.png' className='SpecificAlbumImgLarge' alt='unknownAlbum'/> 
                {albums.map(album=>{
                    if(album.id==CurrentAlbumId){
                        albumTitle=album.title
                    }
                })}

                <h1 className='FullAlbumName'>{albumTitle}</h1>
                <h4 className='TotalSongs'>Total number of songs: {filteredData.length}</h4>
                
                <div className='btnWrapper'>
                <a href='#' className='btn-album'><PlayArrowIcon/>Play</a>
                <a href='#' className='btn-album'><ShuffleIcon/>Shuffle</a>
                </div>

                <ul className='SongsWrapper'>
                <li className='TitleHeading'>
                <th className='Songimg'>Image</th>
                <th className='TrackTitleHeading'>Title</th>
                <th className='DurationHeading'>Time</th>
                <th className='SingerHeading'>Artist</th>
                <th className='AlbumHeading'>Album</th>
                <th className='AddtoPlaylist'>Favorite</th>
            </li>
                {
                  filteredData.map(song=>{
                   return   <li className='EachSongContainer'>
                     <span className='ImgContainer'> <img src={song.thumbnailUrl} className='Img-thumbnail' alt='thumbnail'/> </span>
                     <p className='TrackTitle' >{song.title.charAt(0).toUpperCase() + song.title.slice(1)} <span class="tooltiptext">{song.title.charAt(0).toUpperCase() + song.title.slice(1)}</span></p>
                    <p className='DurationofSong'>{randomTimeGenerator()}</p>  
                    <p className='Singer'>{faker.name.findName()}</p>   
                    <p className='AlbumName'>{ albums && albums.map(album =>(
                        (album.id===song.albumId) && album.title 
                   )) }</p>   
                   <FavoriteBorderIcon className='AddtoFav'/> 
                 </li>
                    
                 })
                }
               
 
             </ul>
        
    
        </div>
    )
}

export default AlbumSongsList
