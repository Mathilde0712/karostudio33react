 
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MomentDeVie from "../components/MomentDeVie";
import Tarifs from "../components/Tarifs";
import Tarifs2 from "../components/Tarifs2";

const Home = () => {
  return (
    <div>
    {/* <Helmet>
  {/* Informations de base */}
 {/* <meta charSet="utf-8" />
  <title>KaroStudio33 – Photographe à Bordeaux</title>
  <meta
    name="description"
    content="Photographe spécialisée dans les portraits, mariages, grossesse, naissance et événements à Bordeaux. Séances personnalisées, approche humaine et artistique."
  />
  <meta
    name="keywords"
    content="photographe Bordeaux, studio photo, portrait, mariage, grossesse, naissance, événement, KaroStudio33"
  />
  <meta name="author" content="KaroStudio" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Favicon (assure-toi que le fichier est bien dans public/) */}
  {/*<link rel="icon" href="/favicon.ico" />

  {/* Open Graph (pour Facebook et LinkedIn) */}
  {/*<meta property="og:title" content="Photographe à Bordeaux – KaroStudio" />
  <meta
    property="og:description"
    content="Découvrez mes services de photographie : portraits, mariages, grossesse, naissance, événements. Portfolio et contact en ligne."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.karostudio33.com/" />
  <meta property="og:image" content="https://karostudio33.vercel.app/images/preview.webp" />

  {/* Twitter Card */}
 {/* <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Photographe à Bordeaux – KaroStudio" />
  <meta
    name="twitter:description"
    content="Photographie professionnelle : portraits, mariages, grossesse, naissance et plus à Bordeaux."
  />
  <meta name="twitter:image" content="https://karostudio33.vercel.app/images/preview.webp"/>
</Helmet>*/}
      <Header />
      <Hero />
      <MomentDeVie />
      <Tarifs />
      <Tarifs2 />
      <Contact />
    </div>
  );
};

export default Home;
