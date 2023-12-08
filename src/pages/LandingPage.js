import { React } from "react";
import background1 from "../assets/images/background1LandingPage.png";
import tagline from "../assets/images/TaglineLandingPage.png";
import logo1 from "../assets/images/Landing-Logo-1.png";
import logo2 from "../assets/images/Landing-Logo-2.png";
import logo3 from "../assets/images/Landing-Logo-3.png";
import EmotionTag from "../components/common/Landing/EmotionTag";
import emotionDepress from "../assets/images/emotion_depression.png";
import emotionMind from "../assets/images/emotion_mind.png";
import emotionHeart from "../assets/images/emotion_heart.png";
import emotionLife from "../assets/images/emotion_life.png";
import StartIcon from "../assets/svg/StartIcon";
import InfoContainer from "../components/common/Landing/InfoContainer";
import AvatarIcon from "../assets/images/AvatarIcon.png";
import icontag7 from "../assets/images/IconTag7.png";
import icontag8 from "../assets/images/IconTag8.png";
import icontag9 from "../assets/images/IconTag9.png";
import icontag10 from "../assets/images/IconTag10.png";
import icontag11 from "../assets/images/IconTag11.png";
import icontag12 from "../assets/images/IconTag12.png";

const LandingPage = () => {
  return (
    <div className="bg-bgColor">
      <div className="flex pb-[97px]">
        <div className="ml-[102px] -w-1/3 ">
          <img src={background1} alt="background1" />
        </div>
        <div className="w-2/3">
          <img src={tagline} alt="tagline" />
        </div>
      </div>
      <div className="bg-white pb-[72px]">
        <div className="flex justify-center items-center pt-16 mb-5 ">
          <h1 className="text-4xl font-bold">Getting Started</h1>
        </div>

        <div className="flex justify-center lg:justify-around flex-wrap lg:flex-nowrap">
          <div className="flex flex-col items-center mx-32 lg:ml-44">
            <img
              src={logo1}
              alt="logo1"
              style={{
                width: `248px`,
                height: `248px`,
              }}
            />
            <span className="text-[24px] text-center font-bold mt-2 ">
              Get <span className="text-primaryBlue ">Online Consulting</span>
            </span>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              src={logo3}
              alt="logo3"
              style={{
                width: `248px`,
                height: `248px`,
              }}
            />
            <span className="text-[24px] text-center font-bold mt-2 ">
              Join <span className="text-primaryBlue">Group Therapy </span>
              in distance
            </span>
          </div>
          <div className="flex flex-col items-center mx-32  lg:mr-44">
            <img
              src={logo2}
              alt="logo2"
              style={{
                width: `248px`,
                height: `248px`,
              }}
            />
            <span className="text-[24px] text-center font-bold mt-2 mx-8">
              <span className="text-primaryBlue">Reflect </span>
              your process
            </span>
          </div>
        </div>
      </div>
      {/* Part 3 */}
      <div className="pb-[156px]">
        <div className="flex justify-center items-center pt-16 ">
          <h1 className="text-4xl font-bold pb-[92px]">Always by your side</h1>
        </div>
        <div className="flex phone:justify-center lg:justify-between flex-wrap lg:flex-nowrap">
          <div className="lg:ml-[120px] phone:pb-5 md:pr-5 lg:pr-0">
            <EmotionTag
              imgSrc={emotionDepress}
              Title="Emotional Issues"
              Description="Coping with stress and depression"
              borderColor="black"
              innerCircleColorStyle="white"
            />
          </div>
          <div className="phone:pb-5 ">
            <EmotionTag
              imgSrc={emotionHeart}
              Title="Relationship"
              Description="Resolving conflicts and divorce"
              borderColor="#F5F3F7"
              backgroundColor="#DFE1F9"
            />
          </div>
          <div className="phone:pb-5 md:pr-5 lg:pr-0">
            <EmotionTag
              imgSrc={emotionLife}
              Title="Life adjustments"
              Description="Helping with life transitions and rehabilitation"
              borderColor="black"
            />
          </div>
          <div className="phone:pb-5 md:pt-0  lg:mr-[120px]">
            <EmotionTag
              imgSrc={emotionMind}
              Title="Mental disorder"
              Description="Providing professional therapy for behavioral challenges"
              borderColor="#F5F3F7"
              backgroundColor="#DFE1F9"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E1EEFF] flex pb-[156px] flex-wrap lg:flex-nowrap">
        <div className="w-full flex lg:w-1/2 pt-[156px] pl-[110px] pr-[108px]">
          <div>
            <h1 className="text-[48px] font-bold pb-[22px]">
              What <span className="text-primaryBlue"> Our Member's </span>{" "}
              Saying About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
            <div class="relative flex pt-[34px] items-center">
              <img src={icontag7} alt="icontag7" class="relative z-10" />
              <img src={icontag8} alt="icontag8" class="relative z-20 -ml-4" />
              <img src={icontag9} alt="icontag9" class="relative z-30 -ml-4" />
              <img
                src={icontag10}
                alt="icontag10"
                class="relative z-40 -ml-4"
              />
              <img
                src={icontag11}
                alt="icontag11"
                class="relative z-50 -ml-4"
              />
              <img
                src={icontag12}
                alt="icontag12"
                class="relative z-50 -ml-4"
              />
              <span className="ml-[27px] font-bold">100+ Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 pt-[156px] ml-[110px] lg:ml-0">
          <div className="  w-[590px] h-[305px] rounded-[20px] border-2 bg-white ">
            <div className="flex pt-[49px] pl-[52px]">
              <img src={AvatarIcon} alt="avatarIcon" />
              <div className="ml-[18px] flex flex-col">
                <span className="text-sm font-bold">Tuan Anh</span>
                <span className="text-xs">12/4/17</span>
              </div>
              <div className="flex ml-auto mr-[44px]">
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
              </div>
            </div>
            <div className="mt-[52px] flex justify-center items-center pl-[52px]">
              <p className=" text-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem velit viverra amet faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem velit viverra amet faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-[66px]">
          <h1 className="text-[38px]">
            <span>
              Choose <span className="font-bold ">MindHeal</span>
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center pb-[203px] ">
          <div className="pr-[20px] pb-[20px]">
            <InfoContainer
              number="01"
              title="Convenience"
              description="Online Therapy Provides Scheduling Flexibility."
            />
          </div>
          <div className="pr-[20px] pb-[20px] lg:pb-0">
            <InfoContainer
              number="02"
              title="Anonymity"
              description="Online Settings Allow for Increased Privacy"
            />
          </div>
          <div className="pr-[20px] pb-[20px] lg:pb-0">
            <InfoContainer
              number="03"
              title="Accessibility"
              description="Online Settings Allow for Increased Privacy"
            />
          </div>
          <div className="pr-[20px] pb-[20px] lg:pb-0">
            <InfoContainer
              number="04"
              title="Affordability"
              description="Online Sessions Are Typically More Affordable."
            />
          </div>
          <div className="pr-[20px] pb-[20px] lg:pb-0 ">
            <InfoContainer
              number="05"
              title="Options"
              description="A Wider Range of Therapists Are Available Online."
            />
          </div>
          <div className="pr-[20px] pb-[20px] lg:pb-0">
            <InfoContainer
              number="06"
              title="Approachability"
              description="Messaging May Feel Less Intimidating Than In-Person Therapy."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
