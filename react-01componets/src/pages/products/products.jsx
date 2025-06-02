import { ProductCard } from "../../components/productCard/productCard";

const products = [
    {
        id: 100,
        title: "Jabon Zote",
        price: 25,

    },
    {
        id: 101,
        title: "Suavitel",
        price: 55,
    },
    {
        ide: 102,
        title: "Jabon Roma",
        price: 35,
    },
    {
        id: 103,
        title: "Jabon Foca",
        price: 28,
    },
];

const Products = () => {
    return (
        < >
            <h2>Productos</h2>
            { products.map( ({title, price}) => <ProductCard key={id} title={title} price={price} />) }
        </ >
    )
};

export {Products};