import { Link } from 'react-router-dom';
import blacklogo from '../../public/blacklogo.png'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState,useEffect,useReducer,useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {Blurcontext} from "../main"
export default function Navbar({projects,contact,dispatch,list}){
    const { work, setWork,pageexist,setPageexist } = useContext(Blurcontext);
    const [menu,setMenu]=useState(false)
    return(
        <section className={`flex w-full justify-between items-center fixed p-8 z-50 ${(work || pageexist!==null) && 'blur-xs'} ${menu ? 'bg-none' : 'bg-gray-100 transition-colors delay-1000'}`}>
            <img src={blacklogo} className={`w-15 ${menu ? 'opacity-0' : 'opacity-100 transition-opacity delay-1000'}`} loading='lazy'/>
            <ul className={`list flex justify-between w-[60%] font-[500] items-center transition-[right] duration-1000 
                ${menu ? 'right-0' : 'right-[-200%]'} max-[900px]:w-[400px] max-[550px]:w-[75%] z-50`}>
                <Link to='/' onClick={()=>{scrollTo({top:0,behavior:'smooth'});dispatch({type:'home'});setMenu(false)}} 
                className={`px-4 py-3 rounded-2xl ${list.name==='home' && 'bg-yellow-300'}`}>HOME</Link>
                <Link onClick={()=>{scrollTo({top:0,behavior:'smooth'});dispatch({type:'about'});setMenu(false)}} to="/about" className={`p-3 rounded-2xl ${list.name==='about' && 'bg-yellow-300 text-gray-900'}`}>ABOUT</Link>
                <Link to='/skills' onClick={()=>{scrollTo({top:0,behavior:'smooth'});dispatch({type:'skills'});setMenu(false)}} className={`p-3 rounded-2xl ${list.name==='skills' && 'bg-yellow-300 text-gray-900'}`}>SKILLS</Link>
                <Link to='/services' onClick={()=>{scrollTo({top:0,behavior:'smooth'});dispatch({type:'services'});setMenu(false)}} className={`p-3 rounded-2xl ${list.name==='services' && 'bg-yellow-300 text-gray-900'}`}>SERVICES</Link>
                <Link to='/' onClick={()=>{setTimeout(()=>{projects.current.scrollIntoView({ behavior: "smooth" });},100);dispatch({type:'projects'});setMenu(false)}}
                className={`p-3 rounded-2xl ${list.name==='projects' && 'bg-yellow-300 text-gray-900'}`}>PROJECTS</Link>
                <li onClick={()=>{contact.current.scrollIntoView({behavior:'smooth'});dispatch({type:'contact'});setMenu(false)}}
                    className={`p-3 rounded-2xl cursor-pointer ${list.name==='contact' && 'bg-yellow-300 text-gray-900'}`}>CONTACT</li>
                {menu && <IoClose className={`close absolute top-8 right-8 z-50 text-2xl ${menu ? 'block' : 'hidden'}`} onClick={()=>{setMenu(false)}}/>}
                {menu && <img src={blacklogo} className='absolute top-8 left-8 w-15'/>}
            </ul>
            <div className='flex items-center gap-10'>
              <button className={`bg-gray-900 text-white p-3 rounded-2xl ${menu ? 'opacity-0' : 'opacity-100 transition-opacity delay-1000'}`} onClick={()=>{setWork(true)}} >L'ets work</button>
              <TiThMenu className={`menu hidden text-2xl ${menu ? 'opacity-0' : 'opacity-100 transition-opacity delay-1000'}`} onClick={()=>{setMenu(true)}}/>
            </div>

        </section>
    )
}