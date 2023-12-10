import React from "react";
import Text from "../components/common/Text";
import EmotionTag from "../components/Landing/EmotionTag";
import StartIcon from "../assets/svg/StartIcon";
import InfoContainer from "../components/Landing/InfoContainer";
import Logo from "../assets/svg/logo";
import NavBar from "../components/common/NavBar";

const Landing = () => {
  return (
    <div className="flex flex-col bg-bgColor">
      <NavBar />
      <div className="bg-bgColor p-20 flex justify-around">
        <div className="flex justify-center">
          <img
            className="object-cover"
            src={require("../assets/images/background1LandingPage.png")}
            alt="background1"
          />
        </div>
        <div className="flex flex-col justify-around items-center text-center max-w-xl">
          <Text variant="text-4xl" weight="bold">
            Choose{" "}
            <Text variant="text-4xl" weight="bold" className="text-[#2B50D8]">
              Life,
            </Text>{" "}
            Protect Your{" "}
            <Text variant="text-4xl" weight="bold" className="text-[#2B50D8]">
              Mental Health
            </Text>
          </Text>

          <div className="flex justify-center items-center gap-6">
            <Logo />
            <Text variant="text-2xl" weight="bold">
              MindHeal
            </Text>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 flex flex-col items-center justify-center">
        <Text variant="text-3xl" weight="bold">
          Getting Started
        </Text>

        <div className="flex gap-32">
          {/* Getting Started Container 1 */}
          <div className="flex flex-col items-center w-1/3 text-center">
            <img
              src={require("../assets/images/Landing-Logo-1.png")}
              alt="logo1"
            />
            <Text variant="text-xl" weight="bold">
              Get{" "}
              <Text
                variant="text-xl"
                weight="bold"
                className="text-primaryBlue"
              >
                Online Consulting
              </Text>
            </Text>
          </div>
          {/* Getting Started Container 2 */}
          <div className="flex flex-col items-center w-1/3 text-center">
            <img
              src={require("../assets/images/Landing-Logo-3.png")}
              alt="logo3"
            />
            <Text variant="text-xl" weight="bold">
              Join{" "}
              <Text
                variant="text-xl"
                weight="bold"
                className="text-primaryBlue"
              >
                Group Therapy{" "}
              </Text>
              in distance
            </Text>
          </div>
          {/* Getting Started Container 3 */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={require("../assets/images/Landing-Logo-2.png")}
              alt="logo2"
            />
            <Text variant="text-xl" weight="bold">
              <Text
                variant="text-xl"
                weight="bold"
                className="text-primaryBlue"
              >
                Reflect
              </Text>{" "}
              your process
            </Text>
          </div>
        </div>
      </div>

      <div className="py-20 flex flex-col justify-center items-center gap-20">
        <Text variant="text-3xl" weight="bold">
          Always by your side
        </Text>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-10">
          <EmotionTag
            border="black"
            title="Emotional Issues"
            description="Coping with stress and depression"
            image={require("../assets/images/emotion_depression.png")}
          />

          <EmotionTag
            bg="purple"
            title="Relationship"
            description="Resolving conflicts and divorce"
            image={require("../assets/images/emotion_heart.png")}
          />

          <EmotionTag
            border="black"
            title="Life Adjustments"
            description="Helping with life transitions and rehabilitation"
            image={require("../assets/images/emotion_life.png")}
          />

          <EmotionTag
            bg="purple"
            title="Mental Disorder"
            description="Providing professional therapy for behavioral challenges"
            image={require("../assets/images/emotion_mind.png")}
          />
        </div>
      </div>

      {/* Section 4: What member said? */}
      <div className="bg-[#E1EEFF] flex phone:flex-wrap py-20 justify-around">
        <div className="w-1/2 flex flex-col max-w-lg gap-6">
          {/* Section 4 : Left view */}
          <div className="flex flex-col gap-6">
            <Text variant="text-3xl" className="leading-24" weight="bold">
              What{" "}
              <Text
                variant="text-3xl"
                weight="bold"
                className="text-primaryBlue"
              >
                Our Member's
              </Text>{" "}
              Saying About Us
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </Text>
          </div>

          <div class="relative flex items-center">
            <img
              src={require("../assets/images/IconTag7.png")}
              alt="icontag7"
              class="relative z-10"
            />
            <img
              src={require("../assets/images/IconTag8.png")}
              alt="icontag8"
              class="relative z-20 -ml-4"
            />
            <img
              src={require("../assets/images/IconTag9.png")}
              alt="icontag9"
              class="relative z-30 -ml-4"
            />
            <img
              src={require("../assets/images/IconTag10.png")}
              alt="icontag10"
              class="relative z-40 -ml-4"
            />
            <img
              src={require("../assets/images/IconTag11.png")}
              alt="icontag11"
              class="relative z-50 -ml-4"
            />
            <img
              src={require("../assets/images/IconTag12.png")}
              alt="icontag12"
              class="relative z-50 -ml-4"
            />
            <Text weight="semibold" className="px-5">
              100+ Reviews
            </Text>
          </div>
        </div>
        {/* Section 4 : Right view */}
        <div className="w-1/2 max-w-lg bg-white rounded-2xl p-10 flex flex-col gap-6">
          <div className="flex justify-between ">
            <div className="flex gap-4">
              <img
                src={require("../assets/images/AvatarIcon.png")}
                alt="avatarIcon"
              />
              <div className="flex flex-col justify-center gap">
                <Text variant="text-sm" weight="semibold">
                  Jane Cooper
                </Text>
                <Text variant="text-xs" className="text-gray-500">
                  12/4/17
                </Text>
              </div>
            </div>
            <div className="flex">
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
            </div>
          </div>

          <Text variant="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
            viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sem velit viverra amet
            faucibus.
          </Text>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-20 gap-20">
        <Text variant="text-3xl">
          Choose{" "}
          <Text variant="text-3xl" weight="bold">
            MindHeal
          </Text>
        </Text>
        <div className="grid grid-cols-3 justify-center gap-6">
          <InfoContainer
            number="01"
            title="Convenience"
            description="Online Therapy Provides Scheduling Flexibility."
          />

          <InfoContainer
            number="02"
            title="Anonymity"
            description="Online Settings Allow for Increased Privacy"
          />

          <InfoContainer
            number="03"
            title="Accessibility"
            description="Online Settings Allow for Increased Privacy"
          />

          <InfoContainer
            number="04"
            title="Affordability"
            description="Online Sessions Are Typically More Affordable."
          />

          <InfoContainer
            number="05"
            title="Options"
            description="A Wider Range of Therapists Are Available Online."
          />

          <InfoContainer
            number="06"
            title="Approachability"
            description="Messaging May Feel Less Intimidating Than In-Person Therapy."
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
