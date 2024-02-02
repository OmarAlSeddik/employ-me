import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Auth = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container flex flex-col justify-between gap-24 py-24">
        <h2 className="font-header-2">A New Recruitment Experience</h2>
        <p>
          We offer our clients new experiences in recruitment, talent
          management, and online trainings with tailored price packages.
        </p>
        <Link href="/login">
          <Button
            variant="outline"
            className="font-button gap-4 p-6 text-white"
          >
            Employer Sign-In
            <MoveRight className="size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Auth;
