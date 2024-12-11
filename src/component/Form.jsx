import '../styling.css/Form.css'
export const Form = ()=>{
  return(
    <div className='main-form-div'>
    <div className='form-div'>
        <div className='paraDiv'>
            <h2>Few Words About Aria</h2>
            <p>We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p>
        </div>
        <div className='link-div'>
        <div>
        <h2>Links</h2>
        <a href="#">Terms&Conditions</a><br></br>
        <a href="#">Privacy Policy</a><br></br>
        </div>
        <div>
            <h2>Tools</h2>
            <a href="#">businessgrowth.com</a><br></br>
            <a href="#">influencers.com</a><br></br>
            <a href="#">optimizer.net</a>
        </div>
        <div>
            <h2>Partners</h2>
            <a href="#">unicorns.com</a><br></br>
            <a href="#">staffmanager.com</a><br></br>
            <a href="#">association.gov</a>
        </div>
        </div>
    </div>
    <p className='footer-para'>Copyright © 2045 All rights reserved - By Inovatik</p>

    </div>
  )
}