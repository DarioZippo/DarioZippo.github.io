import { Background } from '../background/Background';
import { sectionPaddingBottom } from '../layout/Common';
import { Section } from '../layout/Section';
import { ITabProps } from '../layout/Tabs';
import { MinorProjectFeature, MinorProjectsShowcase, ProjectFeature } from './projectsTab';

const majorProjects = [
  <ProjectFeature
    key={0}
    title="Tilevania"
    //link="https://rzippo.github.io/nancy/"
    description="A 2D action-platform."
    image="/assets/images/2D_Games/Tilevania.png"
    reverse={true}
  />,
  <ProjectFeature
    key={1}
    title="Laser Defender"
    //link="https://www.ecdata.com/wanraptor-network-emulator.html"
    description="A 2D shooter with a spaceship."
    image="/assets/images/2D_Games/Laser_Defender_Gameplay.png"
    reverse={false}
  />,
  <ProjectFeature
    key={2}
    title="Snowboarder"
    //link="https://apps.microsoft.com/store/detail/mdf-to-iso/9PCZBVLLDSX4"
    description="A 2D game whiere the player controls a snowboarder."
    image="/assets/images/2D_Games/Snowboarder.png"
    reverse={true}
  />,
  <ProjectFeature
    key={3}
    title="Delivery Driver"
    //link="https://apps.microsoft.com/store/detail/mdf-to-iso/9PCZBVLLDSX4"
    description="A 2D game where the player transports packages using."
    image="/assets/images/2D_Games/Delivery_Driver.png"
    reverse={false}
  />,
  <ProjectFeature
    key={4}
    title="Quiz Master"
    //link="https://apps.microsoft.com/store/detail/mdf-to-iso/9PCZBVLLDSX4"
    description="A quiz game with timers."
    image="/assets/images/2D_Games/Quiz_Master.png"
    reverse={true}
  />,
  <ProjectFeature
    key={5}
    title="Memory"
    //link="https://apps.microsoft.com/store/detail/mdf-to-iso/9PCZBVLLDSX4"
    description="The classic card game."
    image="/assets/images/2D_Games/Memory.png"
    reverse={false}
  />,
];

const minorProjects = [
  <MinorProjectFeature
    key={0}
    title="Fire Emblem fan-game"
    description={
      "A web-game developed in HTML-CSS-Javascript with Ranking System and game-shop scripted in PHP and MySQL."
    }
  />,
  <MinorProjectFeature
    key={1}
    title="Zelda fan-game"
    //link="https://rzippo.github.io/nancy/"
    description={
      "A PC Game developed in Java, with Raking System via MySql database and a Log-Server to record the client's activities."
    }
  />
];

export const gameProjects2DTab: ITabProps = {
  title: '2D Games',
  route: '/2DProjects',
  content: [
    <Section yPadding={sectionPaddingBottom}>{majorProjects}</Section>,
    <Background color="bg-sky-800">
      <Section title="And others...">
        <MinorProjectsShowcase>{minorProjects}</MinorProjectsShowcase>
      </Section>
    </Background>,
  ],
};