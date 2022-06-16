import React,{useState,useEffect} from 'react'



const Display = () => {
  const [quote , setQuote] = useState([])
  const [author,setAuthor] = useState("")

  useEffect(() => {
    const url = "http://quotes.stormconsultancy.co.uk/quotes/1.json";
  
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
    <div>
      <section className="vh-100 bg-light">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-5">

        <div className="card text-white" style={{backgroundColor: "#1f959b", borderRadius: "15px"}}>
          <div className="card-body p-5" >
             <p className="lead"  style={{fontSize:"2rem"}}><i class="fa fa-quote-left"> </i><strong>{quote}</strong><i class="fa fa-quote-right"> </i></p>

            <hr/>
          <div className="container-fluid">
             <div className="row">
               <div className="buttons">
               <button
        class="btn btn-primary"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
      ><i class="fa-brands fa-twitter"></i></button>
                <button className="btn btn-primary mx-1"><i class="fa-brands fa-tumblr"></i></button>
               </div>
               <div className="col-sm text-center" style={{fontSize:"1rem"}}>{author}</div>
               </div> 
            </div>  
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Display
