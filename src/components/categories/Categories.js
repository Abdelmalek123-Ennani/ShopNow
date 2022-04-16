import { useState } from 'react'
import SingleCategorie from './SingleCategorie/SingleCategorie'


const Categories = () => {

    const [category , setCategory] = useState('men\'s clothing');

  return (
    <div className='container-fluid py-4'>
        <div className="container py-4 mt-3">
            <p className='display-4'>Our Gallery</p>
            <div>
                <button className='btn' onClick={() => setCategory("men's clothing")}>Men's clothing</button>
                <button className='btn'  onClick={() => setCategory("women's clothing")}>women's clothing</button>
                <button className='btn'  onClick={() => setCategory("jewelery")}>jewelery</button>
                <button className='btn'  onClick={() => setCategory("electronics")}>electronics</button>
            </div>
            <SingleCategorie category={category} />
        </div>
    </div>
  )
}

export default Categories