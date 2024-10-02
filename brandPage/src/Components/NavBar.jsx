import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <div className="brand-logo">
        <img src="./src/assets/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Menu</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default NavBar;
