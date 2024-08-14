import '../styles/Reserva.css'
import Form from 'react-bootstrap/Form';
import fotoreserva from '../src/assets/fotoreserva.jpg'

function Reserva(){
    return(
        <>
        <section >
            <h3>BOOK A CLASS</h3>
            <div className='reservacontenedor'>
            <div className='reservaform'>
            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
                type="name"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
                  <Form.Label htmlFor="inputPassword5">Email </Form.Label>
            <Form.Control
                type="email"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            <br />
            <Form.Select aria-label="Default select example">
            <option>Select class</option>
            <option value="1">Hatha yoga</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
            <br />
            <Form.Select aria-label="Default select example">
            <option>Select date</option>
            <option value="1">Monday</option>
            <option value="2">Wednesday</option>
            <option value="3">Friday</option>
            </Form.Select>
            <br />
            <button>
                Book class
            </button>
            
            </div>
            <div className='fotoreserva'>
            <img src={fotoreserva} alt="" />
            </div>

        </div>
        </section>
        </>
    )
}

export default Reserva;