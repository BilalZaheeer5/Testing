import React from 'react'
import ReactDOM from "react-dom"
export default function Model() {
  return ReactDOM.createPortal(
    <div>
      hello world
    </div>
  ,document.querySelector('.modelContainer'))
}
