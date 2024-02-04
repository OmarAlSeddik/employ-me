import Image from "next/image";

const Core = () => {
  return (
    <section className="container flex flex-col gap-8 py-24 text-base">
      <h2 className="font-header-1 text-center text-header-color">
        Our Core Business
      </h2>
      <div className="flex flex-wrap gap-8">
        <div className="flex h-[50rem] w-[25rem] flex-col gap-4 rounded shadow-xl">
          <div className="relative h-[18.75rem] w-full overflow-hidden rounded-t">
            <Image
              src="/services/recruitment-and-onboarding.webp"
              alt="Recruitment and Onboarding"
              fill
            />
          </div>
          <div className="flex flex-col gap-4 px-8 py-4">
            <h3 className="font-header-3 text-header-color">
              Recruitment & Onboarding:
            </h3>
            <p>
              We offer an online recruitmemt service that helps in building our
              clients employer brands.
            </p>
          </div>
        </div>
        <div className="flex h-[50rem] w-[25rem] flex-col gap-4 rounded shadow-xl">
          <div className="relative h-[18.75rem] w-full overflow-hidden rounded-t">
            <Image
              src="/services/learning-and-development.webp"
              alt="Learning and Development"
              fill
            />
          </div>
          <div className="flex flex-col gap-4 px-8 py-4">
            <h3 className="font-header-3 text-header-color">
              Learning and Development:
            </h3>
            <p>
              We offer free online training cources for our newly hired talents
              to fill the performance needs.
            </p>
          </div>
          <div className="relative h-[5rem] w-full overflow-hidden rounded-t">
            <Image
              src="/services/workforce-analytics.webp"
              alt="Workforce Analytics"
              fill
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col gap-4 px-8 py-4">
            <h3 className="font-header-3 text-header-color">
              Workforce Analytics:
            </h3>
            <p>
              We provide insights into employee data, such as turnover rates,
              skills gaps, and performance metrics, which can help organizations
              make informed decisions about talent management strategies.
            </p>
          </div>
        </div>
        <div className="flex h-[50rem] w-[25rem] flex-col gap-4 rounded shadow-xl">
          <div className="relative h-[18.75rem] w-full overflow-hidden rounded-t">
            <Image
              src="/services/succession-planning.webp"
              alt="Succession Planning"
              fill
            />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <h3 className="font-header-3 text-header-color">
              Succession Planning:
            </h3>
            <p>
              We help organizations plan for the future by identifying and
              developing top performers who can fill key leadership positions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
