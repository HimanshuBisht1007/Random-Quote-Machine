import React,{useState,useEffect} from 'react'



const Display = () => {
  const [fact , setFact] = useState([])
  useEffect(() => {
    const url = "https://catfact.ninja/fact";
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFact(data.fact)
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

            <i className="fas fa-quote-left fa-2x mb-4"></i>

            <p className="lead" >{Element.fact}</p>

            <hr/>

            <div className="d-flex justify-content-between">
              <p className="mb-0">Thomas Edison</p>
              <h6 className="mb-0"><span className="badge rounded-pill"
                  style={{backgroundColor: "rgba(0,0,0, 0.2)"}}>876</span> <i className="fas fa-heart ms-2"></i>
              </h6>
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
