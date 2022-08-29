import React from 'react'
import "./Text.scss"

export const Text = ({ text, ...props }) => {
  return (
    <p style={{ ...props }}>{text}</p >
  )
}
export default Text