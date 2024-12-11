import '../styling.css/Team.css'
export const Team = ({ image, para, heading, img, imga }) => {
    return (
        <div>
            <div className='team-members'>
                <img className='team-img' src={image} alt="Gernal Manager" />
                <p> {para}</p>
                <h5>{heading}</h5>
            </div>
            <div>
                <img className='logo' src={img} alt="facebook-logo" />
                <img className='logo' src={imga} alt="twitter-logo" />
            </div>
        </div>
    )
}