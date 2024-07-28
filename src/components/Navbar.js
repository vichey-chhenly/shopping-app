import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'
import { fetchProfile } from '../redux/actions/profileAction'

// shortcut: rfc
export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {profile} = useSelector(state => state.profReducer)
  const {isLogin} = useSelector(state => state.authReducer)
  const {auth} = useSelector(state => state.authReducer)

  useEffect(() => {
    dispatch(fetchProfile(isLogin ? auth.access_token : ""))
  }, [])

  return (
    <header className="bg-white sticky-top">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0 ms-5">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path fill="#0d6efd" d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z"/></svg>
            <a class="navbar-brand px-2 fs-4 fw-bolder">Shopping.</a>
          </Link>
        </div>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 fw-medium">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link px-2 active link-secondary" : "nav-link px-2"}>Home</NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link px-2 active link-secondary" : "nav-link px-2"}>Pricing</NavLink>
          <NavLink to="/faq" className={({isActive}) => isActive ? "nav-link px-2 active link-secondary" : "nav-link px-2"}>FAQs</NavLink>
          <NavLink to="/datatable" className={({isActive}) => isActive ? "nav-link px-2 active link-secondary" : "nav-link px-2"}>DataTable</NavLink>
          <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 active link-secondary" : "nav-link px-2"}>About</NavLink>
        </ul>
      
        <div className="col-md-5 text-end">
          {/* <button 
            type="button" 
            onClick={() => navigate("/create")}
            className="btn btn-outline-primary me-2">Insert</button> */}
            
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => isLogin ? dispatch(logout()) : navigate("/login")}
          >
            {
              isLogin ? "Logout" : "Log In"
            }
          </button>
        </div>

        <div className='me-5'>
        <NavLink 
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            } 
            to={"/profile"}>
            <img 
              src={isLogin ? profile.avatar : "https://i.pinimg.com/originals/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.png"}
              alt="" 
              width={40} 
              className="rounded-circle mx-3 my-2" />
        </NavLink>
        </div>

      </div>
    </header>
  )
}


