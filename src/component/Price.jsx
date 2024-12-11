import "../styling.css/Price.css"
export const PriceCard = ({ image, heading, para, listItems, subheading }) => {
    return (

        <div>
        <div className="container">
            <img src={image} alt="A coffee cup" />
            <h2>{heading}</h2>
            <p>{para}</p>
            <ul>
                {
                    listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <h3> starting at  <span>{subheading} </span></h3>
        </div>
        <div>
        <button>DETAILS</button>
        </div>
        </div>

    )

}
