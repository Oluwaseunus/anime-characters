import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Routes from './Routes';

const rootElement = document.getElementById('root');
render(<Routes />, rootElement);
