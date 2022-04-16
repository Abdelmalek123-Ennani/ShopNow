import './App.scss';
import { Home , Header, Footer , AddProductToCard, FilterCategories, Contact} from './components'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
         <Routes>
            <Route index element={<Home />} />
            <Route path="/products/categories" element={ <FilterCategories /> } />
            <Route path='/product/:id/Card' element={<AddProductToCard /> } />
            <Route path='/contact' element={ <Contact /> } />
         </Routes>
         <Footer />
       </Router>
    </div>
  );
}

export default App;
