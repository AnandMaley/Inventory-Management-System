// import React, { useState, useEffect } from 'react';

// function AddProductForm({ onAddProduct, editingProduct }) {
//    const [product, setProduct] = useState({
//       id: '',
//       name: '',
//       price: '',
//       quantity: '',
//    });

//    useEffect(() => {
//       if (editingProduct) {
//          setProduct(editingProduct);
//       } else {
//          setProduct({ id: '', name: '', price: '', quantity: '' });
//       }
//    }, [editingProduct]);

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setProduct({ ...product, [name]: value });
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault();
//       onAddProduct(product);  // Submit updated product to App.js
//       setProduct({ id: '', name: '', price: '', quantity: '' }); // Clear form after submission
//    };

//    return (
//       <form onSubmit={handleSubmit}>
//          <h2>{editingProduct ? 'Update Product' : 'Add Product'}</h2>
//          <label>
//             ID:
//             <input
//                type="text"
//                name="id"
//                value={product.id}
//                onChange={handleChange}
//                required
//                disabled={!!editingProduct} // Disable ID during update
//             />
//          </label>
//          <label>
//             Name:
//             <input
//                type="text"
//                name="name"
//                value={product.name}
//                onChange={handleChange}
//                required
//             />
//          </label>
//          <label>
//             Price:
//             <input
//                type="number"
//                name="price"
//                value={product.price}
//                onChange={handleChange}
//                required
//             />
//          </label>
//          <label>
//             Quantity:
//             <input
//                type="number"
//                name="quantity"
//                value={product.quantity}
//                onChange={handleChange}
//                required
//             />
//          </label>
//          <button type="submit">{editingProduct ? 'Save Changes' : 'Add Product'}</button>
//       </form>
//    );
// }

// export default AddProductForm;

import React, { useState, useEffect } from 'react';

function AddProductForm({ onAddProduct, editingProduct }) {
   const [product, setProduct] = useState({
      id: '',
      name: '',
      price: '',
      quantity: '',
   });

   useEffect(() => {
      if (editingProduct) {
         setProduct(editingProduct);
      } else {
         setProduct({ id: '', name: '', price: '', quantity: '' });
      }
   }, [editingProduct]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddProduct(product);  // Submit updated product to App.js
      setProduct({ id: '', name: '', price: '', quantity: '' }); // Clear form after submission
   };

   return (
      <form onSubmit={handleSubmit}>
         <h2>{editingProduct ? 'Update Product' : 'Add Product'}</h2>

         {/* Conditionally render ID field for new products only */}
         {!editingProduct && (
            <label>
               ID:
               <input
                  type="text"
                  name="id"
                  value={product.id}
                  onChange={handleChange}
                  required
               />
            </label>
         )}
         
         <label>
            Name:
            <input
               type="text"
               name="name"
               value={product.name}
               onChange={handleChange}
               required
            />
         </label>
         
         <label>
            Price:
            <input
               type="number"
               name="price"
               value={product.price}
               onChange={handleChange}
               required
            />
         </label>
         
         <label>
            Quantity:
            <input
               type="number"
               name="quantity"
               value={product.quantity}
               onChange={handleChange}
               required
            />
         </label>
         
         <button type="submit">{editingProduct ? 'Save Changes' : 'Add Product'}</button>
      </form>
   );
}

export default AddProductForm;