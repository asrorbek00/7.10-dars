
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider , signInWithPopup, signOut} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCNi5H2PegkTDe_Q66fLoA0qoHp9Joj0no",
  authDomain: "unsplash-photos-d07ee.firebaseapp.com",
  projectId: "unsplash-photos-d07ee",
  storageBucket: "unsplash-photos-d07ee.appspot.com",
  messagingSenderId: "1060760628834",
  appId: "1:1060760628834:web:453aacff5df99593a5ab3b",
  measurementId: "G-3T70042BFE"
}; 


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider()

 export const signInWithGoogle = async ()=>{
    try {
        const result = signInWithPopup(auth,provider)
        return result
    } catch (error) {
        return error
    }
}

export const logOut = ()=>{
    signOut(auth)
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error)
    })
}
