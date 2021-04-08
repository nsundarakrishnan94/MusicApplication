import React, {useContext,useEffect,useState} from 'react'
import {AlbumContext,SongsContext} from '../App'
// import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './AllSongs.css'
import CurrentPlaying from './CurrentPlaying';
import {CurrentSongDetails} from '../App'
import PlaylistModal from './PlaylistModal'
import './SpecificPlaylist.css'
let faker = require('faker');


export const CurrentSongTitle=React.createContext()
export const CurrentSongTime=React.createContext()

const randomTimeGenerator=()=>{
    const randomNumber=Math.random()*10;
    return randomNumber.toFixed(2)
}

function SpecificPlaylist() {



    const [Playlists, setPlaylists] = useState([])
    const [isModalOpen,setisModalOpen]=useState(false);
    
   
  
      const modalOpen = () => {
        console.log('hiiii')
        setisModalOpen(true) 
      }
    
   
      const modalClose=() => {
        setisModalOpen(false);
      }




    const albums=useContext(AlbumContext);
    const songs=useContext(SongsContext);



 const [searchSong, setSearchSong] = useState("");
 const [initialData, setInitialData] = useState(songs);
const [data, setData] = useState(songs);
const [playlistData,setplaylistData]=useState([])


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
    let TitleTrack='';
    let Duration='';
    let Img='';
    let Artist='';
    let Album='';
    let htmlSongs;
    const searchbar=document.getElementById('searchbar');
    const songsList=document.getElementsByClassName('SongsList')[0];

  useEffect(() => {
    console.log(playlistData);
    localStorage.setItem('playlistsongs', playlistData);
    localStorage.getItem('playlistsongs');
  }, [playlistData])

  


    const addPlaylistSongHandler=(e) =>{
        
        const domelements = e.target
        console.log(domelements);
        try{
         Img=domelements.querySelectorAll(".Img-thumbnail")[0].src;
         console.log(Img)
         TitleTrack= domelements.querySelectorAll(".TrackTitle")[0].innerHTML.split('<span')[0];
         Duration= domelements.querySelectorAll(".DurationofSong")[0].innerHTML;  
         Artist= domelements.querySelectorAll(".Singer")[0].innerHTML;
         Album= domelements.querySelectorAll(".AlbumName")[0].innerHTML;   
         console.log(TitleTrack,Duration,Img,Artist,Album) ;
         setplaylistData([...playlistData, {
          Title:TitleTrack,
          Time:Duration,
          Singer:Artist,
          Album:Album,
          Image:Img
      }])
        }
        catch(e){
          console.log(e)
        }

         console.log('Sk');
         console.log(playlistData)
       
      }



  
    return (
        <>
        <p className='ActiveTitle'>Playlist</p>
        <div className='SearchWrapper'>
        <button className='Playlistbtn' onClick={modalOpen}> Add Songs to Playlist</button>
        </div>

        <ul className='SongsWrapper'>
       

            <li className='TitleHeading'>
                <th className='Songimg'>Image</th>
                <th className='TrackTitleHeading'>Title</th>
                <th className='DurationHeading'>Time</th>
                <th className='SingerHeading'>Artist</th>
                <th className='AlbumHeading'>Album</th>
            </li>
            <ul className='SongsList'>
            {
                  playlistData && playlistData.map(playlistsong=>{
                  return   <li className='PlaylistModalEachSongContainer'>
                       <span className='ImgContainer'> <img src={playlistsong.Image} className='Img-thumbnail' alt='thumbnail'/> </span>
                      <p className='TrackTitle' >{playlistsong.Title.charAt(0).toUpperCase() + playlistsong.Title.slice(1)} <span class="tooltiptext">{playlistsong.Title.charAt(0).toUpperCase() + playlistsong.Title.slice(1)}</span></p>
                  <p className='DurationofSong'>{playlistsong.Time}</p>  
                  <p className='Singer'>{playlistsong.Singer}</p>   
                  <p className='AlbumName'>{ playlistsong.Album}</p>   
                
                  </li>
                  
                  })
            }
            </ul>


        </ul>
        <PlaylistModal open={isModalOpen} handleClose={modalClose}>

             <div className='PlaylistSearchWrapper'>
                <input type='text' name='searchbar' id='playlistsearchbar' placeholder='Search for a song' value={searchSong}
                onChange={e => handleChange(e.target.value)} />
            </div>
            <ul className='PlaylistModalSongsWrapper'>

            <li className='TitleHeading'>
                <th className='PlaylistModalSongimg'>Image</th>
                <th className='PlaylistModalTrackTitleHeading'>Title</th>
                <th className='PlaylistModalDurationHeading'>Time</th>
                <th className='PlaylistModalSingerHeading'>Artist</th>
                <th className='PlaylistModalAlbumHeading'>Album</th>
            </li>
            
                <ul className='SongsList'>
                {
                    data.map(song=>{
                    return   <li className='PlaylistModalEachSongContainer' onClick={addPlaylistSongHandler}>
                        <span className='ImgContainer' onclick="event.stopPropagation()"> <img src={song.thumbnailUrl} className='Img-thumbnail' alt='thumbnail'/> </span>
                        <p className='TrackTitle' onclick="event.stopPropagation()" >{song.title.charAt(0).toUpperCase() + song.title.slice(1)} <span class="tooltiptext">{song.title.charAt(0).toUpperCase() + song.title.slice(1)}</span></p>
                    <p className='DurationofSong' onclick="event.stopPropagation()" >{randomTimeGenerator()}</p>  
                    <p className='Singer' onclick="event.stopPropagation()">{faker.name.findName()}</p>   
                    <p className='AlbumName' onclick="event.stopPropagation()">{ albums && albums.map(album =>(
                        (album.id===song.albumId) && album.title 
                    )) }</p>   
                   
                    </li>
                    
                    })
                }
                </ul>

            </ul>
       
        </PlaylistModal>









        
        </>
    )
}


export default SpecificPlaylist
