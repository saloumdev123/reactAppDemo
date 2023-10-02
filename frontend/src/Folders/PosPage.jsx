import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { useReactToPrint } from "react-to-print";

function PosPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const toastOption = {
    autoClose: 400,
    pauseOnHover: true,
  };

  const fetchProducts = async () => {
    setLoading(true);
    const result = await axios.get("products");
    setProducts(await result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((itemInCart) => {
      newTotalAmount = newTotalAmount + parseInt(itemInCart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const AddProductInCart = async (product) => {
    let findProductCart = await cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductCart) {
      //find item in the cart and adding quantity
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
      toast(`added ${newItem.name} to cart !`, toastOption);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
      toast(`added ${product.name} to cart !`, toastOption);
    }
  };

  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  };

  const removeProduct = async (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  return (
    <MainLayout>
      <hr />
      <div className="col-lg-4">
        <div style={{ display: "none" }}>
          <ComponentToPrint
            cart={cart}
            totalAmount={totalAmount}
            ref={componentRef}
          />
        </div>
        <div
          className="table table-responsive bg-dark"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <table className="table table-responsive table-dark table-hover ">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cart
                ? cart.map((cartProduct, key) => (
                    <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeProduct(cartProduct)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                : "No Item in the cart"}
            </tbody>
          </table>
          <h2 className="px-2 text-white">Total amount: ${totalAmount}</h2>
        </div>

        <div className="mt-3">
          {totalAmount !== 0 ? (
            <div>
              <button className="btn btn-primary" onClick={handlePrint}>
                Pay Now
              </button>
            </div>
          ) : (
            "please add a product to the cart"
          )}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          {loading ? (
            "products is  loading..."
          ) : (
            <div className="row">
              {products.map((product, key) => (
                <div key={key} className="col-lg-4 mb-4">
                  <div
                    className="pos-item px-3 text-center border"
                    onClick={() => AddProductInCart(product)}
                  >
                    <p>Name: {product.name}</p>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid fixed-size-image"
                    />
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default PosPage;
