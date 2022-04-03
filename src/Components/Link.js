import React from 'react'
import '../App.css'

function Link(props) {
  return (
    <div>
        <a href={props.linkUrl} className={props.myClass} title={props.linkFace}>{props.linkText}</a>
    </div>
  )
}

export default Link