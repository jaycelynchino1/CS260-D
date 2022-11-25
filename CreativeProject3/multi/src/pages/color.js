import { Link } from "react-router-dom";

const Color = () => {
  return <html>
  <head>
      <meta charset='UTF-8'/>
      <title>Color</title>
      <link rel='stylesheet' href='index.css'/>
  </head>
  <body>
      <p><h1>Choose your color:</h1></p>
      <hr></hr>
      <div class='color'>
          <ol>
              <li class='gold'>Gold</li>
              <li class='silver'>Silver</li>
              <li class='red'>Red</li>
              <li class='green'>Green</li>
              <li class='orange'>Orange</li>
              <li class='blue'>Blue</li>
              <li class='yellow'>Yellow</li>
              <li class='purple'>Purple</li>
              <li class='black'>Black</li>
              <li class='white'>White</li>
          </ol>
      </div>
      <div class='next'>
          <div class='style'><Link to="/cart">NEXT</Link></div>
      </div>
      <hr></hr>
      <Link to="/cart">CHECKOUT</Link>
      <ul>
          <li><Link to="/cart">Cart</Link></li>
          <li class='active'><Link to="/color">COLOR</Link></li>
          <li><Link to="/style">STYLE</Link></li>
          <li><Link to="/type">TYPE</Link></li>
          <li><Link to="/home">Home</Link></li>
      </ul>
  </body>
</html>
};

export default Color;
