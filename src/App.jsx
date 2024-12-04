import './App.css'
import { PriceCard } from './component/Price'
import { Tree } from './component/Tree'
import { Girl } from './component/Girl'
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
    
    </>
  )
}

export default App
