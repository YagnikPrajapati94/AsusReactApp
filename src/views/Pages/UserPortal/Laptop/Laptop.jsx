import React, { useEffect, useState } from 'react'
import UserLayout from '../UserLayout'
import axios from 'axios'
import toast from 'react-hot-toast'

const Laptop = () => {
    const [product, setproduct] = useState([])
    const [search, setsearch] = useState("")
    const fetchproduct = async()=> {
        try {
            const productapi = await axios.get("http://localhost:3000/product")
            setproduct(productapi.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    const hanldeCart = async (id) => {
        try {
            const selectedProduct = product.find(prd => prd.id === id);
            if (!selectedProduct) {
                console.log("Product not found");
                return;
            }
            const username = JSON.parse(localStorage.getItem("username")) || ""
            // console.log(username);
            
            const productWithUser = {
                ...selectedProduct,  // Spread the selected product data
                username: username   // Add the username to the data
            };
    
    
            const cartapi = await axios.post(`http://localhost:3000/cart`, productWithUser);
            toast.success('Successfully Cart!')
            location.reload()
            // console.log("Added to cart:", cartapi.data);
        } catch (error) {
            console.log("Error adding to cart:", error);
        }
    };

    useEffect(() => {
        fetchproduct()
    }, [])

    // searching 
    const handleSearch = (e) => {
        const data = e.target.value
        setsearch(data)

    }
    // dropdown 
    const handleType = (e) => {
        const data = e.target.value
        setsearch(data)
    }
    // filtering 
    const filterproduct = product.filter((item) => {
        const fullText = `
            ${item.modal}
            ${item.processor}
            ${item.ramsize}
            ${item.ramtype}
            ${item.storagesize}
            ${item.storagetype}
            ${item.graphic}
            ${item.windows}
        `.toLowerCase();
    
        return fullText.includes(search.toLowerCase());
    });
    
    
    return (
        <>
            <UserLayout>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-center  pt-5">
                            <div className="col-lg-6">
                                <input type="text" placeholder='Search' className='form-control shadow-none' onChange={handleSearch} />
                            </div>
                            <div className="col-lg-6">
                                <select name="laptoptype" className='form-control shadow-none' id="laptoptype" onChange={handleType} required>
                                    <option disabled selected value="">Select Laptop Type</option>
                                    <option value="">ALL Laptop</option>
                                    <option value="Zenbook">Zenbook (Premium / Business)</option>
                                    <option value="VivoBook">VivoBook (Everyday / Student)</option>
                                    <option value="ROG">ROG - Republic of Gamers (High-end Gaming)</option>
                                    <option value="TUF">TUF Gaming (Budget Gaming)</option>
                                    <option value="ExpertBook">ExpertBook (Business / Lightweight)</option>
                                    <option value="ProArt">ProArt StudioBook (Creatives / Design)</option>
                                    <option value="Chromebook">Chromebook (Web-based / Budget)</option>
                                </select>
                            </div>
                        </div>
                        <div className="row py-5">
                            {/* <div className="col-12">
                                <p className='fs-4 text-center'>All Laptop</p>
                            </div> */}
                            {
                                product.length > 0 ? (
                                    filterproduct.map((prd)=> {
                                        return (
                                            <div className="col-lg-3 my-lg-0 my-3" key={prd.id}>
                                            <div className="card" >
                                                <img src={prd.url} className="card-img-top  w-75 mx-auto  img-fluid"  alt="..."/>
                                                    <div className="card-body px-4">
                                                        <h5 className="card-title fs-5">{prd.modal}</h5>
                                                        <div className='d-flex mb-3 border-top border-bottom py-2 border-warning border-opacity-25 '>
                                                            <p className='m-0 fs-5 text-decoration-line-through text-secondary'>₹{prd.mrp }</p>
                                                            <p className='m-0 fs-5 text-warning ps-2'>₹{prd.price}</p>
                                                        </div>
                                                        <ul className='text-secondary small ps-3'>
                                                            <li>{prd.processor}</li>
                                                            <li>{prd.ramsize}GB,{prd.ramtype}</li>
                                                            <li>{prd.storagesize}GB,{prd.storagetype}</li>
                                                            <li>{prd.graphic}</li>
                                                            <li>{prd.windows}</li>
                                                        </ul>
                                                        <a href="#" className="btn btn-primary" onClick={()=>hanldeCart(prd.id)}>Add To Cart</a>
                                                    </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                ) : (
                                 <p>No Data Found</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    )
}

export default Laptop
