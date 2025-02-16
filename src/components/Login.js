import React, { useRef, useState } from 'react'
import Header from './Header'
import { validatelogin } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BGURL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setisSignIn] = useState(true);
    const [errMessage, seterrMessage] = useState("");
    //validating login
    const email = useRef(null); //returns object
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignIn = () => {
        setisSignIn(!isSignIn);
    }
    const chkinput = () => {
        const message = validatelogin(email.current.value, password.current.value, name?.current?.value);

        seterrMessage(message);
        if (message)
            return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                        bloogGroup: "B"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })) //dispatching again after adding username
                    }).catch((error) => {
                        seterrMessage("Error")
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + " " + errorMessage)
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + " " + errorMessage)
                });
        }

    }
    return (
        <div >
            <Header />
            <div className="bg-gradient-to-l from-black absolute z-[-2] brightness-50"><img className='w-screen object-cover md:object-fill h-screen ' src={BGURL} alt="" /></div>

            <form onSubmit={(e) => {
                e.preventDefault();
            }} className='md:scale-100 scale-90 absolute bg-black p-12 text-white md:w-3/12 right-0 md:text-base text-xs left-0 my-28  h-5/12 m-52 mx-auto bg-opacity-75'>
                <h1 className=' text-3xl font-semibold '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" ref={name} placeholder='Full Name' className='p-3 my-4 w-full bg-gray-700' />}
                <input type="text" ref={email} placeholder='Email Address' className='p-3 my-4 w-full bg-gray-700' />
                <input type="password" ref={password} placeholder='Password' className='p-3 my-4 w-full bg-gray-700' />
                <p className=' text-red-600 font-semibold'>{errMessage}</p>
                <button className=' font-semibold p-2 my-4 w-full mx-auto m-2 bg-red-700 rounded-lg' onClick={chkinput}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className=' cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up!" : "Already Registered? Sign In"}</p>
            </form>

        </div >
    )
}

export default Login
