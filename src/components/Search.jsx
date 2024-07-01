import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className="user-chat">
        <img src="https://media.licdn.com/dms/image/D4D03AQFt0Phvs79Lvg/profile-displayphoto-shrink_200_200/0/1712508041785?e=2147483647&v=beta&t=TV9CggKT-83KBKn0QLsRisVdJTZreKgmrecOsuHjabQ" alt="" />
        <div className='chat-info'>
          <span>Pesho</span>
        </div>
      </div>
    </div>
  )
}

export default Search