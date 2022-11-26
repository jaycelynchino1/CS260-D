import { Link } from "react-router-dom";

const Home = () => {
  return <html>
    <head>
      <meta charset='UTF-8'/>
      <title>Custom Creations Jewelry</title>
      <link rel='stylesheet' href='index.css'/>
      <strong><h1>Custom Creations</h1></strong>
    </head>
    
    <body><div  class='center'>
            <h2>Welcome to a world where YOU are the designer</h2>
            Customized Jewelry
            <hr></hr>
            <h1><div class='front'><Link to="/type">START HERE</Link></div></h1>
        </div>
        <div class='start'>
              <hr></hr>
            <ul>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/color">COLOR</Link></li>
                <li><Link to="/style">STYLE</Link></li>
                <li><Link to="/type">TYPE</Link></li>
                <li class='active'><Link to="/home">Home</Link></li>
            </ul>
        </div>
      </body>

      <footer>
        <p><a href="https://github.com/jaycelynchino1/CS260-D/tree/main/CreativeProject3/multi">GitHub Repo</a></p>
      </footer>
    </html>
      
};

export default Home;