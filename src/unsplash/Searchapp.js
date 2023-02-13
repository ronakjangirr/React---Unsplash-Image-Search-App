import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Bg from './Bg.css';

function Searchapp() {
    let [photo, setphoto] = useState("");
    let [hello, sethello] = useState([]);

    useEffect(() => {
    }, [changephoto])

    async function changephoto() {
        await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=eaAdzbB980wsGl4h5MUkSOqnw8N8ldUrXA-j0q2hznk`)
            .then((res) => {
                console.log(res.data)
                sethello(res.data.results)
            })
    }


    return (
        <>

            <div className='head-style'>
                <h1 className='font-style'>Unsplash Image Search App</h1>
            </div>
            <div className='div-style1'>
                <Form.Group className="mb-3">
                    <Form.Label className='font-style2'>Search Image</Form.Label>
                    <Form.Control className='shadow' type="text" placeholder="Image Name" value={photo} onChange={(e) => setphoto(e.target.value)} />
                </Form.Group>
                <Button type="submit" className='shadow' variant="outline-dark" onClick={changephoto}>Get Photos</Button>
            </div>

            {
                hello.map((value) => {
                    return (
                        <>
                        <div style={{display:"flex", justifyContent:"space-around", width:"100%" ,height:"100%", margin:"20px"}}>                            
                                <img variant="top" src={value.urls.small} />                            
                        </div>
    
                        </>
                    )
                })

            }
        </>
    )
}

export default Searchapp;