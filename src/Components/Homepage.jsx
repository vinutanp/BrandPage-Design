import { details } from "../assets/Content.js";
const Homepage = () => {
  return (
    <div className="homepage-container">
      
        <div className="content">
          <h1>{details.title}</h1>
          <p>{details.description}</p>
          <div className="homepage-btns">
          <button id="shop-now">Shop Now</button>
          <button id="category">Category</button>
          </div>
          <div className="shopping">
            <p>
              Also available on
            </p>
            <div className="available-on">
            <img src="./src/assets/amazon.png" alt="amazon-logo">
            </img>
            <img src="./src/assets/flipkart.png" alt="flipkart-logo"></img>
            </div>
            
          </div>
          
        </div>
        <div>
          <img src="./src/assets/shoe_image.png" alt="shoe-image"></img>
        </div>
      
    </div>
  );
};

export default Homepage;
