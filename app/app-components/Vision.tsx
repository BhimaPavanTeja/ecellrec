import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import ShineBorder from "@/components/ui/shine-border";

export async function Vision() {
  return (
    <div className="flex items-center justify-center h-[500px] w-full">
      <ShineBorder className="relative flex h-auto w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-md bg-background p-10 md:shadow-xl" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Our Vision<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Students to{" "}
            <span className="text-[#5046e6]">Enterprenuers</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <p>
              At E-Cell, our vision is to foster an entrepreneurial spirit among
              students and provide them with the resources and support they need
              to turn their innovative ideas into successful ventures. We aim to
              create a vibrant ecosystem where creativity, collaboration, and
              entrepreneurship thrive.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#33e256] hover:bg-purple-700 text-black hover:text-white border-spacing-1 transition-all ease-in-out">Explore</Button>
        </BoxReveal>
      </ShineBorder>
    </div>
  );
}
