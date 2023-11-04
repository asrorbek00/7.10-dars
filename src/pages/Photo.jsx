import React, { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import Loading from '../components/Loading'
import {BsSuitHeartFill} from 'react-icons/bs'
import {  FaCalendar } from "react-icons/fa";
import {AiOutlineArrowLeft} from 'react-icons/ai'
function Photo() {
  const { id } = useParams();
  const [url, setUrl] = useState(
    `https://api.unsplash.com/photos/${id}?client_id=WcvV7A0PlFwGT-VVc7BtAkE9ehVFI6NEH-EzBHK64DI`
  );
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  console.log();
  return (
    <>
    {isPending && <Loading/>}
    {!isPending && <div className="lg:mx-36 md:mx-24 sm:mx-6 my-11 bg-slate-400">
      {data && (
        <div>
        <div className="flex gap-4 pt-5 pl-5 pb-5 ">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={data.user.profile_image.small} />
            </div>
          </div>
          <h2 className="mt-3 text-black">{data.user.first_name}</h2>
        </div>
        <div className=" lg:ml-[29%] lg:w-[40%] h-auto sm:w-[65%] sm:ml-[17%] pb-12">
          <img src={data.urls.small} alt="" />
        </div>
        <div className="flex gap-8">
          <span className="flex gap-2"><BsSuitHeartFill size={25} fill="black"/> <p className="text-black">{data.likes}</p></span>
          <span className="flex text-black"><FaCalendar fill="black" size={25}/>:{data.created_at}</span>
        </div>
        </div>
      )}
      <div>
        <button classNameu="btn btn-accent"><AiOutlineArrowLeft size={20}/>  </button>
      </div>
    </div>}
    </>
  );
}

export default Photo;
