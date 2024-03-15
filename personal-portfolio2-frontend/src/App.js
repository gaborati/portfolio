import logo from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/assets/img/logo.svg"
import '/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/components/NavBar.js";
import {Banner} from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/components/Banner.js";
import {Skill} from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/components/Skill.js"
import {Projects} from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/components/Projects.js"
import {Contact} from "/Users/gaborattila/Desktop/personal-portfolio2/personal-portfolio2-frontend/src/components/Contact.js";
function App() {
  return (
    <div className="App">
         <NavBar />
         <Banner />
        <Skill />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
