import './App.css'
import { PriceCard } from './component/Price'
import { Tree } from './component/Tree'
import { Girl } from './component/Girl'
import { Team } from './component/Team'
import { Form } from './component/Form'
import { River } from './component/River'
import { Herobar } from './component/Herobar'
import { ProjectCard } from './component/Project'
function App() {
  return (
    <>
      <Herobar />
      <div className='priceDiv'>
        <div>
          <p className='services'>SERVICES</p>
          <h2 className='price-heading'>Choose The Service Package <br />
            That Suits Your Needs
          </h2>
        </div>

        <div className='pricecontainer'>
          <PriceCard image="cupimg.jpg"
            heading="Off The Ground Off The Ground"
            para="Perfect for fresh ideas or young startups, this package will help get the business off the ground"
            listItems={["Environment and competition", "Designing the marketing plan"]}
            subheading="$199"
          />
          <PriceCard image="bookimg.jpg"
            heading="Accelerated Growth"
            para="Use this service pack to give your company the necessary impulse to become an industry leader"
            listItems={["Business strategy planning", "Taking the planned actions"]}
            subheading="$299" />
          <PriceCard image="riverimg.jpg"
            heading="Market Domination"
            para="You already are a reference point in your industry now you need to learn about acquisitions"
            listItems={["Maintaining the leader status", "Acquisitions the right way"]}
            subheading="$299" />
        </div>
      </div>

      <Tree listItem={[1, 2, 3]} />
      <River />
      <Girl />
      <div className='team-mainDiv'>
        <div className='teamDiv'>
          <h3 className='team-heading'>Our Team Of Consultants</h3 >
          <p className='team-para'>We're only as strong and as knowledgeable as our team. So here are the men and <br /> women which help customers meet goals and grow companies</p>

        </div>
        <div className='team-div'>
          <Team image="team-1.png"
            para="John Whitelong "
            heading="General Manager"
            img="facebook.png"
            imga="twitter.png" />
          <Team image="team-2.png"
            para="Veronique Smith"
            heading="Business Developer"
            img="facebook.png"
            imga="twitter.png" />
          <Team image="team-3.png"
            para="Chris Zimerman"
            heading="Online Marketer"
            img="facebook.png"
            imga="twitter.png" />
          <Team image="team-4.png"
            para="Mary Villalonga"
            heading="Community Manager"
            img="facebook.png"
            imga="twitter.png" />
        </div>
      </div>
      <div className='project-mainDiv'>
        <div>
          <p className='project-para'>PROJECTS</p>
          <h2 className='project-h2'>Projects That We're Proud Of</h2>
        </div>
        <div className='project-btn'>
          <div>
            <button className='show-all'>ShOW ALL</button>
          </div>
          <div>
            <button className='project-button'>DESIGN</button>
          </div>
          <div>
            <button className='project-button'>DEVELOPMENT</button>
          </div>
          <div>
            <button className='project-button'>MARKETING</button>
          </div>
          <div>
            <button className='project-button'>SEO</button>
          </div>
        </div>
        <div className='project-div'>

          <ProjectCard
            image="project-1.jpg"
            title="Online Banking" />
          <ProjectCard
            image="project-2.jpg"
            title="Classic Industry" />
          <ProjectCard
            image="project-3.jpg"
            title="BoomBap Audio" />
          <ProjectCard
            image="project-4.jpg"
            title="Van Moose" /></div>

        <div className='project-div'>
          <ProjectCard
            image="project-5.jpg"
            title="Joy Moments" />
          <ProjectCard
            image="project-6.jpg"
            title="Spark Events" />
          <ProjectCard
            image="project-7.jpg"
            title="Casual Wear" />
          <ProjectCard
            image="project-8.jpg"
            title="Zazoo Apps" />
        </div>
      </div>
      <Form />


    </>
  )
}

export default App
