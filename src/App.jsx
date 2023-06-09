import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full text-2xl">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
