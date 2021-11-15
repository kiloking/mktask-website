import React from 'react'

function SidebarOption({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active&& 'siebarOption_active'}`}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
