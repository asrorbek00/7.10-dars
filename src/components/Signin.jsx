import React, { useState } from "react";
import { logOut, signInWithGoogle } from "../firebase/firebaseconfig";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser  } from "../redux/features/unsplashSlice";

function Signin() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.unsplash);

  const signIn = () => {
    signInWithGoogle()
      .then((user) => {
        dispatch(addUser(user.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logoutUser = ()=>{
    logOut()
    dispatch(removeUser())
  }

  return (
    <div className="ml-4 ">
      {!user ? (
        <button className="btn btn-accent" onClick={signIn}>
          Sign In
          <span>
            <FcGoogle />
          </span>
        </button>
      ) : (
        <>
          <div className="avatar ">
            <div className="w-8 rounded-full">
              <img
                src={user.photoURL}
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              />
            </div>
            <h2 className="ml-2 mt-2 user">{user.displayName}</h2>
          </div>
        </>
      )}
      {user && 
      <dialog id="my_modal_2" className="modal">
      <div>
      </div>
        <div className="modal-box">
        <img src={user.photoURL} alt=""/>
       
          <h3 className="font-bold text-lg mt-5">{user.displayName}</h3>
          <p className="py-4"></p>
          <button className="btn bg-red-500" onClick={logoutUser}>Log Out</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>}
    </div>
  );
}

export default Signin;
