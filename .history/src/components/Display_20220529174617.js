import React,{useState} from 'react';
import $ from 'jquery';



const Display = () => {
  const [quote , setQuote] = useState("I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.")
  const [author,setAuthor] = useState("Larry DeLuca")
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  const text = encodeURIComponent('"' + quote + '" ' + author)
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&text='+{text}    
  );
  const randColor = colors[Math.floor(Math.random() * colors.length)];
  const [color,setColor] = useState(colors[0]);
  const currentLink = window.location.href;
  console.log(currentLink);
  const handleClick = () => {
 
  const url = "http://quotes.stormconsultancy.co.uk/random.json";
  
  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setQuote(data.quote)
        setAuthor(data.author)
        setColor(randColor)
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();

}
  return (
    <>
     
  <div className="d-flex vh-100 justify-content-center">
     <div className="d-flex justify-content-center align-items-center h-100" style={{backgroundColor:color,width:"100vw"}}> 
      <div className="col-md-12 col-xl-5">

        <div className="card text-white" style={{borderRadius: "15px"}}>
          <div className="card-body p-5" >
             <p className="lead"  style={{fontSize:"2rem",color:color}}><i className="fa fa-quote-left"> </i>{quote}<i className="fa fa-quote-right"> </i></p>
            <div className="d-flex justify-content-end" style={{fontSize:"1.5rem",color:color }}>-{author}
            
              </div>  
            <hr style={{color:'black'}}/>
          <div className="container-fluid">
             <div className="row">
               <div className="d-flex ">
               <button className="btn btn-primary mx-1"  id = 'tweet-quote' title="Tweet this quote!" target="_top" style={{backgroundColor:color}}><i className="fa-brands fa-twitter"></i>
               </button>
                <button className="btn btn-primary mx-1" id = "tumblr-quote" title="Tumblr this quote!" target="_blank" style={{backgroundColor:color}}><i className="fa-brands fa-tumblr"></i></button>
                <div className='col-md' style={{direction:"rtl"}}><button className="btn btn-primary" title='New Quote' style={{backgroundColor:color}} onClick={handleClick}>New Quote</button></div>
               </div>
               </div> 
            </div>  
          </div>
        </div>

      </div>
    </div>
  </div>

    </>
  )
}

export default Display
