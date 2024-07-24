import axios from "axios";
import { useEffect, useState } from "react";
import ProductGridItem from "./ProductGridItem";


export default function ProductGrid() {
    const [product, setProduct] = useState([]);
    const getData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response;
    }
    
    useEffect(() => {
        getData().then((res) => setProduct(res.data));
    }, []);

    console.log(product);

    return (
        <section className="grid grid-cols-4 gap-5 py-12">
            {product.map((item) => (
                <ProductGridItem key={item.id} product={item}/>
            ))}
        </section>
    )
}

