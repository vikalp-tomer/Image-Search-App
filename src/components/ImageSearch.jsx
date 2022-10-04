import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }
  return (
    <div>
        <form action="" onSubmit={onSubmit}>
            <div>
                <input onChange={e=>setText(e.target.value)} className='border-2 border-black' type="text" />
                <button type="submit">Search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch