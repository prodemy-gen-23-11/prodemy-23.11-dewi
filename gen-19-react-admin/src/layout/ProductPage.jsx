
import headline_product from "../assets/HL-Produk";
import Section from "../component/SectionTitle";
import CategoryCard from "../component/CategoryCard";
import { category } from "../assets/Category";
import Headline from "../component/Headline";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card";
import useSWR from "swr";
import axios from "axios";

function ProductPage() {
  const navigate = useNavigate();
  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
    console.log(id);
  };
  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const products = useSWR(`http://localhost:3000/products`, getProducts);

  

  console.log(products)
  return (
    <>
      <div>
        <div>
          {headline_product.map((item) => {
            return <Headline data={item} key={item.id} />;
          })}
        </div>

        <div className="m-5 flex justify-center uppercase">
          {category.map((item) => (
            <CategoryCard key={item.id}>{item.name}</CategoryCard>
          ))}
          
        </div>

        <div className="bg-gradient-to-tl from-rose-100 to-white mx-20 rounded-xl mb-5">
          <Section>coat & jacket</Section>
          <div className="flex justify-center">
            <div className="grid max-md:grid-cols-2 md:grid-cols-4">
            {products?.data?.map((item)=> (
          <div
          className="w-[280px] hover:card "
          key={item.id}
          onClick={() => onClickCard(item.id)}
        >
          <Card
            image={item.image}
            name={item.name}
            price={item.price}
          />
        </div>
      ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
