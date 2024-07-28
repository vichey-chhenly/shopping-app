import React from 'react'

export default function LoadingView() {
  return (
    <div class="card" aria-hidden="true">
        <img src="https://openseauserdata.com/files/49499cddba4d6d445125043f2592eb7b.png" class="card-img-top" alt="placholder images"/>
        <div class="card-body">
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6 bg-danger"></span>
            </h5>
            
        </div>
    </div>
  )
}