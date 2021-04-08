import React, {useContext,useEffect} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import './CurrentPlaying.css'
import {CurrentSongDetails} from '../App'

function CurrentPlaying() {
    const [CurrentTitle, CurrentTime,CurrentImg, setCurrentTime,setCurrentTitle,setCuttentImg] = useContext(CurrentSongDetails);

    console.log('From Current 1st '+CurrentTitle,CurrentTime)
    return (
        <>
        <div className='CurrentPlaying-container'>
        <div className='CurrentPlayingContents'>
             <img src='unkownAlbum.png' alt='songPlaying' className='CurrentPlayingSong'/>
             <p className='CurrentPlayingSongComponentTitle'>{CurrentTitle.split('<span')[0]}</p>
            <div className='PrevPlayNext'>
                <SkipPreviousIcon className='SkipPrev'/>
                <PlayCircleFilledIcon className='Play'/>
                <SkipNextIcon className='SkipNext'/>
            </div>

            <div className='PlayBar'>
            <span className='TimeSignature start'>{(CurrentTime) ? '0.00' : ''}</span>
            <div className='CurrentPlayCircle'></div>
            <span className='TimeSignature end'>{CurrentTime}</span>
            </div>
            <div className='RepeatShuffleContainer'>
                <RepeatIcon className='RepeatIcon'/>
                <ShuffleIcon className='ShuffleIcon'/>
            </div>
           
        </div>
          
        </div>
            
        </>
    )
}

export default CurrentPlaying
