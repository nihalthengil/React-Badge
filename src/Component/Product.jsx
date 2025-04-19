import React from 'react'

const Product = () => {
  return (
    <div>
    <form
        onSubmit={async (e) => {
            e.preventDefault();
            const NewItem = new NewItem(e.target);
            const product = {
                name: NewItem.get("name"),
                price: NewItem.get("price"),
                description: NewItem.get("description"),
            };

                const response = await fetch("http://localhost:3000/products", {
                    method: "POST",
                    body: JSON.stringify(product),
                });

                if (response.ok) {
                    alert("Product added");
                    e.target.reset();
                }
        }}
    >
        <div>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
        </div>
        <div>
            <label>
                Price:
                <input type="number" name="price" required />
            </label>
        </div>
        <div>
            <label>
                Description:
                <input type="number" name="price" required />
            </label>
        </div>
        <button type="submit">Add Product</button>
    </form>
    </div>
  )
}

export default Product
