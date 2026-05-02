import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { MuiKeyboardProvider } from '../../src/context';
import { russianButtons } from '../../src/data/Keyboards';

const root = createRoot(document.getElementById('root'));

root.render(<MuiKeyboardProvider
  firstLanguage={russianButtons}
  sx={{ display: 'flex', justifyContent: 'flex-end', mt: 70 }}
  keyboardWidth={'800px'}
>
  <App />
</MuiKeyboardProvider>);
