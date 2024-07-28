import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllProducts } from '../redux/actions/productActions'

export default function Home() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.prodReducer)

    // declare local state
    // const [products, setProducts] = useState([])
    // const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [])
  return (
    <>
    <main className='container'>

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded-3">
          <div class="carousel-item active">
            <img src="https://houseoffashions.lk/cdn/shop/files/Covers_1.png?v=1719399557&width=1920" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://houseoffashions.lk/cdn/shop/files/Covers_2.png?v=1719399564&width=1920" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://houseoffashions.lk/cdn/shop/files/Covers_4.png?v=1719399576&width=1920" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* 
        condition ? express_1 : expression_2 
      */}
      <h4 className='mt-5 mb-4 pb-2 border-bottom'>All Product</h4>
      <div className='row g-3'>
        {
          isLoading ? 
          
          <>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <LoadingView />
            </div>
          </>
          
          : products.map((product) => (
            <div 
              key={product.id}
              className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <Link 
                to={`/read/${product.id}`}
                className='text-decoration-none'
              >
                <Card 
                  imageURL={product.images[0]}
                  price={product.price}
                  title={product.title}
                  // desc={product.description}
                />
              </Link>
            </div>
          ))
        }
      </div>
      
      <div className='d-flex justify-content-center mt-5 grid gap-2'>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </main>
  </>
  )
}
