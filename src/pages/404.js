import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFounds from './../lotties/Animation - 1722179121360.json' 
import { useLottie } from 'lottie-react';

export default function NotFound() {
    // const options = {
    //   animationData: notFounds,
    //   loop: true
    // };

    // const { View } = useLottie(options);

    // const containerStyle = {
    //   width: '600px',
    // };

    // const lottieStyle = {
    //   width: '100%',
    //   height: '100%',
    // };

    const navigate = useNavigate()
  return (
    <main >
      {/* <section style={containerStyle}>
        <div style={{lottieStyle}}>
          {
            View
          }
        </div>
      </section> */}
        <div className="p-5 text-center rounded-3">
          <div>
            <img src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png' 
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 mx-auto fs-5" 
            alt='Page NotFound'/>
          </div>
          <div className="mt-5">
            <button 
                onClick={() => navigate("/")}
                className="d-inline-flex align-items-center btn btn-primary btn-lg gap-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                Back to Home
            </button>
          </div>
        </div>
    </main>
  )
}
