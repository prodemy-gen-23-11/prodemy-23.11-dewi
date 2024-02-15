import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="m-auto">
      <div class="bg-gray-400 p-10 font-serif text-xl flex justify-center md:text-2xl">
        <div class="mx-20">
          <h2 class="font-serif">Follow Us</h2>
          <ul class="text-xl md:flex md:text-3xl">
            <li>
              <a href="">
                <i class="p-3 fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="p-3 fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="p-3 fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="p-3 fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="mx-20">
          <h2 class="font-serif pb-3">Shop</h2>
          <ul class="text-base">
            <li>
              <a href="">Parfume</a>
            </li>
            <li>
              <a href="">Clothes</a>
            </li>
            <li>
              <a href="">Coat & Jacket</a>
            </li>
            <li>
              <a href="">Pants</a>
            </li>
          </ul>
        </div>

        <div class="mx-20">
          <h2 class="font-serif pb-3">Customers</h2>
          <ul class="text-base">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Get Help</a>
            </li>
          </ul>
        </div>

        <div class="mx-20">
          <h2 class="font-serif pb-3">Agent</h2>
          <ul class="text-base">
          <Link to={"/admin"}>Shop
               </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
