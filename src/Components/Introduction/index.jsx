import Button from "../Button";

import "./style.scss";

import MainProduct from "../../images/main_product.png";
import SecundaryProduct from "../../images/secundary_product.webp";
import ThirdProduct from "../../images/thirProduct.webp";

const Introduction = () => {
  return (
    <div className="Container_introduction">
      <div>
        <h1>Taste the Feeling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          facere culpa! Ipsa quibusdam adipisci iusto voluptatibus animi
          repudiandae labore natus. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Pariatur id dolor numquam consequatur.
        </p>
        <Button>Learn More</Button>
      </div>
      <figure>
        <img src={ThirdProduct} alt="Lata de 300g coca cola zero" />
        <img src={MainProduct} alt="garrafa de 1L da coca cola" />
        <img src={SecundaryProduct} alt="coca cola café expresso" />
      </figure>
    </div>
  );
};

export default Introduction;
