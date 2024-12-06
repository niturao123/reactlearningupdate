import '../styling.css/Team.css'
export const Team = ({image, para, heading, img,imga}) => {
    return (
                    <div>
                <img className='team-img' src= {image} alt="Gernal Manager" />
                <p> {para}</p>
                <h5>{heading}</h5>
                <div>
                <img src= {img} alt="facebook-logo" />
                    <img  src= {imga} alt="twitter-logo" />
                </div>
            </div>
    )
}