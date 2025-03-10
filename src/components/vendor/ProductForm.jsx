import { useEffect, useRef, useState } from 'react';
import './scss/productform.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import log from '../../util/Log';
import Request from '../../Api/Axios';
import { useNotification } from '../../hooks/useNotification';

const ProductForm = () => {
    const [productName, setProductName] = useState("")
    const [briefDescription, setBriefDescription] = useState("")
    const [cost, setCost] = useState("")
    const [basePrice, setBasePrice] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([])
    const [categoryInput, setCategoryInput] = useState("")
    const [filteredCategory, setFilteredCategory] = useState([])
    const productImageRef = useRef(null)
    const imageInputRef = useRef(null)
    const imageRef = useRef(null)
    // Check for exact match
    const exactMatch = categories.some(category => category.name === categoryInput);
    const { showNotification } = useNotification()
    const validateSubmit = () => {
        // Validate Product Name
        if (!productName) {
            showNotification("error", "Please enter product name");
            return false;
        }
        if (productName.length > 80) {
            showNotification("error", `Product name too long (${productName.length}/80 characters)`);
            return false;
        }
        // Validate Brief Description
        if (!briefDescription) {
            showNotification("error", "Please enter a brief description");
            return false;
        }
        if (briefDescription.length > 250) {
            showNotification("error", `Description too long (${briefDescription.length}/250 characters)`);
            return false;
        }

        // Validate Cost
        if (!cost || isNaN(cost) || Number(cost) < 0) {
            showNotification("error", "Cost must be a valid positive number");
            return false;
        }

        // Validate Sale Price
        if (!basePrice || isNaN(basePrice) || Number(basePrice) < 0) {
            showNotification("error", "Sale price must be a valid positive number");
            return false;
        }
        if (Number(basePrice) < Number(cost)) {
            showNotification("error", "Sale price cannot be lower than cost");
            return false;
        }

        // Validate Category
        if (!categoryInput) {
            showNotification("error", "Please enter a category");
            return false;
        }
        if (!categories.some(cat => cat.name === categoryInput)) {
            setCategoryInput("")
            showNotification("error", "Invalid category selected");
            return false;
        }
        if (!productImageRef.current.files.length) {
            showNotification("error", "Please upload a product image");
            return false;
        }
        return true;
    };
    const handleSubmit = async () => {
        if (!validateSubmit()) { console.log("validation Failed"); return }
        const data = {
            title: productName,
            briefDescription: briefDescription.toString(),
            description: description,
            cost: cost,
            basePrice: basePrice,
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
        if (!res) {
            showNotification("error", "Error Saving Product, please contact us if error presists")
        }
        showNotification("success", "Product Saved!")
        clearFields()
        log("add product", res)
    }
    const getCategories = async () => {
        const categories = await Request("/category", "GET", false)
        setCategories(categories.data)
        console.log(categories)
    }
    const filterCategory = () => {
        setFilteredCategory(categories.filter((category) => {
            return category.name.includes(categoryInput)
        }))
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
    const clearFields = () => {
        setProductName("");
        setBriefDescription("");
        setCost("");
        setBasePrice("");
        setDescription("");
        setCategoryInput("");
        setFilteredCategory([]);

        if (productImageRef.current) {
            productImageRef.current.value = "";
        }
        if (imageRef.current) {
            imageRef.current.src = "";
        }
        imageInputRef.current.classList.remove("hidden")
        imageRef.current.classList.remove("visible")

    };
    useEffect(() => { filterCategory() }, [categoryInput])
    useEffect(() => { getCategories() }, [])
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
                        <h1>Product Details</h1>
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
                                <span className="title">base price</span>
                                <input type="text" name="sale-price" value={basePrice} onChange={e => { setBasePrice(e.target.value) }} />
                            </label>
                            <div className="category flex2">
                                <span className="title">category</span>
                                <input type="text" name='category' placeholder='enter category name' value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} />
                                {categoryInput && !exactMatch && <ul>
                                    {filteredCategory.map((category) => <li key={category._id} onClick={() => { setCategoryInput(category.name); setFilteredCategory([]) }}>{category.name}</li>)}
                                    {filteredCategory.length === 0 && <p>No Matching Categories</p>}
                                </ul>}
                            </div>
                        </div>
                        <div className="flex2">

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