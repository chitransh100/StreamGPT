import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTEDLANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configLangSlice';
const GenHeader = () => {
    const user = useSelector((store) => {
        return store.user;
    })
    const selectedlang = useSelector(store => store.lang?.lang);
    const { showgpt } = useSelector((store) => {
        return store.gpt;
    })
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLangChange = (e) => { //language change
        dispatch(changeLanguage(e.target.value));
    }
    const handleshowgpt = () => {
        dispatch(toggleGptSearchView())
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            }
            else {
                dispatch(removeUser());
                navigate("/")
            }
        })
        return () => {
            unsubscribe(); //
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handlesignout = () => {
        signOut(auth).then(() => {


        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className='flex justify-between  bg-gradient-to-b from-black absolute w-full z-50'>
            <div className=" md:w-48 md:ml-16 mt-2">
                <img className='cursor-pointer scale-125 md:p-0 w-20 md:w-44 mx-4 my-2 md:scale-100' onClick={() => {
                    dispatch(toggleGptSearchView(false)) //on click it shows home page
                }} src={LOGO_URL} alt={""} />
            </div>

            {user &&
                <div className=' text-xs flex scale-90 md:ml-2 object-contain md:py-2 justify-center items-center'>
                    {showgpt && <select class="ml-6 bg-transparent md:p-2 p-4 text-white outline-none font-semibold" onChange={
                        handleLangChange
                    } value={selectedlang}>
                        {SUPPORTEDLANGUAGES.map((l) => {
                            return <option class="bg-transparent md:text-base text-xs text-black font-semibold" key={l.identifier} value={l.identifier} >{l.name}</option>
                        })}

                    </select>}
                    <button className=' text-white mx-8 md:font-semibold bg-red-600 hover:bg-opacity-75 rounded-lg md:w-32 md:h-10 md:px-5 px-5 p-2 font-thin text-sm' onClick={handleshowgpt}>{showgpt ? "Home" : "GPT Search"}</button>
                    <img className="hidden md:block w-16 m-2 object-contain" src={user?.photoURL} alt="" />
                    <div className='flex md:font-normal text-center flex-col md:pl-0 text-sm pl-6 text-white md:block'>
                        <div className='hidden md:block'>

                            {user?.displayName}
                        </div>

                        <button className=' text-white  text-xs md:p-2 p-1 my-2 md:w-24 md:w-16  w-16 bg-red-600 rounded-lg ' onClick={handlesignout}>Sign Out</button>
                    </div>


                </div>}
        </div>

    )
}

export default GenHeader
