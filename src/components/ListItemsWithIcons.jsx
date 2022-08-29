import React from 'react'
import "./ListItemsWithIcons.scss"

const ListItemsWithIcons = ({ items }) => {
  return (
    <>
      {items.map((item, index) =>
        <a href={item.type ? item.type + ":" + item.url : item.url} target="_blank" key={index}>  <i className={item.icon}></i> {item.short}
        </a>
      )
      }
    </>
  )
}

export default ListItemsWithIcons