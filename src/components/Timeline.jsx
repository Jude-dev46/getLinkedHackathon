import Thread from "../assets/thread.png";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";

const Timeline = () => {
  return (
    <section className="bg-blue-900 pt-10 sm:pt-16 lg:pt-4 h-[1300px]">
      <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="grid items-start justify-center grid-rows-1 gap-12 lg:grid-rows-2">
          <div className="relative flex flex-col self-start justify-center text-center">
            <h2 className="text-white font-bold text-4xl mb-3 font-sans">
              Timeline
            </h2>
          </div>
          <div className="relative lg:h-[1017px] lg:mt-[-450px] flex items-center gap-5 lg:gap-20">
            <div className="hidden lg:flex flex-col gap-28 justify-between self-start mt-32">
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  Hackathon announcement
                </p>
                <p className="text-white text-sm text-right">
                  The getLinked hackathon is formally announced
                  <br /> to the general public and team begin to get registered.
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  November 18, 2023
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  Team registration ends
                </p>
                <p className="text-white text-sm text-right">
                  interested candidates are no longer allowed to
                  <br /> register.
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  November 18, 2023
                </p>
                <p className="text-white text-sm text-right">
                  {/*  The getLinked hackathon is formally announced
                  <br /> to the general public and team begin to get registered.*/}
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  Getlinked Hackathon officially begins
                </p>
                <p className="text-white text-sm text-right">
                  Accepted teams can now proceed to build their
                  <br />
                  ground breaking projects.
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold mb-2 text-right">
                  Hackathon announcement
                </p>
              </div>
            </div>
            <img
              src={Thread}
              alt="the timeline"
              className="h-[970px] lg:h-full -ml-6"
            />
            <div className="flex flex-col h-[770px] lg:h[1017px] gap-12 lg:gap-20 self-center mt-[-165px] lg:mt-32">
              <div className="mb-5">
                <p className="text-blue-600 h-fit font-bold mb-2 text-left lg:hidden">
                  Hackathon announcement
                </p>
                <p className="text-white h-fit text-sm text-left lg:hidden">
                  The getLinked hackathon is formally announced
                  <br /> to the general public and team begin to get registered.
                </p>
                <p className="w-[230px] h-fit lg:w-full text-blue-600 font-bold mb-2 text-left">
                  November 18, 2023
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[230px] h-fit lg:w-full text-blue-600 font-bold mb-3 text-left">
                  Team registration begins
                </p>
                <p className="w-[230px] h-fit lg:w-full text-white text-sm text-left">
                  Interested teams can now show their interest in the
                  <br /> getLinked hackathon 1.0 2023 by proceeding to register.
                </p>
                <p className="text-blue-600 h-fit font-bold mb-2 text-left lg:hidden">
                  November 18, 2023
                </p>
              </div>
              <div className="mb-5">
                <p className="hidden h-fit lg:block w-[300px] lg:w-full text-blue-600 font-bold mb-3 text-left">
                  November 18, 2023
                </p>
                <div className="lg:hidden">
                  <p className="text-blue-600 h-fit font-bold mb-2 text-left">
                    Team registration ends
                  </p>
                  <p className="text-white h-fit text-sm text-left mb-3 lg:mb-0">
                    Interested candidates are no longer allowed to
                    <br /> register.
                  </p>
                  <p className="text-blue-600 h-fit font-bold mb-2 text-left lg:hidden">
                    November 18, 2023
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <p className="w-[230px] lg:w-full h-fit text-blue-600 font-bold -mt-5 mb-3 text-left">
                  Announcement of the accepted teams
                  <br />
                  and ideas
                </p>
                <p className="w-[230px] lg:w-full h-fit text-white text-sm text-left">
                  All teams whom idea has been accepted into getLinked tech
                  <br />
                  hackathon are formally announced
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[230px] lg:w-full h-fit text-blue-600 font-bold mb-3 text-left">
                  November 18, 2023
                </p>
              </div>
              <div className="mb-5">
                <p className="w-[230px] lg:w-full h-fit text-blue-600 font-bold mb-3 text-left">
                  Demo day
                </p>
                <p className="w-[230px] lg:w-full h-fit text-white text-sm text-left">
                  Teams get the opportunity to pitch their projects to Judges
                  <br />
                  The winner of the hackathon will also be announced on
                  <br /> this day
                </p>
              </div>
            </div>

            <img
              src={StarPu}
              alt="A shining star"
              className="absolute left-24 -top-8 lg:left-40 lg:top-12"
            />
            <img
              src={StarWhiteBig}
              alt="A shining star"
              className="absolute right-12 top-[520px] lg:right-40 lg:top-[400px]"
            />
          </div>
        </div>
      </div>
      {/* <div className="border-b-[.05px] text-white"></div> */}
    </section>
  );
};

export default Timeline;
