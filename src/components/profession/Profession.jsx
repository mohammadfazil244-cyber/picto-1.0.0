import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I am a Passionate Web Developer creating fast, responsive, and user-friendly websites at affordable cost",
  },
  {
    id: 2,
    title: "Content Creation and Editing",
    description:
      "I also have some experience in content creation and Editing , It also helps to create your Business opportunities on Digital Forum .",
  },
 
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
           I create simple and responsive websites using WordPress, HTML, CSS, and JavaScript. I enjoy turning ideas into web pages that are easy to use, mobile-friendly, and visually appealing.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
          My focus is on building clean designs, adding basic interactivity, and helping individuals or small businesses get started with their online presence.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
