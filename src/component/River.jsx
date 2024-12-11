import '../styling.css/River.css'
export const River = ()=>{
    return(
        <div className='riverDiv'>
            <div>
                <h5>Business Services For Companies</h5>
                <p>Aria provides the most innovative and customized business services in the industry. Our <a href="#">Services</a> section shows how flexible we are for all types of budgets.</p>
                <h6>Business Development 100%</h6>
                <div className='average'></div>
                <h6>Opportunity Spotting 76%</h6>
                <div className='opportunity-div'></div>
                <h6>Online Marketing 90%</h6>
                <div className='onlineMarketing-div'></div>
                <div className='imageDiv'>
                  <img src="river.png" alt="A River image"/>  
                </div>
            </div>
        </div>
    )
}