import Image from "next/image";

const Awards = () => {
  return (
    <section className="container flex flex-col gap-8 py-24">
      <h2 className="font-header-1 text-center text-header-color">
        Our Awards
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative size-[25rem] max-w-[90%]">
            <Image
              src="/about-us/africa-2023-24.webp"
              alt="Africa Prestige Awards 2023/24 Winner"
              fill
              objectFit="contain"
            />
          </div>
          <p className="font-header-4 text-header-color">
            Employ me was Honored to be Announced as the Recruitment Management
            Company of the Year in Africa for the year 2023/ 24 by the PRESTIGE
            AWARDS.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative size-[25rem] max-w-[90%]">
            <Image
              src="/about-us/african-excellence-awards.webp"
              alt="African Excellence Awards"
              fill
              objectFit="contain"
            />
          </div>
          <p className="font-header-4 text-header-color">
            Employ me was Honored to be Announced as the Most Pioneering Online
            Talent Management Organization of the Year in Africa for the year
            2023/ 24 by the African Excellence AWARDS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
