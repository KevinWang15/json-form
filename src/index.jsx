import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import OpenApiForm from './OpenApiForm';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/form" element={<OpenApiForm/>}/>
        </Routes>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

