import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { GetLinks } from "./Links";
import { Logo } from "./Logo";

const iconsClass = "max-h-6 md:max-h-8";
const liClass = "mr-3 md:mr-5 last:mr-0";

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0">
      <Background color="bg-slate-400">
        <Section yPadding="py-1 sm:py-4">
          <NavbarTwoColumns key="navbar" logo={<Logo xl/>}>
            {GetLinks(iconsClass).map((l, i) => <li className={liClass} key={i}>
              <div className={iconsClass}>{l}</div>
            </li>)}
          </NavbarTwoColumns>
        </Section>
      </Background>
    </div>
  )
}