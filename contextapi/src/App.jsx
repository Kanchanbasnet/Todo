import Cart from "./components/Cart";
import Items from "./components/Items";


function App() {
  return (
    <>
      <Items title="Mac Book Pro" price="150000" />
      <Items title="Mobile Phone" price="20000" />
      <Items title="Pen Drive" price="4000" />
      <Items title="HeadPhone" price="5000" />
      <Items title="Air Buds" price="3000" />
      <Cart />
    </>
  );
}

export default App;
