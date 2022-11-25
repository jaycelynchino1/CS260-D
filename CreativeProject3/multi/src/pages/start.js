import { Link } from "react-router-dom";

const Start = () => {
  return <html><head>
    <meta charset='UTF-8'/>
    <title>Start</title>
    <link rel='stylesheet' href='index.css'/>
  </head>
  <body>
    <p><h1>Start by choosing your category:</h1></p>
    <hr></hr>
    <div class='start'>
      <li><Link to="/color">COLOR</Link></li>
      <li><Link to="/style">STYLE</Link></li>
      <li><Link to="/type">TYPE</Link></li>
    </div>
    
    <hr></hr>
    <ul>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/color">COLOR</Link></li>
      <li><Link to="/style">STYLE</Link></li>
      <li><Link to="/type">TYPE</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
  </body></html>;
};

export default Start;