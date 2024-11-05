import { useParams } from "react-router-dom";
import { Product } from "../lib/types";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
function ProductDetail() {
  const { id } = useParams();
  const productId = id?.split(".")[0].split("-").pop();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    };
    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${product.title}| Bilibili Shop`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={product.title} />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={product.image} />
      </Helmet>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">
              {product?.category}
            </span>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <div className="flex items-center gap-4"></div>
            <span className="text-2xl font-bold">${product?.price}</span>
          </div>
          <div>
            <img
              src={product?.image}
              alt={product?.title}
              className="w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-4">Product Details</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Category:</span> {product?.category}
            </li>
            <li>
              <span className="font-medium">SKU:</span> {product?.id}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
