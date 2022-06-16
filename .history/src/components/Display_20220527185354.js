import React,{useState,useEffect} from 'react'



const Display = () => {
  const [fact , setFact] = useState([])
  useEffect(() => {
    const url = "http://quotes.stormconsultancy.co.uk/quotes/1.json";
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFact(data.quote)
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

            <button><i className="fas fa-quote-left fa-2x mb-4"></i></button>

            <p className="lead" ><strong>"{fact}"</strong></p>

            <hr/>
          <div className="row">
            
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
