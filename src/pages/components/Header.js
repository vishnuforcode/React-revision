import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <header className="container-fluid p-4 shadow lg " style={{backgroundColor:'#010409'}}>
        <div className="container ">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-4 col-md-12 d-flex justify-content-even gap-3">
                    
                        
                            <NavLink className='text-decoration-none h5 active '  style={{color:'white'}} to={'/'}>GitHub-Finder</NavLink>
                        
                            {/* <NavLink  className='text-decoration-none h5' style={{color:'white'}} to={'about'}>About</NavLink> */}
                       
                            {/* <NavLink  className='text-decoration-none h5' style={{color:'white'}} to={'counter'}>Counter</NavLink> */}
                        
                            <NavLink  className='text-decoration-none h5' style={{color:'white'}} to={'customhooks'}>Currecny Converter</NavLink>
                        
                   
                </div>
                <div className="col d-flex justify-content-center justify-content-lg-end mt-sm-3 mt-lg-0">
                    <input type="text" className='input search' placeholder='Ctrl+K' style={{backgroundColor:'#010409', border:'1px solid gray', borderRadius:'7px'}} />
                </div>
            </div>
        </div>
    </header>
            
    
    </>
  )
}

export default Header
