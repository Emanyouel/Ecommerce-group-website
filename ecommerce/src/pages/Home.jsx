import Searchbar from "../components/Searchbar.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductGrid from "../components/Product-grid.jsx";
import RightCartBar from "../components/BagArea.jsx";

function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <Searchbar />
        <div className="mt-10 w-230">
          <ProductGrid />
        </div>
      </main>
      <RightCartBar />
    </div>
  );
}

export default Home;
