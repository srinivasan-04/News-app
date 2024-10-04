import News from '../assets/News.jpg';
function Newsitem({title,description,src,url} ) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:News} style={{height:"190px",width:"330px"}} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):" No description available. Click the link to read the full article and stay informed."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem