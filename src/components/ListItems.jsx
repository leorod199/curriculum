import React from 'react'
import "./ListItems.scss"
const ListItems = ({ Items }) => {
  return (
    <ul className='Items'>
      {Items.map(item => <li className='item' key={item}>{item}</li>)}
    </ul>
  )
}

export default ListItems