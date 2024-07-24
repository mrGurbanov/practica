import { Link } from "react-router-dom";
import Flex from "./Flex";

export default function ProductGridItem({ product }) {
  return (
    <Flex
            as='article'
            direction={'column'}
            alignItems="stretch"
            justifyContent={'space-between'}
            className="border border-[#bbb] p-4 rounded-xl h-[350px]" 
            >
                <div className="relative w-full">
                    <Link to={`/product/${product.id}`}>
                        <img 
                            className="w-full h-[150px] object-contain rounded-lg rounded-b-none" 
                            src={product.image} 
                            alt="product-img" 
                        />
                    </Link>
                    <span className="absolute capitalize -top-2 right-[-10px] text-[12px] bg-[black] text-white rounded-md px-2 ">{product.category}</span>
                </div>
                <div alignitems={"flex-start"} className="w-full">
                    <h3 className="truncate font-semibold">{product.title}</h3>
                    <span>{product.price} $</span>
                    <span className="ml-3 [&>i]:text-[#FFD43B]" >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span> ({product.rating.rate})</span>
                        <div>Seller ({product.rating.count})</div>
                    </span>
                </div>
                <button className='text-center bg-black text-white py-2 px-14 rounded-md'>Add to Cart</button>
            </Flex>
  );
}
