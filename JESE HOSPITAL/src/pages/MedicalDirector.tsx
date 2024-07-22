import Banner from "../components/MedicalDirector/Banner";
import Journals from "../components/MedicalDirector/Journals";
import Profile from "../components/MedicalDirector/Profile";
import SucessRate from "../components/MedicalDirector/SucessRate";
import Youtube from "../components/MedicalDirector/Youtube";

const MedicalDirector = () => {
  return (
    <div>
      <Banner />
      <Profile />
      <Journals />
      <SucessRate />
      <Youtube />
    </div>
  );
};

export default MedicalDirector;
