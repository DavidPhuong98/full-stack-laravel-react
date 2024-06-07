
import './App.css';
import './scss/content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './page/home';
import CateloryPage from './page/catelory';
import DocumentPage from './page/document';
import AboutPage from './page/About';
import { Loading } from './component/loading';
import { imageList } from './contains/img';

function App(props) {

  props = { ...props, images: imageList }

  return (
    <BrowserRouter>
        <div className="container">
          <Loading />
        <Routes>
          <Route path="/" element={<HomePage logo={logo} /> } />
          <Route path="/about" element={<AboutPage {...props} /> } />
          <Route path="/document-category" element={<CateloryPage /> } />
          <Route path="/document" element={<DocumentPage /> } />
        </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
