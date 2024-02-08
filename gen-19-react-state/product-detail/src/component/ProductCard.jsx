import AddToCart from "./AddToCart";
function ProductCard({ children }) {
   return (
      <div className=" relative shadow-2xl rounded-lg bg-white overflow-hidden font-serif text-center m-5 hover:scale-105 hover:shadow-rose-700">
         {children}
      </div>
   );
}

function Image(props) {
   return (
      <div className="flex justify-center w-[200px] h-[280px] m-5">
         <img src={props.imgProduk} alt="foto" />
      </div>
   );
}

function Title(props) {
   return (
      <div className="px-4 text-center h-18">
         <h1 className="text-md font-bold"> {props.titleProduk}</h1>
      </div>
   );
}

function Body(props) {
   return <div className="text-xl text-center p-4"> {props.priceProduk} </div>;
}

function Footer() {
   return (
      <div
         className={'bg-slate-300 p-4 text-xl font-semibold hover:bg-slate-400'}>
         <AddToCart />
      </div>
   );
}

ProductCard.Title = Title;
ProductCard.Image = Image;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
