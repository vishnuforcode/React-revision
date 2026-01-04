import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <header className="container-fluid p-4 shadow lg ">
        <div className="container ">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-4 col-md-12 d-flex justify-content-between">
                    
                        
                            <NavLink to={'/'}>Home</NavLink>
                        
                            <NavLink to={'about'}>About</NavLink>
                       
                            <NavLink to={'counter'}>Counter</NavLink>
                        
                            <NavLink to={'customhooks'}>CustomHooks</NavLink>
                        
                   
                </div>
                <div className="col d-flex justify-content-center justify-content-lg-end mt-sm-3 mt-lg-0">
                    <input type="text" placeholder='Ctrl+K' />
                </div>
            </div>
        </div>
    </header>
            
    
    </>
  )
}

export default Header
