import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { useLetterAnimationClass } from '../../hooks/useLetterAnimationClass';

import './index.scss';

const myARR = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];

const Contact = () => {
    const letterClass = useLetterAnimationClass();

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={myARR}
                        idx={15}
                    />
                </h1>
                <p>
                    A front-end developer architects and develops websites and
                    applications using web technologies (i.e., HTML, CSS, DOM,
                    and JavaScript), which run on the Open Web Platform or act
                    as compilation input for non-web platform environments
                    (i.e., React Native).
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    required
                                >
                                </textarea>
                            </li>
                            <li>
                                <input
                                    type="submit"
                                    className="flat-button"
                                    value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Slobodan Gajic,
                <br />
                Poland,
                <br />
                <span>
                    anahit.asatryan.95@mail.ru
                </span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Slobo live here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact;