import { slugs, techs } from "@/data/index";
import IconCloud from "./ui/IconCloud";
import TechTag from "./ui/TechTags";

const Techs = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center  overflow-hidden  bg-black-100 px-6 py-15"
    >
      <div className="z-10 flex flex-col px-6 py-10 md:items-center md:justify-center">
      <h1 className="heading">
        Technical{" "}
        <span className="text-purple">skills</span>
      </h1>
      </div>
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-none ">
          <p className="text-center md:tracking-wider
                mb-4 text-sm md:text-lg lg:text-2xl">
            Building effective and innovative solutions requires the right
            technologies. I leverage a carefully selected set of modern tools
            and frameworks to bring these solutions to life, including:
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2 md:max-w-[600px] md:items-center md:justify-center ">
            {techs.map((tech) => (
              <TechTag
                key={tech.label}
                title={tech.label}
                gradientColor={tech.bgColor}
              />
            ))}
          </div>

          <div>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      
    </section>
  );
};
export default Techs;