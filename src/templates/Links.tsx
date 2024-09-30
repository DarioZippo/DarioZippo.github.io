import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function GetLinks(className?: string){
  return (
  [ 
    <Link key="faGithub" href="https://github.com/DarioZippo">
      
        <FontAwesomeIcon className={className} height='32px' icon={faGithub} />  
      
    </Link>,
    <Link key="faLinkedin" href="https://www.linkedin.com/in/dario-zippo/">
      
        <FontAwesomeIcon className={className} height='32px' icon={faLinkedin} />  
      
    </Link>,
    <Link key="faDiscord" href="https://discord.com/users/257979538129027083">
      
        <FontAwesomeIcon className={className} height='32px' icon={faDiscord} />  
      
    </Link>,
    /*
    <Link key="faGraduationCap" href="https://scholar.google.co.uk/citations?user=iR4wjugAAAAJ">
      <a>
        <FontAwesomeIcon className={className} height='32px' icon={faGraduationCap} />  
      </a>
    </Link>,
    */
    <Link key="faEnvelope" href="mailto:d.zippo@outlook.it">
      
        <FontAwesomeIcon className={className} height='32px' icon={faEnvelope} />  
      
    </Link>,
  ]);
}