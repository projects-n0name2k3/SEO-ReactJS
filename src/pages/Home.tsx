import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";
import Hero from "../components/Hero/Hero";
import Loading from "../components/Loading/Loading";
import ProductSection from "../components/ProductSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductSection />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
