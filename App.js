// import React, { useState } from 'react';
// import AddProductForm from './AddProductForm';
// import ProductTable from './ProductTable';

// function App() {
//    const [products, setProducts] = useState([]);
//    const [showForm, setShowForm] = useState(false);
//    const [editingProduct, setEditingProduct] = useState(null);

//    // Function to add a product
//    const addProduct = (product) => {
//       setProducts([...products, product]);
//    };

//    // Function to delete a product by ID
//    const handleDelete = (id) => {
//       setProducts(products.filter((product) => product.id !== id));
//    };

//    // Function to update a product
//    const handleUpdateClick = (product) => {
//       setEditingProduct(product);
//       setShowForm(true);
//    };

//    return (
//       <div>
//          <h1>Inventory Management System</h1>
//          <button onClick={() => setShowForm(!showForm)}>
//             {showForm ? 'Close Form' : 'Add Product'}
//          </button>
         
//          {showForm && <AddProductForm onAddProduct={addProduct} editingProduct={editingProduct} />}
         
//          <ProductTable products={products} onDelete={handleDelete} onUpdate={handleUpdateClick} />
//       </div>
//    );
// }

// export default App;


// import React, { useState } from 'react';
// import AddProductForm from './AddProductForm';
// import ProductTable from './ProductTable';
// import './App.css';

// function App() {
//    const [products, setProducts] = useState([]);
//    const [showForm, setShowForm] = useState(false);
//    const [editingProduct, setEditingProduct] = useState(null);

//    // Function to add a new product or update an existing one
//    const addOrUpdateProduct = (product) => {
//       if (editingProduct) {
//          // Update existing product by matching IDs
//          setProducts((prevProducts) =>
//             prevProducts.map((p) => (p.id === product.id ? product : p))
//          );
//          setEditingProduct(null);  // Exit edit mode
//       } else {
//          // Add new product
//          setProducts([...products, product]);
//       }
//       setShowForm(false); // Close the form
//    };

//    const handleDelete = (id) => {
//       setProducts(products.filter((product) => product.id !== id));
//    };

//    const handleUpdateClick = (product) => {
//       setEditingProduct(product); // Set the product to be edited
//       setShowForm(true);          // Show the form
//    };

//    return (
//       <div className="container">
//          <h1>Inventory Management System</h1>
//          <button onClick={() => { setShowForm(!showForm); setEditingProduct(null); }}>
//             {showForm ? 'Close Form' : 'Add Product'}
//          </button>
         
//          {showForm && (
//             <AddProductForm
//                onAddProduct={addOrUpdateProduct}
//                editingProduct={editingProduct}
//             />
//          )}
         
//          <ProductTable
//             products={products}
//             onDelete={handleDelete}
//             onUpdate={handleUpdateClick}
//          />
//       </div>
//    );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import AddProductForm from './AddProductForm';
import ProductTable from './ProductTable';
import axios from 'axios'; 
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch products from the backend when the component loads
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Function to add or update a product
    const addOrUpdateProduct = async (product) => {
        try {
            if (editingProduct) {
                // Update existing product on the backend
                await axios.put(`http://localhost:5000/products/${product.id}`, product);
                setProducts((prevProducts) =>
                    prevProducts.map((p) => (p.id === product.id ? product : p))
                );
                setEditingProduct(null);  // Exit edit mode
            } else {
                // Add new product on the backend
                const response = await axios.post('http://localhost:5000/products', product);
                setProducts([...products, response.data]);
            }
        } catch (error) {
            console.error("Error adding/updating product:", error);
        }
        setShowForm(false); // Close the form after adding/updating
    };

    // Function to delete a product
   //  const handleDelete = async (id) => {
   //      try {
   //          await axios.delete(`http://localhost:5000/products/${id}`);
   //          setProducts(products.filter((product) => product.id !== id));
   //      } catch (error) {
   //          console.error("Error deleting product:", error);
   //      }
   //  };
   const handleDelete = async (id) => {
      try {
          await axios.delete(`http://localhost:5000/products/${id}`);
          fetchProducts(); 
      } catch (error) {
          console.error("Error deleting product:", error);
      }
  };
  
    // Function to set a product in edit mode
    const handleUpdate = (product) => {
      setEditingProduct(product); // This will set the form to update mode
  };
  const handleUpdateClick = (product) => {
   setEditingProduct(product); // Set the product to be edited
   setShowForm(true);          // Show the form
};


    return (
        <div className="container">
            <h1>Inventory Management System</h1>
            <button onClick={() => { setShowForm(!showForm); setEditingProduct(null); }}>
                {showForm ? 'Close Form' : 'Add Product'}
            </button>
            
            {showForm && (
                <AddProductForm
                    onAddProduct={addOrUpdateProduct}
                    editingProduct={editingProduct}
                />
            )}
            
            <ProductTable
                products={products}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
            />
        </div>
    );
}

export default App;