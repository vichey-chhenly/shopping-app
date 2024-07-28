import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { searchProduct } from '../services/productAction';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate()
    // declare state product
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Photos',
            selector: row => <img src={row.images[0]} alt="product" style={{width: '50px'}}/>,
        },
        {
            name: 'Action',
            selector: row => <button type="button" 
                onClick={() => navigate("/edit", {
                    state: row
                })}
                className="btn btn-outline-primary"
                >Edit</button>
        }
    ];
    
    useEffect(() => {
        searchProduct(search).then(resp => setProducts(resp))
    }, [search])

  return (
    <main className='container'>

        <section>
            <div className='d-flex flex-wrap align-items-center justify-content-md-between py-2 border-bottom'>
            <h4>Insert New Product</h4>
            <button 
                type="button" 
                onClick={() => navigate("/create")}
                className="btn btn-primary text-end">
                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' height="0.8em" viewBox="0 0 512 512"><path fill="#ffffff" d="M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z"/></svg>
                Insert
            </button>
            </div>
        </section>

        <section className='mt-3'>
            <DataTable 
                columns={columns}
                data={products}
                pagination
                subHeader
                subHeaderComponent={
                    <input type="text" 
                        placeholder='search here' 
                        className='form-control'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            console.log(search)
                        }}
                    />
                }
            />
        </section>
    </main>
  )
}
