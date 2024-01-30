import linkimage1 from '../../assets/mdi_tick-circle.png'
import linkimage2 from '../../assets/charm_cross.png'
import linkimage3 from '../../assets/Vector 4.png'
import React, { useState } from 'react'
import Analysis from './analysis'
import './analysis.css'

const AnalyticsQuiz = () => {   
    let [shareLinkstate,setshareLinkstate]=useState(false)
    let [deleteLinkstate,setdeleteLinkstate]=useState(false)
    let [editLinkstate,seteditLinkstate]=useState(true)
  
  return (
    <div className='container'>
    <div className='quiz'>Quiz Analysis</div>
{deleteLinkstate&&<div className='deletelinks'>
    <div className='deletee'>
        <div>
            Are you confirm you
        </div>
        <div>
            want to delete ?
        </div>
    </div>
    <div className='deleteee'>
        <button className='confirmdelete'>Confirm Delete</button>
        <button className='canceldelete' onClick={()=>{
            setdeleteLinkstate(!deleteLinkstate)
        }}>Cancel</button>
    </div>

    </div>}

   { shareLinkstate?<div className='link'>
        <img src={linkimage1}></img>
    <div>Link copied to Clipboard</div>
    <img className='image2' src={linkimage2} onClick={()=>{setshareLinkstate(false)}}></img>
    
    
        </div>:''}

<div className="analysis">
    <table>
        <tr className='tablee'>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created On</th>
            <th>Impression</th>
            <th></th>
            <th></th>
        </tr>
        <Analysis setshareLinkstate={setshareLinkstate} shareLinkstate={shareLinkstate} deleteLinkstate={deleteLinkstate} editLinkstate={editLinkstate} setdeleteLinkstate={setdeleteLinkstate} seteditLinkstate={seteditLinkstate}></Analysis>
        
    </table>
    
</div>






   </div>
  )
}

export default AnalyticsQuiz