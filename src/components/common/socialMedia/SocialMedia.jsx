import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
 
  
  { icon: faInstagram, link: "https://www.instagram.com/fahad_fasill/" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/mohammad-fazil-b4a445332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon:faWhatsapp, link:"https://wa.me/6381830220?text=Hello%20I%20am%20interested%20in%20your%20services"}

];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
