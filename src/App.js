import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Intro_platform from './Components/Intro_platform';
import Courses from './Components/Courses';
import Course_Search from './Components/Course_form';
import Offering_page from './Components/Offering_page';
import Testimonials from './Components/Testimonials';
import NewsUpdte from './Components/NewsUpdte';
import Blog from './Components/Blog';
import Iq_page from './Components/Iq_page';
import Currentaffer from './Components/Current_affers';
import RegisterPage from './Components/Register_page';
import Faq from './Components/Faq';
import Footer from './Components/Foorer';
// import DraggableModelDiolog from './Components/DraggableModelDiolog';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Intro_platform />
      <Courses/>
      <Course_Search/>
      <Offering_page/>
      <Testimonials/>
      <NewsUpdte/>
      <Blog/>
      <Iq_page/>
      <Currentaffer/>
      <RegisterPage/>
      <Faq/>
      <Footer/> 
    </div>
  );
}

export default App;
