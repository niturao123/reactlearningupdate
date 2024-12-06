import './App.css'
import { PriceCard } from './component/Price'
import { Tree } from './component/Tree'
import { Girl } from './component/Girl'
import { Team } from './component/Team'
function App() {
  return (
    <>
    <div className='pricecontainer'>
    <PriceCard image ="cupimg.jpg"
    heading = "Off The Ground Off The Ground"
    para = "Perfect for fresh ideas or young startups, this package will help get the business off the ground"
    listItems = {["Environment and competition", "Designing the marketing plan"]}
    subheading = "$199"
    />
    <PriceCard image = "bookimg.jpg"
    heading = "Accelerated Growth"
    para = "Use this service pack to give your company the necessary impulse to become an industry leader"
    listItems = {["Business strategy planning", "Taking the planned actions"]}
    subheading= "$299"/>
    <PriceCard image= "riverimg.jpg"
    heading= "Market Domination"
    para = "You already are a reference point in your industry now you need to learn about acquisitions"
    listItems = {["Maintaining the leader status", "Acquisitions the right way"]}
    subheading= "$299"/>
    </div>
    <Tree/>
    <Girl/>
    <div className='team-div'>
      {/* <h3 className='team-heading'>Our Team Of Consultants</h3 >
      <p className='team-para'>We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies</p> */}
    <Team image = "team-1.png"
    para = "John Whitelong "
    heading ="General Manager"
    img ="facebook.png"
    imga ="twitter.png"/>
    <Team image = "team-2.png"
    para = "Veronique Smith"
    heading = "Business Developer"
    img = "facebook.png"
    imga = "twitter.png"/>
    <Team image = "team-3.png"
    para = "Chris Zimerman"
    heading = "Online Marketer"
    img = "facebook.png"
    imga = "twitter.png"/>
    <Team image = "team-4.png"
    para = "Mary Villalonga"
    heading = "Community Manager"
    img = "facebook.png"
    imga = "twitter.png"/>
    </div>
    </>
  )
}

export default App
