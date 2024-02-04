import Image from "next/image";

const Clients = () => {
  const clients = [
    { id: 1, src: "/about-us/tawredaat.webp", alt: "Tawredaat" },
    { id: 2, src: "/about-us/dmc.webp", alt: "DMC" },
    { id: 3, src: "/about-us/giza-electric.webp", alt: "Giza Electric" },
    { id: 4, src: "/about-us/quest.webp", alt: "Quest" },
    { id: 5, src: "/about-us/sequence.webp", alt: "Sequence" },
    {
      id: 6,
      src: "/about-us/lotus-management.webp",
      alt: "Lotus Management",
    },
    {
      id: 7,
      src: "/about-us/new-gulf-consult.webp",
      alt: "New Gulf Consult",
    },
    { id: 8, src: "/about-us/raya-foods.webp", alt: "Raya Foods" },
    { id: 9, src: "/about-us/tbtd.webp", alt: "TBTD" },
    { id: 10, src: "/about-us/egypt-foods.webp", alt: "Egypt Foods" },
    { id: 11, src: "/about-us/tasalla.webp", alt: "Tasalla" },
    { id: 12, src: "/about-us/care-med.webp", alt: "Care Med" },
    { id: 13, src: "/about-us/be-group.webp", alt: "Be Group" },
    {
      id: 14,
      src: "/about-us/first-automation.webp",
      alt: "First Automation",
    },
    {
      id: 15,
      src: "/about-us/egypt-bakery-stores.webp",
      alt: "Egypt Bakery Stores",
    },
    { id: 16, src: "/about-us/baltoe.webp", alt: "Baltoe" },
    { id: 17, src: "/about-us/eaco.webp", alt: "EACO" },
    { id: 18, src: "/about-us/kk-trading.webp", alt: "KK Trading" },
    { id: 19, src: "/about-us/grace.webp", alt: "Grace" },
    { id: 20, src: "/about-us/coc.webp", alt: "COC" },
    { id: 21, src: "/about-us/fitness-pro.webp", alt: "Fitness Pro" },
    { id: 22, src: "/about-us/your-parts.webp", alt: "Your Parts" },
    { id: 23, src: "/about-us/mk-roots.webp", alt: "MK Roots" },
    { id: 24, src: "/about-us/mk-team.webp", alt: "MK Team" },
    { id: 25, src: "/about-us/corevisory.webp", alt: "Corevisory" },
    { id: 26, src: "/about-us/medpack.webp", alt: "Medpack" },
  ];
  return (
    <section className="container flex flex-col gap-8 py-24">
      <h2 className="font-header-1 text-center text-header-color">
        Our Amazing Clients
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((client) => (
          <div
            className="relative size-24 overflow-hidden rounded md:size-36"
            key={client.id}
          >
            <Image src={client.src} alt="" fill objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
