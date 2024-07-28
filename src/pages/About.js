import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'
import developer from './../lotties/animation_lldk77.json'
import { useLottie } from 'lottie-react';


export default function About() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)

  const options = {
    animationData: developer,
    loop: true
  };
  const { View } = useLottie(options);

  useEffect(() => {
      // subscribe to store
      dispatch(fetchAllProducts())
  }, [])
  return (
    <main >
      <div className='container col-xxl-8 px-4 p-3 rounded-4'>
        <div className="d-inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
          <h6 class="navbar-brand px-2 fs-4">What is Shopping.?</h6>
        </div>
        <p className='fs-5'>Shopping. is a noteworthy science and technology center in Cambodia. Shopping. has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. Shopping. will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.</p>
        <div className='py-5 text-center'>
          <div className="d-inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="3.5em" viewBox="0 0 448 512"><path fill="#0d6efd" d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z"/></svg>
            <a class="navbar-brand px-2 fs-1 fw-bolder">Shopping.</a>
          </div>
        </div>
      </div>

        <section class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Brand your pictures with the free watermark and generate your documents with the better solution</h1>
              <p class="lead">Level up your content with customizable watermarks and create stunning
                certificates effortlessly on our website.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Getting Started</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Go Back</button>
              </div>
            </div>
          </div>
        </section>
        <section className='container partner'>
            <p className='text-center fs-2'>Trusted by designers & developers from over companies worldwide</p>
            <div className='d-flex flex-wrap w-75 justify-content-center m-auto'>
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Google_13d1bebc3a.svg?updated_at=2023-02-01T09:30:58.652Z" alt="google" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Disney_9326063989.svg?updated_at=2023-02-01T09:35:39.701Z" alt="disney" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Duolingo_f8ada51f7b.svg?updated_at=2023-02-01T09:36:51.939Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Uber_d1b19ee87f.svg?updated_at=2023-02-01T09:35:39.735Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/instacard_new_b1fa17db81.svg" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Grab_2339109ee6.svg?updated_at=2023-02-01T09:35:39.529Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Netflix_9c7d33db41.svg?updated_at=2023-02-01T09:35:39.412Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Microsoft_78d3346119.svg?updated_at=2023-02-01T09:35:39.737Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Airbnb_4c9a6209d1.svg?updated_at=2023-02-01T09:35:39.532Z" alt="" />
            </div>
        </section>

        <section class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              {
                View
              }
              {/* <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lightweight, scalable animations for your ads and social media</h1>
              <p class="lead text-muted">LottieFiles takes away the complexity from motion design. It lets you create, edit, test, collaborate and ship a Lottie in the easiest way possible.</p>
              
            </div>
          </div>
        </section>

        <section className='container'>
            <h2 className='text-center fs-1 text-uppercase fw-bold'>Motion design made easy</h2>
            <div className='w-75 m-auto mt-5'>
              <img className='w-100' src="https://framerusercontent.com/images/CdX873RJfHUZ4CiIH3kyRyHPDc.png" alt="" />
            </div>
        </section>

    </main>
  )
}

