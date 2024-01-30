import React, { useEffect, useState } from 'react'
import editicon from '../../assets/Vector (1).png'
import deleteicon from '../../assets/Vector (2).png'
import shareicon from '../../assets/Vector (3).png'
import { Link } from 'react-router-dom'

const Analysis = ({setshareLinkstate,shareLinkstate,deleteLinkstate,setdeleteLinkstate,seteditLinkstate,editLinkstate}) => {
    
    let [quizname,setquizname]=useState('Quiz 1')
    let [quiznumber,setquiznumber]=useState('1')
    let [created,setcreated]=useState('01 sep 2024')
    let [impression,setimpression]=useState('345')
    let [editLink,seteditLink]=useState('')
    let [shareLink,setshareLink]=useState('')
    let [deletelink,setdeletelink]=useState('')
    useEffect(()=>{
        

    },[])
    
  return (
    <>

<tr className='analysiscontainer'>
            <td className='border-slate-400'>{quiznumber}</td>
            <td>{quizname}</td>
            <td>{created}</td>
            <td>{impression}</td>
            <td className='tableimage'>
                <img src={editicon} onClick={()=>{
                    seteditLinkstate(true)
                }}alt='image'></img>
                <img src={deleteicon} onClick={()=>{
                    //   console.log(setdeleteLinkstate);
                    setdeleteLinkstate(true)
                }} alt='image'></img>
                <img src={shareicon} onClick={()=>{setshareLinkstate(!shareLinkstate)}} alt='image'></img>
            </td>
            <td><div className='questionsshare'><Link to="/:quizId">Question Wise Analysis</Link></div></td>
        </tr>
        
    </>
  )
}

export default Analysis