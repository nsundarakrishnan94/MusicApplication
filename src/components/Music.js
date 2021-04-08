import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Music() {
    const [albums, setAlbums]= useState([])
    const [photos, setPhotos]= useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response=> setAlbums(response.data))
      .catch(error=> console.log('Incorrect URL'))
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=> setPhotos(response.data))
        .catch(error=> console.log('Incorrect URL'))
      })


    return (
        <div>
           <ul>
           {
               albums.map(album=>(
                   <li key={album.id}>{album.title}</li>
                   ))
        }
    </ul> 

         
        </div>
    )
}

export default Music
