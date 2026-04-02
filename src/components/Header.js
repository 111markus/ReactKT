import logo from "../assets/logo.jpg";
import Button from "./UI/Button.js";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
