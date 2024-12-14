import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ProductDescriptionEditor() {
    const [description, setDescription] = useState("");

    const handleDescriptionChange = (value) => {
        setDescription(value); // Stores formatted text as HTML
    };

    return (
        <div>
            <h2>Edit Product Description</h2>
            <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ["bold", "italic", "underline", "strike"], // formatting buttons
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "image"], // link and image
                    ],
                }}
            />
        </div>
    );
}

export default ProductDescriptionEditor;
