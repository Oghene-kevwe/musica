import { Header } from "../components/Header";
import { ChartCardContainer } from "../components/Topcharts";

export const Homepage = () => {
  return (
      <main className=" grid md:grid-cols-2 max-w-4xl mr-auto ml-auto">
       <Header />
        <ChartCardContainer />
      </main>
  );
};
