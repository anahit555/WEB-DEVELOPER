import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.jpg';
import AnimatedLetters from '../AnimatedLetters';
import { useLetterAnimationClass } from '../../hooks/useLetterAnimationClass';

import './index.scss';

const nameArray = ['A', 'N', 'A', 'H', 'I', 'T', '', ''];
const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

const Home = () => {
    const letterClass = useLetterAnimationClass(4000);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi I am
                    <img src={LogoTitle} alt="img" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={8}
                    />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>
                    Frontend developer / Javascript expert / Youtube
                </h2>
                <Link
                    to="/contact"
                    className="flat-button"
                >
                    CONTACT ME
                </Link>
            </div>
        </div>
    );
}

export default Home;