import Head from "next/head";
import { HomeSection } from "../components/homeSection";
import { NavBar } from "../components/navBar";
import { OurStack } from "../components/ourStack";
import { OurTeam } from "../components/teamSection";
import { TimeLine } from "../components/timelineSection";
import { WhyUSSection } from "../components/whyUsSection";

export default function Home() {
  return (
    <div id="app">
      <Head>
        
        <title>tishatsu</title>
        <link href="https://fonts.cdnfonts.com/css/cmu-typewriter-text" rel="stylesheet" /> 

        <meta
          name="description"
          content="tishatsu is a new age T-shirts on blockchain."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="tishatsu"
        />
        <meta
          property="og:description"
          content="tishatsu is a new age T-shirts on blockchain"
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <HomeSection />
      <OurStack />
      <TimeLine />
      <OurTeam />
      <WhyUSSection />
    </div>
  );
}
