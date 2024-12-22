import './scss/productform.css';

const ProductForm = () => {
    return (
        <div className="add-product-form">
            <div className="container">
                <div className="flex2">
                    <div className="image-input">
                        <input type="file" name="product-image" />

                    </div>
                    <div className="info">
                        <label htmlFor="product-name">
                            <span className="title">product name</span>
                            <input type="text" name="product-name" />
                        </label>
                        <label htmlFor="brief-description">
                            <span className="title">brief description</span>
                            <textarea name="brief-description" />
                        </label>
                        <div className="flex2">
                            <label htmlFor="cost">
                                <span className="title">cost</span>
                                <input type="text" name="cost" />
                            </label>
                            <label htmlFor="sale-price">
                                <span className="title">sale price</span>
                                <input type="text" name="sale-price" />
                            </label>
                            <div className="category">
                                <span className="title">category</span>
                                <p></p>
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForm