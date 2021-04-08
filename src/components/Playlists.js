import React,{useState} from 'react'
import Modal from './Modal'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Playlists.css'
import { Link } from 'react-router-dom';

function Playlists() {

    const dataPlaylist=[
      {
        id:1,
        name:"Carnatic",
        playlist:[]
      },
      {
        id:2,
        name:"Pop",
        playlist:[]
      }
    ]

    const [Playlists, setPlaylists] = useState([])
    const [isModalOpen,setisModalOpen]=useState(false);
    const [modalInputName, setmodalInputName]=useState('')
    const [updateddataPlaylist,setupdateddataPlaylist]=useState(dataPlaylist);
    // const [Name, setName]=useState('')
    

   
  
      const modalOpen = () => {
        console.log('hiiii')
        setisModalOpen(true) 
      }
    
   
      const modalClose=() => {
        setisModalOpen(false);
      }

      const handleChange =(e)=> {
        const value = e.target.value;
        setmodalInputName(value);
      }

      
      const handleSubmit=(e)=> {
        setmodalInputName(modalInputName);
        modalClose();
        console.log(modalInputName)
        setupdateddataPlaylist(modalInputName);
      }

    return (
        <>
      
        {updateddataPlaylist.map(playlistCategory=>{
          return (
            <Link to={`/playlists/${playlistCategory.name}`}>
            <p className='PlaylistItems'>{playlistCategory.name}</p>
            </Link>
            )
        })}


        <button className='CreatePlaylistbtn' onClick={modalOpen}><AddCircleOutlineIcon/> CREATE PLAYLIST</button>
           
        <Modal 
        open={isModalOpen}
        handleClose={modalClose}>
        <form >
     

        <div className="ContentWrapper">
        <span className="ModalTitle">Create New Playlist</span>
          <input
            className='txtplaylistName'
            type="text"
            placeholder="My Playlist Name..."
            value={modalInputName}
            onChange={handleChange}
            required
          />

          <br />

          <button className='modalbtn' type="submit" onSubmit={handleSubmit}>Create</button>
        </div>
      </form>
        </Modal>
        </>
    )



}



export default Playlists

