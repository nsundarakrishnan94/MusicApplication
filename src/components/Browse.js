import React, {useContext,useEffect,useState} from 'react'
import {AlbumContext,SongsContext} from '../App'
import AddIcon from '@material-ui/icons/Add';
import './Browser.css'
import CurrentPlaying from './CurrentPlaying';
import {CurrentSongDetails} from '../App'
let faker = require('faker');


export const CurrentSongTitle=React.createContext()
export const CurrentSongTime=React.createContext()

const randomTimeGenerator=()=>{
    const randomNumber=Math.random()*10;
    return randomNumber.toFixed(2)
}


function Browse() {


    const [CurrentTitle, CurrentTime, setCurrentTime,setCurrentTitle] = useContext(CurrentSongDetails);

    const albums=useContext(AlbumContext);
    const songs=useContext(SongsContext);



 const [searchSong, setSearchSong] = useState("");
  const [data, setData] = useState(songs);

  

  console.log(data);

  const handleChange = value => {
    setSearchSong(value);
    filterData(value);
  };
 
  
  
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(songs);
    else {
      const filteredData = songs.filter(song => {
        return  song.title.toLowerCase().includes(lowercasedValue)
        
      });
      setData(filteredData);
      console.log(data);
      console.log(filteredData);
    }
  }





   
    var randomName = faker.name.findName(); 
    var TitleTrack='';
    var Duration='';
    let htmlSongs;
    const searchbar=document.getElementById('searchbar');
    const songsList=document.getElementsByClassName('SongsList')[0];




    const eventSongHandler=(e) =>{
        const domelements = e.target
        console.log(domelements);
         TitleTrack= domelements.querySelectorAll(".TrackTitle")[0].innerHTML;
         Duration= domelements.querySelectorAll(".DurationofSong")[0].innerHTML;   
         console.log(Duration) 
        setCurrentTitle(TitleTrack);
        setCurrentTime(Duration);
      }



  
    return (
        <>
        <p className='ActiveTitle'>All Songs</p>
        <div className='SearchWrapper'>
            <input type='text' name='searchbar' id='searchbar' placeholder='Search for a song' value={searchSong}
            onChange={e => handleChange(e.target.value)} />
        </div>

        <ul className='SongsWrapper'>

        <li className='TitleHeading'>
            <th className='Songimg'>Image</th>
            <th className='TrackTitleHeading'>Title</th>
            <th className='DurationHeading'>Time</th>
            <th className='SingerHeading'>Artist</th>
            <th className='AlbumHeading'>Album</th>
            <th className='AddtoPlaylist'>Playlist</th>
        </li>
        
            <ul className='SongsList'>
               {
                data.map(song=>{
                  return   <li className='EachSongContainer' onClick={eventSongHandler}>
                    <span className='ImgContainer'> <img src={song.thumbnailUrl} className='Img-thumbnail' alt='thumbnail'/> </span>
                    <p className='TrackTitle' >{song.title.charAt(0).toUpperCase() + song.title.slice(1)} <span class="tooltiptext">{song.title.charAt(0).toUpperCase() + song.title.slice(1)}</span></p>
                   <p className='DurationofSong'>{randomTimeGenerator()}</p>  
                   <p className='Singer'>{faker.name.findName()}</p>   
                   <p className='AlbumName'>{ albums && albums.map(album =>(
                       (album.id===song.albumId) && album.title 
                  )) }</p>   
                  <AddIcon className='AddtoFav'/> 
                </li>
                   
                })
               }
              

            </ul>


        </ul>
        </>
    )
}


export default Browse
