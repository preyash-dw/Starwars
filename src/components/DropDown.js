import React from 'react'
import {AiOutlineEye,AiOutlineDownload,AiOutlineShareAlt} from "react-icons/ai"
import {MdDriveFileRenameOutline,MdOutlineDriveFileMoveRtl} from "react-icons/md"
import {BsBag} from "react-icons/bs";

import {RiDeleteBin5Line} from "react-icons/ri"

const DropDown = ({handleSide,handleCloseDropdown }) => {
  return (
    <div>
      <div className="dropdown">
        <a style={{width:"100%"}} onClick={()=> {handleSide(true);
        handleCloseDropdown();}}><AiOutlineEye style={{backgroundColor:"white"}}/> View</a>
        <a style={{width:"100%"}}><AiOutlineDownload style={{backgroundColor:"white"}}/>Download</a>
        <a style={{width:"100%"}}><MdDriveFileRenameOutline style={{backgroundColor:"white"}}/>Rename</a>
        <a style={{width:"100%"}}><AiOutlineShareAlt style={{backgroundColor:"white"}}/>Share</a>
        <a style={{width:"100%"}}><MdOutlineDriveFileMoveRtl style={{backgroundColor:"white"}}/>Move</a>
        <a style={{width:"100%"}}><BsBag style={{backgroundColor:"white"}}/>Mark Private</a>
        <a style={{width:"100%",color:"red"}}><RiDeleteBin5Line style={{backgroundColor:"white"}}/>Delete</a>
      </div>
    </div>
  )
}

export default DropDown
