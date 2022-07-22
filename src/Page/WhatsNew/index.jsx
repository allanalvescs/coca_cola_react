import "./style.scss";

import { useUser } from "../../Providers/modules/User";

import PackageCoke from "../../images/image_whatsnew.png";
import Welcome from "../../images/welcome.png";

import Button from "../../Components/Button";

const WhatsNew = () => {
  const { user, token } = useUser();
  return (
    <main className="Main_Whatsnew">
      {!!token && (
        <h1>
          <img src={Welcome} alt="welcome svg" /> <span>{user.name}</span>
        </h1>
      )}
      <div className="Container_initial">
        <article>
          <h2>Here you are going find sastysfation to tour home!</h2>
          <p>
            Oops, did you open the fridge and you're out of Coke? Don't worry!
            Order your Coca‑Cola product at Na Sua Casa and receive your
            favorite drinks the next day!*
          </p>

          <Button>Buy ou Products</Button>

          <span>* avalaible to all countrys in the world!</span>
        </article>

        <img src={PackageCoke} alt="packag bottle of coke" />
      </div>
    </main>
  );
};

export default WhatsNew;
