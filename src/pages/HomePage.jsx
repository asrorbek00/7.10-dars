import React, { useState } from 'react'
import { useFetch } from '../hook/useFetch'

import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

function HomePage() {
  const [page , setPage] = useState(1)
    const [url , setUrl] = useState(`https://api.unsplash.com/search/photos?client_id=WcvV7A0PlFwGT-VVc7BtAkE9ehVFI6NEH-EzBHK64DI&page=${page}&query=featured`)
    const [input , setInput] = useState('featured')
   
    const {data, isPending , error} = useFetch(url)
    const getVal = (e)=>{
        setInput(e.target.value)
    }

    const search = (e)=>{
     e.preventDefault()
     setUrl(`https://api.unsplash.com/search/photos?client_id=WcvV7A0PlFwGT-VVc7BtAkE9ehVFI6NEH-EzBHK64DI&page=${page}&query=${input}`)
    }
    const pageMinus = ()=>{
      if(page >1){
        setPage(page - 1)
      }
      setUrl(`https://api.unsplash.com/search/photos?client_id=WcvV7A0PlFwGT-VVc7BtAkE9ehVFI6NEH-EzBHK64DI&page=${page}&query=${input}`)
      
    }
    const pagePlus = ()=>{
      setPage(page  + 1)
      setUrl(`https://api.unsplash.com/search/photos?client_id=WcvV7A0PlFwGT-VVc7BtAkE9ehVFI6NEH-EzBHK64DI&page=${page}&query=${input}`)
     
    }

  return (
     <>
     {isPending && <Loading/>}
     {!isPending && 
     <div>
     <div className='flex gap-3 lg:mx-36 sm:mx-12 mt-11 md:mx-24'>
       <form onSubmit={search}>
       <input 
       onChange={getVal}
       value={input}
        type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
       </form>
       <button className='btn btn-accent'onClick={search} >Search</button>
       </div>
       <div className='grid gap-4 my-24 lg:grid-cols-3 lg:mx-36 sm:grid-cols-1 sm:mx-12 md:grid-cols-2 md:mx-24'>
       {data && data.results.map((photo)=>{
        return  <div key={photo.id} >
        <Link to={`/${photo.id}`}>
          <img src={photo.urls.small} alt="" />
          </Link>
        </div>
       })}
       </div> 
       <div className="join lg:ml-[45%] md:ml-[40%] sm:ml-[35%]" >
  <button className="join-item btn" onClick={pageMinus}>«</button>
  <button className="join-item btn">{page}</button>
  <button className="join-item btn" onClick={pagePlus}>»</button>
</div>
     </div>
     }
     
    </>
  )
}

export default HomePage