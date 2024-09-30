import { bioPaddingTop, sectionPaddingBottom, skillsPaddingTop } from '../layout/Common';
import { Section } from '../layout/Section';
import { Tabs } from '../layout/Tabs';
import { gameProjects2DTab } from './gameProjects2DTab';
import { gameProjects3DTab } from './gameProjects3DTab';
import { Logo } from './Logo';
import { IconsRow } from '../navigation/IconsRow';
import { GetFirstRowIcons, GetSecondRowIcons } from './Icons';
import { Background } from '../background/Background';
//import { teachingTab, teachingTab } from './teachingTab';

const iconsClass = "max-h-6 md:max-h-8";
const liClass = "mr-3 md:mr-5 last:mr-0";

export function Main() {
  return (
    <>
    <Background color="bg-slate-700">
      <Section
        title="Bio"
        yPadding={[bioPaddingTop, sectionPaddingBottom]}
        description={<>
          <span>
            I am computer engeneer gradueted in University of Pisa, with strong passion and experience on game-development, Software Engeneering and programming in general.
          </span>
        </>}
      >
      </Section>
    </Background>
    
    <Background color="bg-sky-800">
      <Section
        title="Skills"
        yPadding={[skillsPaddingTop, sectionPaddingBottom]}
        description={
        <>
          <IconsRow key="navbar" logo={<Logo xl/>}>
              {GetFirstRowIcons().map((l, i) => <li className={liClass} key={i}>
                <div className={iconsClass}>{l}</div>
              </li>)}
          </IconsRow>
        </>}
      >
      </Section>
    
      <Section
        yPadding={[skillsPaddingTop, sectionPaddingBottom]}
        description={
        <>
            <IconsRow key="navbar" logo={<Logo xl/>}>
                {GetSecondRowIcons().map((l, i) => <li className={liClass} key={i}>
                  <div className={iconsClass}>{l}</div>
                </li>)}
            </IconsRow>
        </>}
      >
      </Section>
    </Background>

    <Background color="bg-slate-700">
      <Tabs 
        tabs={[
          //skillsTab,
          //teachingTab,
          gameProjects2DTab,
          gameProjects3DTab
        ]}
      />
    </Background>
  </>
  );
}