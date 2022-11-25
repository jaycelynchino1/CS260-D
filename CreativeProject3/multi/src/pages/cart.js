import { Link } from "react-router-dom";

const Cart = () => {
  return <html><head>
    <meta charset='UTF-8'/>
    <title>Cart</title>
    <link rel='stylesheet' href='index.css'/>
  </head>
  <body>
    <h1>Welcome to your cart!</h1>
    <ul>
      <li class='active'><Link to="/cart">Cart</Link></li>
      <li><Link to="/color">COLOR</Link></li>
      <li><Link to="/style">STYLE</Link></li>
      <li><Link to="/type">TYPE</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
  </body></html>;
};

export default Cart;