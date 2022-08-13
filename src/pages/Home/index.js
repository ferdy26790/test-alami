import { useContext, useRef } from 'react';
import { Button, Input, InputGroup, Label } from 'reactstrap';
import About from '../../components/About';
import Contact from '../../components/Contact';
import { StoreContext } from '../../context/storeContext';
import './style.css';

function Home() {
    let inputRef = useRef()
    const { setContactValue } = useContext(StoreContext)
    return (
        <div className="home-container">
            <div className="title">
                <h1>This Is Home Page</h1>
            </div>
            <About />
            <div className='foot-home-container'>
                <div>
                    <Label>No Telp</Label>
                    <InputGroup>
                        <Input innerRef={inputRef}/>
                        <Button
                            onClick={() => setContactValue(inputRef.current.value)}
                        >
                            Go
                        </Button>
                    </InputGroup>
                </div>                
                <Contact />
            </div>
        </div>
    )
}

export default Home;