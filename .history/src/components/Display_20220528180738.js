import React,{useState,useEffect} from 'react'



const Display = () => {
  const [quote , setQuote] = useState([])
  const [author,setAuthor] = useState("")

  useEffect(() => {
    const url = "http://quotes.stormconsultancy.co.uk/random.json";
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setQuote(data.quote)
        setAuthor(data.author)
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
     
  <div className="d-flex vh-100 justify-content-center">
    <div className="row d-flex justify-content-center align-items-center h-100 bgc">
      <div className="col-md-12 col-xl-5">

        <div className="card text-white" style={{borderRadius: "15px"}}>
          <div className="card-body p-5" >
             <p className="lead"  style={{fontSize:"2rem",color:"aqua"}}><i class="fa fa-quote-left"> </i><strong>{quote}</strong><i class="fa fa-quote-right"> </i></p>
            <div className="d-flex justify-content-end" style={{fontSize:"1.5rem",color:"aqua" }}>{author}
            
              </div>  
            <hr style={{color:'black'}}/>
          <div className="container-fluid">
             <div className="row">
               <div className="buttons">
               <button
        class="btn btn-primary mx-1"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
      ><i class="fa-brands fa-twitter"></i></button>
                <button className="btn btn-primary mx-1" ><i class="fa-brands fa-tumblr"></i></button>
               </div>
               {/* <div className="col-sm text-center" style={{fontSize:"1rem",color:"aqua" }}>{author}</div> */}
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
