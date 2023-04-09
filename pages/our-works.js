import Header from "../layout/header"
import Footer from "../layout/footer"
import ProjectCard from '../component/ProjectCard'

const OurWorks = () =>{
  return(
    <>
    <Header />
        <ProjectCard
          imgSrc="/images/works/3m.png"
          imgAlt="3m"
          title="3M"
        />
        <ProjectCard
          imgSrc="/images/works/select.png"
          imgAlt="SELECT"
          title="SELECT"
        />
        <ProjectCard
          imgSrc="/images/works/smouhagreen.png"
          imgAlt="smouhagreen"
          title="SMOUHA GREEN"
        />
          <ProjectCard
          imgSrc="/images/works/bunyan.png"
          imgAlt="bunyan"
          title="BUNYAN"
        />
         <ProjectCard
          imgSrc="/images/works/elriyadcastle.png"
          imgAlt="elriyadcastle"
          title="EL RIYAD CASTLE"
        />
         <ProjectCard
          imgSrc="/images/works/elghonemy.png"
          imgAlt="elghonemy"
          title="EL GHONEMY"
        />
         <ProjectCard
          imgSrc="/images/works/first.png"
          imgAlt="first"
          title="FIRST"
        />
         <ProjectCard
          imgSrc="/images/works/forward.png"
          imgAlt="forward"
          title="FORWARD"
        />
        <ProjectCard
          imgSrc="/images/works/iconic.png"
          imgAlt="iconic"
          title="ICONIC"
        />
         <ProjectCard
          imgSrc="/images/works/inspector.png"
          imgAlt="inspector"
          title="INSPECTOR"
        />
         <ProjectCard
          imgSrc="/images/works/mwa.png"
          imgAlt="mwa"
          title="MWA"
        />
         <ProjectCard
          imgSrc="/images/works/remax.png"
          imgAlt="remax"
          title="REMAX"
        />
        <ProjectCard
          imgSrc="/images/works/seif.png"
          imgAlt="seif"
          title="SEIF"
        />
        <ProjectCard
          imgSrc="/images/works/selectforward.png"
          imgAlt="selectforward"
          title="SELECT FORWARD"
        />
        <ProjectCard
          imgSrc="/images/works/sunray.png"
          imgAlt="sunray"
          title="SUN RAY"
        />
        <ProjectCard
          imgSrc="/images/works/valore.png"
          imgAlt="valorw"
          title="VALORE"
        />
   <Footer />
    </>
  )
}

export default OurWorks
