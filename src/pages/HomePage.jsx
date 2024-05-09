import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/Joblistings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
