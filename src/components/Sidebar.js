import React from 'react'
import './Sidebar.css'
import SidebarContents from './SidebarContents'
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlbumIcon from '@material-ui/icons/Album';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Router,Link, Switch } from 'react-router-dom';
import Playlists from './Playlists';







function Sidebar() {
    return (
        <>
        
        
         <div className='Sidebar-container'>
         <img alt="timer" className='Img-logo' src='../images/logo.png' />
         <Link to='/' style={{ textDecoration: 'none' }} > 
         <SidebarContents className='SidebarContents' name='HOME' icon={<HomeIcon/>}/>
        </Link>
         {/* <Link to='/browse' style={{ textDecoration: 'none' }} > 
       <SidebarContents className='SidebarContents' name='BROWSE' icon={<SearchIcon/>} />
        </Link>*/}

         <p className='Sidebar-heading'>YOUR LIBRARY</p>
         <hr/>
      {  /* <SidebarContents className='SidebarContents' name='RECENTLY PLAYED' icon={<ScheduleIcon/>} />*/}
         <Link to='/allsong' style={{ textDecoration: 'none' }} > 
         <SidebarContents className='SidebarContents' name='ALL SONGS'  icon={<LibraryMusicIcon/>}/> 
         </Link>
      {  /* <SidebarContents className='SidebarContents' name='FAVORITE SONGS' icon={<FavoriteIcon/>}/>*/}
         <Link to='/album' style={{ textDecoration: 'none' }}> 
         <SidebarContents className='SidebarContents' name='ALBUMS' icon={<AlbumIcon/>}/>
         </Link>
         <p className='Sidebar-heading'>PLAYLIST</p>
         <hr/>
         <div>

         <Playlists/>
         
         
         </div>
         </div>   
     
         
        </>
    )
}

export default Sidebar
