const Hero = () => {
  return (
    <section className="h-[32rem] rounded-b-3xl bg-[url('../public/contact-us/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex h-full flex-col items-start justify-center gap-4">
        <h1 className="font-header-1">Contact Us</h1>
        <p>We would be glad to get intouch with you to join our community.</p>
      </div>
    </section>
  );
};

export default Hero;
