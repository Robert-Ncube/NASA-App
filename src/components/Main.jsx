import React from 'react'

const Main = (props) => {
  const { data, showModel } = props
  return (
    <div className='imgContainer'>

      {data?.media_type === 'image' ? (
        <img src={data?.url} alt={data?.title || 'backgroung Image'} className='bgImage'
        />
      ) : data?.media_type === 'video' ? (
        <iframe
          src={data?.url}
          title={data?.title || 'Video'}
          className='bgVideo'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        <div className='noMedia'>
          <h2>Unsupported media type</h2>
        </div>
      )}
    </div>
  )
}

export default Main