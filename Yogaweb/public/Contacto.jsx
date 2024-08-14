import '../styles/Contacto.css'
import Form from 'react-bootstrap/Form';

function Contacto(){
    return(
        <>
        <section className='cont'>

           <div className='contenedorcontacto'>
            <div className='contactobotones'>
           <h3>CONTACT US</h3>
                
                <button>Call Us</button>
                <button>Follow Us</button>

            </div>
            <div className='formulariocontacto'>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

            </div>
            
            </div>
        </section>
        </>
    )
}

export default Contacto;
