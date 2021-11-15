import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon/>
      <SidebarOption Icon={HomeIcon} text="Home"/>
      <Button className="sidebarOption_post" variant="text">Post One</Button>
    </div>
  )
}

export default Sidebar
