import { useRef, useState } from 'react';
import './scss/productform.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import log from '../../util/Log';
import Request from '../../Api/Axios';

const ProductForm = () => {
    const [productName, setProductName] = useState("")
    const [briefDescription, setBriefDescription] = useState("")
    const [cost, setCost] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const productImageRef = useRef(null)
    const imageInputRef = useRef(null)
    const imageRef = useRef(null)
    const handleSubmit = async () => {
        const data = {
            title: productName,
            briefDescription: briefDescription.toString(),
            description: description,
            cost: cost,
            salePrice: price,
            image: productImageRef.current.files[0]
        }
        log("product info", data)
        const formData = new FormData()
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
        }
        // for (const pair of formData.entries()) {
        //     log(undefined, `${pair[0]}: ${pair[1]}`);
        // }
        const res = await Request("/products", "POST", false, undefined, { "content-type": "multipart/form-data" }, data)
        // const res = await Request("/products", "POST", true, undefined, {}, formData);

        log("add product", res)
    }
    const showImage = () => {
        log("input image", productImageRef.current.files[0])
        const file = productImageRef.current.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                imageRef.current.setAttribute("src", e.target.result)
                imageRef.current.classList.add("visible")
                imageInputRef.current.classList.add("hidden")
            }
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className="add-product-form">
            <div className="container">
                <div className="flex2 header">
                    <div className="image-input">
                        <input type="file" name="product-image" ref={productImageRef} onChange={showImage} accept="image/*" />
                        <p ref={imageInputRef}>Click To Add Image</p>
                        <img src="" alt="product image" ref={imageRef} />
                    </div>
                    <div className="info">
                        <label htmlFor="product-name full">
                            <span className="title">product name</span>
                            <input type="text" name="product-name" value={productName} onChange={e => { setProductName(e.target.value) }} />
                        </label>
                        <label htmlFor="brief-description full">
                            <span className="title">brief description</span>
                            <textarea name="brief-description" value={briefDescription} onChange={e => { setBriefDescription(e.target.value) }} />
                        </label>
                        <div className="flex2 cost-category">
                            <label htmlFor="cost">
                                <span className="title">cost</span>
                                <input type="text" name="cost" value={cost} onChange={e => { setCost(e.target.value) }} />
                            </label>
                            <label htmlFor="sale-price">
                                <span className="title">sale price</span>
                                <input type="text" name="sale-price" value={price} onChange={e => { setPrice(e.target.value) }} />
                            </label>
                            <div className="category flex2">
                                <span className="title">category</span>
                                <p>s</p>
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <label htmlFor="description" className='description'>
                    <span className='center'>Description</span>
                    <ReactQuill theme="snow" value={description} onChange={setDescription} />
                </label>
                <div className="save flex2">
                    <button onClick={handleSubmit} className='primary'>Save Product</button>
                </div>
            </div>
        </div>
    )
}

export default ProductForm