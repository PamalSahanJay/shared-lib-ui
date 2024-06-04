// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NxWelcome from './nx-welcome';

import {Authentication} from '@wiley/shared-ui/authentication'
import {CommonUi} from '@wiley/shared-ui/common-ui'

export function App() {
  return (
    <div>
      {/* <NxWelcome title="demo" /> */}
      <BrowserRouter> 
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/pamal" element={ <div>pamal</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
