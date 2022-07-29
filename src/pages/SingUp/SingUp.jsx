import React from 'react'

function SingUp() {
    const hendleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div className="login">
      <div className="container-form">
            <form action="" onSubmit={(e)=>hendleSubmit(e)}>
      <h1>Sing-up</h1>
      <div className="grid-container">
        <div className='con-name'>
          <input type="text" placeholder='Name' required />
          <input type="text" placeholder='Lastname' required/>
        </div>
        <input type="text" placeholder="username" required/>

        <input type="password" placeholder="password" required />

        <input type="password" placeholder="Confirm-Password" required />
      </div>
      <div className="btn">
        <input type='submit' value='Register' className="submit"/>
        </div>
    </form>
      </div>

  </div>
  )
}

export default SingUp