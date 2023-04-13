import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import GlassMorphicButton from "@/components/Utils/GlassMorphicButton";
import { heroDescription, heroMain, teamName } from "@/config";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[60%] flex flex-col justify-center items-center my-8">
      <h1 className="text-5xl text-center font-bold tracking-wider mt-16 mb-12">
        {heroMain}
      </h1>

      <p className="text-[#8B8B8B] text-center m-3 mb-8 text-lg w-[80%]">
        {heroDescription}
      </p>

      <Link
        className=" flex items-center justify-center mt-2 py-1 px-4 transition-all duration-200 ease-in-out rounded-lg bg-[#1890ff]"
        href="/dashboard"
      >
        Go to App
      </Link>

      <Link
        className=" flex items-center justify-center mt-2 border border-white hover:rounded-2xl py-1 px-4 transition-all duration-200 ease-in-out rounded-lg"
        href="/dashboard"
      >
        Dashboard
      </Link>

      <div className="mt-8 mb-8">
        <GlassMorphicButton
          leftText="Powered By"
          logo="/logo.png"
          rightText={teamName}
          rightColor="#E6007A"
        />
      </div>
    </div>
  );
};

export default Hero;
