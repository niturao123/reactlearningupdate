import "../styling.css/Price.css"
export const PriceCard = ({image, heading, para, listIteam, subheading}) => {
    return(
        <div className="container">
        <img src={image} alt="A coffee cup"/>
        <h2>{heading}</h2>
        <p>{para}</p>
        <ul>
            {/* listItems.map(index.iteam)
              <li>{iteam.index}</li> */}
        </ul>
        <h3> starting at  <span>{subheading} </span></h3>
        <button>DETAILS</button>
        </div>

    )

}
