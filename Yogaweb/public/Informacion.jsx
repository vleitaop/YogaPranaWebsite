import '../styles/Informacion.css'
import Card from 'react-bootstrap/Card';


import clases from '../src/assets/clases.jpg'
import instructores from '../src/assets/instructores.jpg'
import meditacion from '../src/assets/meditacion.jpg'



function Informacion(){
    return(
        <>
        <section className='info'>
<div className='contenedorcards'>
      <div className='card-1'>
        <img className='imginfo' src={clases} alt="" />
        <h3>CLASSES FOR ALL LEVELS</h3>
        <p>All our classes are suitable for BEGINNERS, <br /> no previous experience is necessary. We recommend <br /> you start with calmer styles to understand the <br /> practice and then advance to more dynamic styles, <br /> if you want.</p>
        <button>Book a class</button>
      </div>
      <div className='card-2'>
      <img className='imginfo' src={instructores} alt="" />
      <h3>CLASSES FOR ALL LEVELS</h3>
        <p>All our classes are suitable for BEGINNERS, <br /> no previous experience is necessary. We recommend <br /> you start with calmer styles to understand the <br /> practice and then advance to more dynamic styles, <br /> if you want.</p>
        <button>Book a class</button>
      </div>
      <div className='card-3'>
      <img className='imginfo' src={meditacion} alt="" />
      <h3>CLASSES FOR ALL LEVELS</h3>
        <p>All our classes are suitable for BEGINNERS, <br /> no previous experience is necessary. We recommend <br /> you start with calmer styles to understand the <br /> practice and then advance to more dynamic styles, <br /> if you want.</p>
        <button>Book a class</button>
      </div>
      

</div>
    </section>
        </>
    )
}

export default Informacion;