import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

import { useLetterAnimationClass } from '../../hooks/useLetterAnimationClass';

import './index.scss';

const About = () => {
    const letterClass = useLetterAnimationClass();

    return (
        <>
            <div className='containers about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'B', 'O', 'U', 'T', '', '', '', '', 'M', 'E']}
                            idx={15} />
                    </h1>
                    <p>
                        Front-end web development, also known as client-side
                        development is the practice of producing HTML, CSS and
                        JavaScript for a website or Web Application so that a
                        user can see and interact with them directly. The challenge
                        associated with front end development is that the tools and
                        techniques used to create the front end of a website change
                        constantly and so the developer needs to constantly be aware
                        of how the field is developing.
                    </p>
                    <p>
                        A front-end developer architects and develops websites and
                        applications using web technologies (i.e., HTML, CSS, DOM,
                        and JavaScript), which run on the Open Web Platform or act
                        as compilation input for non-web platform environments
                        (i.e., React Native).
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;