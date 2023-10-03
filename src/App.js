import { Routes, Route } from 'react-router-dom';

// layouts
import Site from './layout/Site';
import Admin from './layout/Admin';

// all site page
import Home from './pages/site/Home';
import Contact from './pages/site/Contact';
import Works from './pages/site/Works';

// all admin page
import Dashboard from './pages/admin/Dashboard';

// all works
import Overview from './pages/site/works/Overview';
import GhPages from './pages/site/works/GhPages';
import LiveServer from './pages/site/works/LiveServer';
import GhRepo from './pages/site/works/GhRepo';
import MyJsonApis from './pages/site/works/MyJsonApis';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Site />}>
        <Route index element={<Home />} />
        <Route path='works' element={<Works />} >
          <Route index element={<Overview />} />
          <Route path='gh-pages' element={<GhPages />} />
          <Route path='live-server' element={<LiveServer />} />
          <Route path='gh-repo' element={<GhRepo />} />
          <Route path='my-json-api' element={<MyJsonApis />} />
        </Route>
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/' element={<Admin /> }>
        <Route path='dashboard' element={<Dashboard /> }/>
      </Route>
    </Routes>
  );
}

export default App;
