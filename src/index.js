import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';

// import {
//   MapsComponent,
//   LayersDirective,
//   LayerDirective,
// } from '@syncfusion/ej2-react-maps';

// export function App() {
//   return (
//     <MapsComponent>
//       <LayersDirective>
//         <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png" />
//       </LayersDirective>
//     </MapsComponent>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);