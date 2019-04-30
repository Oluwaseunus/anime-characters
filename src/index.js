import React from 'react';
import { render } from 'react-dom';

import Routes from './Routes';

import './index.scss';

const rootElement = document.getElementById('root');
render(<Routes />, rootElement);
