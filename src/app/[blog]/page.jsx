export default function Blog({ params,serarchParams }) {
  // [blog] => params.blog

  // if(serarchParams.error === true){
  //   throw new Error("This is an error") 
  // }

  return (
    <div className="content">
      <h2>-Blog Page-</h2>
      <br />
      <br />
      <p>params: {params.blog}</p>
    </div>
  );
}
