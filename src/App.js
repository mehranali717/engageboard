import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import AllRoutes from './routes/routes';
import { faArrowRightFromBracket, faCalendarDays, faCaretDown, faTowerBroadcast, faChartSimple, faHouse, faLayerGroup, faMessage, faMagnifyingGlass, faSliders, faTowerBroa, faMagnifyingGlassdcast, faUser, faPencil, faListCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCircleQuestion, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { ContextAPI } from './contextAPI/contextAPI';
import { useState } from 'react';
library.add(
    fab,
    faCaretDown,
    faInstagram,
    faWhatsapp,
    faFacebook,
    faHouse, faUser,
    faTowerBroadcast,
    faCalendarDays,
    faMessage,
    faChartSimple,
    faLayerGroup,
    faArrowRightFromBracket,
    faSliders,
    faEyeSlash,
    faMagnifyingGlass,
    faCircleQuestion,
    faBell,
    faPencil,
    faListCheck,
    faXmark
)
const App = () => {
    const [text, setText] = useState("");

    return <ContextAPI.Provider value={{ text, setText }}>
                <AllRoutes />
           </ContextAPI.Provider>

}

export default App;
