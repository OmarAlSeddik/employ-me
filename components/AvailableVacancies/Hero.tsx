const Hero = () => {
  return (
    <section className="h-[32rem] rounded-b-3xl bg-[url('../public/available-vacancies/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex h-full flex-col items-start justify-center gap-4">
        <h1 className="font-header-1">Available Vacancies</h1>
        <p>
          you can check out our most Recent Job openings and apply for the
          suitable ones now
        </p>
      </div>
    </section>
  );
};

export default Hero;
