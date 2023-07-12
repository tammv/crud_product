import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";
import { getListProduct } from "../service/localstorage";

export const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(getListProduct());
  }, []);

  return (
    <div>
      <h1 className="my-5 text-center">Product List</h1>

      {product.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <ProductItem product={product} key={product.id} setProduct={setProduct} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">Empty product</h3>
      )}
    </div>
  );
};
