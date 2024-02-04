const Hero = () => {
  return (
    <section className="h-[32rem] rounded-b-3xl bg-[url('../public/about-us/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex h-full flex-col items-start justify-center gap-4">
        <h1 className="font-header-1">About Us</h1>
        <p>
          We Help startups and middle, large companies, SME&apos;s and
          Corporates in recruitment and talent management to develop a win win
          situation for employers and employees by providing the suitable
          candidate to the suitable employer and Helping the employers in
          developing the talents of their hires. We are helping employers and
          job seekers find their right match through our intelligent real-time
          recommendations and around the clock support.
        </p>
      </div>
    </section>
  );
};

export default Hero;
