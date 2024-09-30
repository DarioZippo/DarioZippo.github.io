import { Background } from '../background/Background';
import { sectionPaddingBottom } from '../layout/Common';
import { Section } from '../layout/Section';
import { ITabProps } from '../layout/Tabs';
import { ProjectFeature, MinorProjectsShowcase, MinorProjectFeature} from './projectsTab';

const majorProjects = [
  <ProjectFeature
    key={0}
    title="Argon Assault"
    //link="https://rzippo.github.io/nancy/"
    description="Binary shooter inspired by StarFox."
    image="/assets/images/3D_Games/Argon_Assault.png"
    reverse={true}
  />,
  <ProjectFeature
    key={1}
    title="Realm Rush"
    //link="https://www.ecdata.com/wanraptor-network-emulator.html"
    description="A tower defense game with path-finding algorithms."
    image="/assets/images/3D_Games/Realm_Rush.png"
    reverse={false}
  />,
  <ProjectFeature
    key={2}
    title="Zombie Runner"
    //link="https://apps.microsoft.com/store/detail/mdf-to-iso/9PCZBVLLDSX4"
    description="FPS game with zombies."
    image="/assets/images/3D_Games/Zombie_Runner.png"
    reverse={true}
  />,
  <ProjectFeature
    key={3}
    title="Project Boost"
    //link="https://www.ecdata.com/wanraptor-network-emulator.html"
    description="A game whith a rocket control system."
    image="/assets/images/3D_Games/Project_Boost.png"
    reverse={false}
  />,
  <ProjectFeature
    key={4}
    title="Isometric multiplayer games"
    //link="https://www.ecdata.com/wanraptor-network-emulator.html"
    description="An isometric local multiplayer game based on combo systems for triggering skills."
    image="/assets/images/3D_Games/work_in_progress.png"
    reverse={true}
  />,
];

/*
function GetMajorProjects() {
  return (      
      majorProjects.map((majorProject,index) => {
      index % 2 === 0 
      ? <Background color = "bg-sky-700">{majorProject}</Background>
      : <Background color = "bg-sky-600">{majorProject}</Background>
      index++;
    })
  )
}
*/

const minorProjects = [
  <MinorProjectFeature
    key={0}
    title="Third Person prototipe"
    description={
      "A third person project with interactions with enviroment and inventory system."
    }
  />,
  <MinorProjectFeature
    key={1}
    title="Top-Down prototipe"
    //link="https://rzippo.github.io/nancy/"
    description={
      'A top-down project with movement and interactions via mouse inputs, and with save system.'
    }
  />,
];

export const gameProjects3DTab: ITabProps = {

  title: '3D Games',
  route: '/3DProjects',
  content: [
    <Section yPadding={sectionPaddingBottom}>{majorProjects}</Section>,
    <Background color="bg-sky-800">
      <Section title="And many others, for fun">
        <MinorProjectsShowcase>{minorProjects}</MinorProjectsShowcase>
      </Section>
    </Background>,
  ],
};

/*
const minorProjects = [
  <MinorProjectFeature
    key={0}
    title="This website"
    description={
      "Built with Next.js, React and many customizations on top of CreativeDesignsGuru's template."
    }
  />,
  <MinorProjectFeature
    key={1}
    title="Nancy documentation website"
    link="https://rzippo.github.io/nancy/"
    description={
      'Built with Docusaurus, it uses a customized XMLDoc to Markdown conversion to automatically generate documentation pages from the C# source code.'
    }
  />,
  <MinorProjectFeature
    key={2}
    title="Holy Cross"
    link="https://github.com/rzippo/holy-cross"
    description={
      'An ad-hoc macro engine for the videogame Tunic, designed to automate solving complex in-game puzzles.'
    }
  />,
  <MinorProjectFeature
    key={3}
    title="Don't Shout!"
    link="https://play.google.com/store/apps/details?id=rzippo.nonurlare&hl=it"
    description={
      'A simple Android app that buzzes you when you shout, to help you keep your voice down.'
    }
  />,
  <MinorProjectFeature
    key={4}
    title="drawio-latex"
    link="https://github.com/rzippo/drawio-latex"
    description={
      'A LaTeX package designed to improve the workflow for drawing figures in papers.'
    }
  />,
  <MinorProjectFeature
    key={5}
    title="Sudoku and Picross Solvers"
    link="https://github.com/rzippo/picross-solver"
    description={
      'Back-tracking solvers for two popular puzzles, written to experiment with profiling and parallelization.'
    }
  />,
];
*/