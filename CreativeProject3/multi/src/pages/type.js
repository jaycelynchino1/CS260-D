import { Link } from "react-router-dom";

const Type = () => {
  return <html>
    <head>
        <meta charset='UTF-8'/>
        <title>Type</title>
        <link rel='stylesheet' href='index.css'/>
    </head>
    <body>
        <p><h1>Choose your type:</h1></p>
        <hr></hr>
        <div class='type'>
            <div class='ring'>Ring</div>
            <div class='bracelet'>Bracelet</div>
            <div class='anklet'>Anklet</div>
            <div class='choker'>Choker</div>
        </div>
        <div class='next'>
            <div class='style'><Link to="/style">NEXT</Link></div>
        </div>
        <hr></hr>
        <Link to="/cart">CHECKOUT</Link>
        <ul>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/color">COLOR</Link></li>
                <li><Link to="/style">STYLE</Link></li>
                <li class='active'><Link to="/type">TYPE</Link></li>
                <li><Link to="/home">Home</Link></li>
        </ul>
    </body>
</html>
};

export default Type;
