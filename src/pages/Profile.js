import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/profileAction'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
	const {profile} = useSelector(state => state.profReducer)
    const {isLogin} = useSelector(state => state.authReducer)

    useEffect(() => {
        const auth = secureLocalStorage.getItem("auth")
        dispatch(fetchProfile(auth ? auth.access_token : ""))
        .then(res => {
            console.log(profile)
        })
    }, [])

  return (
    <main>
        {
            isLogin ? 
                <div class="container my-5">
                    <div className="card border-0 shadow-lg bg-body-tertiary rounded">
                        <div class="p-5 text-center bg-body-tertiary rounded-3">
                            {/* <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> */}
                            <img src={profile && profile.avatar} alt="" width={200} className="rounded-circle" />
                            <h1 class="text-body-emphasis mb-4 mt-3">{profile && profile.name}</h1>
                            <p class="col-lg-8 mx-auto fs-5 text-muted mt-3">
                            Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                            </p>
                            <div class="d-inline-flex gap-2 mb-5">
                            <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill grid gap-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 512 512"><path fill="#ffffff" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                                Call me
                                {/* <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg> */}
                            </button>
                            <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                                Message Me
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

            : 

            <div class="container my-5">
                <div className="card border-0 shadow-lg bg-body-tertiary rounded">
                    <div class="p-5 text-center bg-body-tertiary rounded-3">
                        {/* <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> */}
                        <img src="https://i.pinimg.com/originals/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.png" alt="" width={200} className="rounded-circle" />
                        <h3 class="text-body-emphasis my-4">You don't have authorizated to access</h3>
                        <p class="col-lg-8 mx-auto fs-5 text-muted mt-3">
                            <code>Please Login</code>
                        </p>
                        <div class="d-inline-flex gap-2 mb-5">
                        <button 
                            onClick={() => navigate("/login")}
                            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Log In
                            {/* <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg> */}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </main>
  )
}