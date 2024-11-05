import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("Clothing");

  return (
    <aside className="hidden col-span-3 p-6 md:flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <span className="text-[22px] leading-[34px] font-semibold">Filter</span>
        <button aria-label="Close filters">
          <IoClose size={24} />
        </button>
      </div>
      <div className="flex gap-10 flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-[22px] font-semibold">Category</p>
          <div className="flex flex-col gap-4">
            {[
              "Home & Decor",
              "Clothing",
              "Accessories",
              "Outdoor",
              "Coat Collection",
              "Summer Collection",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm leading-[22px] font-semibold text-left ${
                  selectedCategory === category
                    ? "border-b border-black w-fit"
                    : "text-[#807E7E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
