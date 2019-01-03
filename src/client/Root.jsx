import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
// class Root extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         );
//     }
// }

export default Root;