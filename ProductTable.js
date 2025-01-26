// import React from 'react';

// function ProductTable({ products, onDelete, onUpdate }) { // Accept onUpdate as a prop
//     return (
//        <div>
//           <h2>Product List</h2>
//           {products.length === 0 ? (
//              <p>No products available.</p>
//           ) : (
//              <table>
//                 <thead>
//                    <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Actions</th>
//                    </tr>
//                 </thead>
//                 <tbody>
//                    {products.map((product, index) => (
//                       <tr key={index}>
//                          <td>{product.id}</td>
//                          <td>{product.name}</td>
//                          <td>{product.price}</td>
//                          <td>{product.quantity}</td>
//                          <td className="actions">
//                          <td className="actions">
//    <button className="delete-button" onClick={() => onDelete(product.id)}>Delete</button>
//    <button className="update-button" onClick={() => onUpdate(product)}>Update</button>
// </td>
//                          </td>
//                       </tr>
//                    ))}
//                 </tbody>
//              </table>
//           )}
//        </div>
//     );
//  }
 
// export default ProductTable;

import React from 'react';

function ProductTable({ products, onDelete, onUpdate }) {
   return (
      <div>
         <h2>Product List</h2>
         {products.length === 0 ? (
            <p>No products available.</p>
         ) : (
            <table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {products.map((product) => (
                     <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td className="actions">
                           <button
                              className="delete-button"
                              onClick={() => onDelete(product.id)}
                           >
                              Delete
                           </button>
                           <button
                              className="update-button"
                              onClick={() => onUpdate(product)}
                           >
                              Update
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default ProductTable;

