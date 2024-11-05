import { getProducts } from "../../lib/actions/products";
import ProductCard from "./ProductCard";
import { Product } from "../../lib/types";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
