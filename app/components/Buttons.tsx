'use client'

import React from 'react'

function SolidButton({text,RenderFunction}:any) {
  return (
    <button 
    onClick={RenderFunction}
    className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
    {text}
   </button>
  )
}
function SoftButton({text,RenderFunction}:any) {
    return (
      <button
      onClick={RenderFunction}
      className="bg-indigo-200 text-white px-6 py-2 rounded-lg hover:bg-indigo-300">
      {text}
     </button>
    )
  }
  function OutlineButton({text,RenderFunction}:any) {
    return (
      <button
      onClick={RenderFunction}
      className="bg-white text-indigo-600 border-solid border-2 border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-100">
      {text}
     </button>
    )
  }

export  {SolidButton,SoftButton,OutlineButton}