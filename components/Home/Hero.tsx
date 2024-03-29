import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="h-[32rem] rounded-b-3xl bg-[url('../public/home/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex h-full flex-col items-start justify-center gap-4">
        <h1 className="font-header-1">A Better Recruitment Experience</h1>
        <Button className="font-button gap-4 p-6" asChild>
          <Link href="/about-us">
            Learn More
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
