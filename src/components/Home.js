import React, {useContext,useEffect,useState} from 'react'
import {SongsContext} from '../App'
import './Home.css'


function Home() {

    const songs=useContext(SongsContext);

    const [data, setData] = useState(songs);

    const songfilteredData=songs.filter(song=>{
        return song.albumId== 1;
    })


    useEffect(() => {
        setData(songs);
      },[songs]);
  

    useEffect(() => {
        setData(songfilteredData);
      }, []);
  
    



    return (
        <>
        {console.log(data)}
        <p className='ActiveTitle'>Home</p> 
        
        <div className='SearchWrapper'>
            <input type='text' name='searchbar' id='searchbar' placeholder='Search for a song' />
        </div>
    

        <div class="card">
  
            <div class="card_part card_part-one">
            </div>
            
            <div class="card_part card_part-two">
            </div>

            <div class="card_part card_part-three">
            </div>

            <div class="card_part card_part-four">
            </div>

        </div>

      
        <h2 className='HeadingNewlyAdded'>Newly Added</h2>
        <div className='NewlyAddedWrapper'>

            {  data.map(songData=>{
                return <div className='SongCard'>
                    <img src={songData.url} className='NewlyAddedsongImg' alt='image'/>
                    <p className='title'>{songData.title}</p>
                </div>
            })}
        </div>

        <div className='CardWrapper'>
            <div className='CardContainer'>
                <img className='logoincard' src='logo.png' alt='logo'/>
                <h3>Get 3 free Months of VBI Music</h3>
            </div>
            <div className='CardContainer'>
                <h3>5000+ Songs</h3>
            </div>
            <div className='CardContainer'>
                <h3>Cancel Anytime</h3>
            </div>
            <div className='CardContainer'>
                <h3>Music for Every Mood</h3>
            </div>
        </div>
        </>
    )
}

export default Home
