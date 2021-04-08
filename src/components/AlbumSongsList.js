import React, {useContext,useState,useEffect} from 'react'
import './AlbumSongsList.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {CurrentAlbumSelected} from '../App'
import {AlbumContext,SongsContext} from '../App'
import {CurrentSongDetails} from '../App'
// import AddIcon from '@material-ui/icons/Add';
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
let faker = require('faker');

function AlbumSongsList() {
    
    const albums=useContext(AlbumContext);
    const songs=useContext(SongsContext);

    const [CurrentTitle, CurrentTime,CurrentImg, setCurrentTime,setCurrentTitle,setCuttentImg] = useContext(CurrentSongDetails);

    const [CurrentAlbumId,setCurrentAlbumId] = useContext(CurrentAlbumSelected);
    const [filteredData, setfilteredData] = useState(songs);


    let filteredSongs;
    let albumTitle='';

    let TitleTrack='';
    let Duration='';
    let Img;



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
  


  const eventSongHandler=(e) =>{
    
    const domelements = e.target
    console.log(domelements);
    try{
     TitleTrack= domelements.querySelectorAll(".TrackTitle")[0].innerHTML;
     Duration= domelements.querySelectorAll(".DurationofSong")[0].innerHTML;  
     Img=  domelements.querySelectorAll(".Img-thumbnail").src;  
     console.log(Duration) 
    setCurrentTitle(TitleTrack);
    setCurrentTime(Duration);
    setCuttentImg(Img);
    }
    catch(e){
      console.log(e)
    }
  }


  const colorchangeHandler=(e)=>{
    console.log('from color change')
    try{
    var background = document.getElementsByClassName('AddtoFav').style.backgroundColor;
    if (background == "rgb(0,202,83)") {
        document.getElementsByClassName('AddtoFav').style.backgroundColor = "rgb(203,203,203)";
    } else {
        document.getElementsByClassName('AddtoFav').style.backgroundColor = "rgb(0,202,83)";
    }
  }
  catch(e){
    console.log(e)
  }
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
                   return   <div className='EachSongContainer' onClick={eventSongHandler}>
                     <span className='ImgContainer'> <img src={song.thumbnailUrl} className='Img-thumbnail' alt='thumbnail'/> </span>
                     <p className='TrackTitle' >{song.title.charAt(0).toUpperCase() + song.title.slice(1)} <span class="tooltiptext">{song.title.charAt(0).toUpperCase() + song.title.slice(1)}</span></p>
                    <p className='DurationofSong'>{randomTimeGenerator()}</p>  
                    <p className='Singer'>{faker.name.findName()}</p>   
                    <p className='AlbumName'>{ albums && albums.map(album =>(
                        (album.id===song.albumId) && album.title 
                   )) }</p>   
                   <FavoriteIcon className='AddtoFav' onClick={colorchangeHandler}/> 
                 </div>
                    
                 })
                }
               
 
             </ul>
        
    
        </div>
    )
}

export default AlbumSongsList
