import logo from "./assets/img/logo.svg";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Skill } from "./components/Skill.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";

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
