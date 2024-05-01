import Header from "./components/Header";
import Banner from "./components/Banner";
import Built from "./components/Built";
import Templates from "./components/Templates";
import Clients from "./components/Clients";
import Questions from "./components/Questions";
import Informations from "./components/Informations";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <div>
      <Header/>
      <Banner/>
      <Built/>
      <Templates/>
      <Clients/>
      <Questions/>
      <Informations/>
      <Footer/>
   </div>
  );
}