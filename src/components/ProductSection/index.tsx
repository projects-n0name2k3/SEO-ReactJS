import { Suspense } from "react";
import Sidebar from "./SideBar";
import ProductGrid from "./ProductGrid";
import Loading from "../Loading/Loading";

export default function ProductSection() {
  return (
    <section className="grid grid-cols-12 gap-4 px-4 md:px-[52px] w-full mb-10">
      <Sidebar />
      <div className="md:col-span-9 col-span-12 mt-4">
        <Suspense fallback={<Loading />}>
          <ProductGrid />
        </Suspense>
      </div>
    </section>
  );
}
