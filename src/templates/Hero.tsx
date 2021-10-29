import router from "next/router";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";
import { Wave } from "./Wave";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <Background color="bg-gradient-to-br from-hero-200 to-hero-100">
      <Section yPadding="pt-20 sm:pt-30 pb-20">
        <div className="flex flex-wrap items-center">
          <div className="sm:w-1/2 text-center">
            <img src={`${router.basePath}/assets/images/Hunchback.jpg`} />
          </div>
          <div className="w-full sm:w-1/2 px-6 sm:pl-12">
            <Logo className="w-1/3 mx-auto mb-6" />
            <h2 className="font-fjalla text-2xl sm:text-3xl text-white font-bold">
              Before there were the many regional summer theater camps, there
              was Upper Darby Summer Stage!
            </h2>
            <h3 className="text-1xl text-white">
              Since 1976 Upper Darby Summer Stage has been empowering young
              people and entertaining families. The program is recognized
              nationally as the gold-standard for youth theater programs.
            </h3>
          </div>
        </div>
      </Section>
      <Wave />
    </Background>
  );
};

export { Hero };
