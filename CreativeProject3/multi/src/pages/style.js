import { Link } from "react-router-dom";

const Style = () => {
  return <html>
    <head>
        <meta charset='UTF-8'/>
        <title>Style</title>
        <link rel='stylesheet' href='index.css'/>
    </head>
    <body>
        <p><h1>Choose your style:</h1></p>
        <hr></hr>
        <div class='style'>
            <div class='plain'>Plain</div>
            <div class='flowers'>Flowers</div>
            <div class='pattern'>Pattern</div>
            <div class='random'>Random</div>
        </div>
        <div class='next'>
            <div class='style'><Link to="/color">NEXT</Link></div>
        </div>
        <hr></hr>
        <Link to="/cart">CHECKOUT</Link>
        <ul>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/color">COLOR</Link></li>
                <li class='active'><Link to="/style">STYLE</Link></li>
                <li><Link to="/type">TYPE</Link></li>
                <li><Link to="/home">Home</Link></li>
        </ul>
    </body>
</html>
};

export default Style;
