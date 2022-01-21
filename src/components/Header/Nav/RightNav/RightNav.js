import { Container, Ul } from "./styles";
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import { useState } from "react";
import api from 'services/api';
import closeImg from 'assets/close.svg';

import { toast } from 'react-toastify';

Modal.setAppElement('#root');


export function RightNav({ open, setOpen}) {

    const [isNewModalOpen, setIsNewModalOpen] = useState(false);

    const [cep, setCEP] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    async function getAddress(cep) {
        try {
            const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
            setAddress(response.data.logradouro);
            setComplement(response.data.complemento);
            setDistrict(response.data.bairro);
            setCity(response.data.localidade);
            setUF(response.data.uf);

        } catch (error) {
            setAddress('');
            setComplement('');
            setDistrict('');
            setCity('');
            setUF('');
        }
    }

    function clearInputs() {
        setAddress('');
        setComplement('');
        setDistrict('');
        setCity('');
        setUF('');
    }

    function handleRegisterSucess() {
        toast.success('User registered successfully');
    }

    function handleRegisterError() {        
        toast.error('User not registered');
    }

    function handleSubmit(event) {
        event.preventDefault();

        try{
            const userRegister = {
                name: event.target.elements.name.value,
                birthday: event.target.elements.birthday.value,
                CPF: event.target.elements.CPF.value,
                CEP: event.target.elements.CEP.value,
                address: event.target.elements.address.value,
                number: event.target.elements.number.value,
                complement: event.target.elements.complement.value,
                district: event.target.elements.district.value,
                city: event.target.elements.city.value,
                UF: event.target.elements.UF.value
            };

            localStorage[`healthyFoodCommerce${userRegister.CPF}Registry`] = JSON.stringify(userRegister);

            handleRegisterSucess();

        } catch {
            handleRegisterError();
        }

        handleCloseModalOpen();
        clearInputs();        
    }  


    function handleModalOpen() {
        setIsNewModalOpen(true);
    }

    function handleCloseModalOpen() {
        setIsNewModalOpen(false);
    }   

    return (
        <Ul open={open}>
            <Link open={open} onClick={() => setOpen(!open)} to="healthyRecipes" spy={true} smooth={true}> <li>HEALTHY RECIPES</li> </Link>
            <Link open={open} onClick={() => setOpen(!open)} to="blog" spy={true} smooth={true}><li>BLOG</li> </Link>
            <Link open={open} onClick={() => setOpen(!open)} to="join" spy={true} smooth={true}><li>JOIN</li></Link>
            <li>
                <button type="button" onClick={handleModalOpen}>
                    REGISTER
                </button>

                <Modal
                    isOpen={isNewModalOpen}
                    onRequestClose={handleCloseModalOpen}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    
                    <button
                        type="button"
                        onClick={handleCloseModalOpen}
                        className="react-modal-close"
                    >
                        <img src={closeImg} alt="Fechar Modal" />
                    </button>
                    <Container className='form' onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <input id='name'
                            type='text'
                            placeholder='Enter your name'
                            pattern='[a-zA-Z ]+$'
                            title='Must contain letters only.'
                            required={true}
                        />
                        <input
                            id='birthday'
                            type='date'
                            placeholder='Choose your birthday'
                            title='Choose your birthday.'
                            required={true}
                        />
                        <input
                            id='CPF'
                            type='text'
                            placeholder='Enter your CPF'
                            pattern='[0-9]{11}'
                            title='Must contain numbers only.'
                            required={true}
                        />

                        <input
                            id='CEP'
                            type='text'
                            placeholder='Enter your CEP'
                            pattern='[0-9]{8}'
                            title='Must contain numbers only.'
                            required={true}
                            onChange={(e) => setCEP(e.target.value)}
                            onBlur={(e) => getAddress(cep)}
                        />
                        <input
                            id='number'
                            type='number'
                            placeholder='Number'
                            pattern='[0-9]+$'
                            title='Must contain numbers only.'
                            required={true}
                        />
                        <input
                            id='address'
                            type='text'
                            placeholder='Enter your address'
                            value={address}
                            required={true}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            id='complement'
                            type='text'
                            placeholder='Complement'
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                        />
                        <input
                            id='district'
                            type='text'
                            placeholder='Enter your district'
                            required={true}
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        />
                        <input
                            id='city'
                            type='text'
                            placeholder='Enter your city'
                            required={true}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            id='UF'
                            type='text'
                            placeholder='UF'
                            pattern='[A-Za-z]{2}'
                            title='Must contain at least two letters.'
                            required={true}
                            value={uf}
                            onChange={(e) => setUF(e.target.value)}
                        />

                        <button type='submit'>Register</button>
                    </Container>
                </Modal>

            </li>
        </Ul>
    );
}