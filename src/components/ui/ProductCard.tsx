import React from "react";
import Image from "next/image";
import CustomeText from "./CustomeText";
export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col w-full max-w-[400px] h-full bg-[#F9FAFB] rounded-[24px] overflow-hidden border border-[#E4E7EC] hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#F2F4F7] flex items-center justify-center p-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay Action */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-2 bg-white text-[#171717] rounded-full font-semibold translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#FFEAD5] text-[#FD853A] text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <CustomeText
            title={product.title}
            className="text-[24px] font-bold text-[#1D2939] leading-tight line-clamp-2"
          />
          <CustomeText
            title={product.description}
            className="text-[16px] text-[#667085] line-clamp-2"
          />
        </div>
      </div>

      {/* Footer / Price */}
      <div className="flex items-center justify-between p-6 pt-0 mt-auto">
        <CustomeText
          title={product.price}
          className="text-[28px] font-bold text-[#FD853A]"
        />
        <button className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center group-hover:bg-[#FD853A] transition-colors duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
