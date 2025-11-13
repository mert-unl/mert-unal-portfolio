import Background from "./Components/Background";
import BackgroundMusic from "./Components/BackgroundMusic";
import Footer from "./Pages/Footer";
import MyCursor from "./Components/MyCursor";
import Navigation from "./Components/Navigation";
import WelcomeToast from "./Components/WelcomeToast";
import MainPage from "./Pages/MainPage";
import Profile from "./Pages/Profile";

export default function App() {

  return (
   <div>

    <WelcomeToast/>
    <MyCursor/>
    <BackgroundMusic/>
    <Navigation/>
    <MainPage/>
    <Footer/>
</div>
  )}

