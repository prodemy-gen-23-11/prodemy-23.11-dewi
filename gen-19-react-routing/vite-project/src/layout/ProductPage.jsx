import jacket from "../assets/Jacket";
import headline_product from "../assets/HL-Produk";
import Section from "../component/SectionTitle";
import CategoryCard from "../component/CategoryCard";
import { category } from "../assets/Category";
import Headline from "../component/Headline";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card";

function ProductPage() {

  const navigate = useNavigate();
  const handlerGoToDetail = (id) => {
    navigate(`/${id}`);
    console.log(id);
  };

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
            {jacket.map((item) => {
              return (
                <div
                  className="w-[280px] hover:card "
                  key={item.id}
                  onClick={() => handlerGoToDetail(item.id)}
                >
                  <Card image={item.image} name={item.name} price={item.price}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
