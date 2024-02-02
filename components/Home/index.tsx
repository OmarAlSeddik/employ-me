import Auth from "./Auth";
import Hero from "./Hero";
import Main from "./Main";
import Promise from "./Promise";

const Home = () => {
  return (
    <main>
      <Hero />
      <Promise />
      <Auth />
      <Main />
    </main>
  );
};

export default Home;
