 const delay =async(time)=>{
    return new Promise((resolve)=>setTimeout(resolve,time))
  }

  const Solutions=async()=>{
    await delay(3000)
    return(
      <div className="content">
          <h2>-Solutions Page-</h2>
     </div>
    )
  }

  export default Solutions