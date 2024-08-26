import React from 'react'

const Sidebar = (props) => {
  const { toggleModel, data } = props
  return (
    <div className='sidebar'>
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <p className='description'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={() => toggleModel()}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Sidebar