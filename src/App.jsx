import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Chart from "./Components/Chart";
import Header from "./Components/Header";
import Detail from "./Components/Detail";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 0,
        name: "HP 14 FQ0110WM",
        stock: 10,
        description: `Disco y ram personalizables.
        AMD Ryzen 3 3250U / 4gb ddr4 / Almacenamiento SSD 128gb`,
        price: 120.244,
        image: "0.jpg",
      },
      {
        id: 1,
        name: "Lenovo Ideapad 3 15ITL05 55US",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i3-1115G4 / 4GB DDR4 / Almacenamiento SSD 128GB`,
        price: 126.588,
        image: "1.jpg",
      },
      {
        id: 2,
        name: "Lenovo Ideapad 3 15ITL05 Platinum",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i3 1115G4 / 4GB DDR4 / Almacenamiento SSD 128GB`,
        price: 136.499,
        image: "2.jpg",
      },
      {
        id: 3,
        name: "Lenovo IdeaPad 3 15ITL05 ELUS",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i3 1115G4 / 4GB DDR4 / Almacenamiento SSD 128GB`,
        price: 136.499,
        image: "3.jpg",
      },
      {
        id: 4,
        name: "Lenovo V15 G2 ITL 4PAR",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i3-1115G4 / 8GB DDR4 / Almacenamiento SSD 256GB`,
        price: 162.494,
        image: "4.jpg",
      },
      {
        id: 5,
        name: "Acer Travelmate P2 Tmp214-52-57H",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i5-10310U / 8GB DDR4 / Almacenamiento SSD 256GB`,
        price: 175.429,
        image: "5.jpg",
      },
      {
        id: 6,
        name: "Lenovo IdeaPad 3 14ITL05 JAR",
        stock: 10,
        description: `Disco y ram personalizables.
        Intel Core i5-1135G7 / 8GB DDR4 / Almacenamiento SSD 256GB`,
        price: 175.494,
        image: "6.jpg",
      },
      {
        id: 7,
        name: "Lenovo IdeaPad 3 15ALC6 Sand",
        stock: 10,
        description: `Disco y ram personalizables.
        AMD Ryzen 5 5500U / 8GB DDR4 / Almacenamiento SSD 256GB`,
        price: 175.494,
        image: "7.jpg",
      },
      {
        id: 8,
        name: "Lenovo Ideapad 3 15ALC6 Grey",
        stock: 10,
        description: `Disco y ram personalizables.
        AMD Ryzen 5 5500U / 8GB DDR4 / Almacenamiento SSD 256GB`,
        price: 175.494,
        image: "8.jpg",
      },
    ]);
  }, []);

  const handleClick = (e) => {
    let selected = products.find(
      (product) => product.id === parseInt(e.target.id)
    );
    let exist = cart.find((product) => product.id === parseInt(selected.id));
    if (exist === undefined) {
      setCart([...cart, { ...selected, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === selected.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    toast("Se agrego el producto al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
    });
  };

  const handleQuantity = (e) => {
    let sign = e.target.textContent;
    let id = parseInt(e.target.dataset.id);
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          if (sign === "+") {
            if (item.stock >= item.quantity + 1)
              return { ...item, quantity: item.quantity + 1 };
          } else {
            if (item.quantity > 1)
              return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  return (
    <>
      <Header
        quantity={cart.reduce((prev, act) => {
          return prev + act.quantity;
        }, 0)}
      />
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} add={handleClick} />}
        />
        <Route path="/products/:id" element={<Detail />} />
        <Route
          path="/chart"
          element={<Chart products={cart} handleQuantity={handleQuantity} />}
        />
      </Routes>
    </>
  );
};

export default App;
