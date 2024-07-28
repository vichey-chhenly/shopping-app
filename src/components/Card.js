function Card({imageURL, title, price}){
    return(
        <>
            <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
                <img 
                    src={imageURL ?? "https://picsum.photos/640/640?r=5369"}
                    className="card-img-top" alt="card image" 
                />
                <div className="card-body">
                    <h4 className="text-center">{title}</h4>
                    <h5 className="text-danger text-center fs-4 fw-medium">$ {price}</h5>
                </div>
            </div>
        </>
    )
}
export default Card

// <div className="card shadow-sm bg-body-tertiary" style={{height: "26rem"}}>
//                     <img src={props.imageURL} className="card-img-top" alt="card image"/>
//                     <div className="card-body">
//                         <h6 className="text-center">{props.title}</h6>
//                         <p className="text-danger text-center fs-5 fw-medium">$ {props.price}</p>
//                         <p className="card-text">{props.desc}</p>
//                     </div>
//                 </div>
            {/* <p>Hello! Chhenly</p> */}