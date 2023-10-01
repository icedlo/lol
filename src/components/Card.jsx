

const Card = (props) => {
   let badgeText
   if (props.openSpots===0){
    badgeText="SOLD OUTs"
   }else if(props.location==="online"){
    badgeText="ONLINE"
   }


  return(
  
    <div className='card'>
     {badgeText && <div className="cards--sold">{badgeText} </div>}
        <img src={`./images/${props.img}`}
        className='card--image'/>
        <div className='card--stats'>
            <img src='./images/star.png'/>
            <span>{props.rating}</span>
            <span className='gray'>{props.review}.</span>
            <span className='gray'>{props.country}</span>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'> From ${props.price} </span>/ person</p>


        </div>

    </div>
  )
}

export default Card