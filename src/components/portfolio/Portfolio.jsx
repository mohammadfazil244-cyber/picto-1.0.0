import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="certificate"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">My Certifications</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
           Here's the Certificaitons I have completed so far!
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          
         
        </div>
      </div>


      <div className="flex justify-center">
  <img 
    src="./assets/images/certificates/certificate wp.png" 
    alt="WP Certificate" 
    className="w-1/2 h-auto rounded-lg shadow-md"
  />
</div>

     

  

     

        

      <div className="text-center">
        <a
          href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-26116153-33df-472b-9e68-e86fc96918b5.pdf"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
         View
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
