import { Container} from "./styles";
import { toast } from 'react-toastify';
import { useState } from "react";
import Modal from 'react-modal';
import api from 'services/api';
import closeImg from 'assets/close.svg';
import { mask } from 'remask';


Modal.setAppElement('#root');


export function NewRegisterModal({ isOpen, onRequestClose }) {

    const
        [cpf, setCpf] = useState(""),
        [cep, setCEP] = useState(''),
        [address, setAddress] = useState(''),
        [complement, setComplement] = useState(''),
        [district, setDistrict] = useState(''),
        [city, setCity] = useState(''),
        [uf, setUF] = useState('')
    ;

    function handleChangeCpf(event) {
        setCpf(mask(event.target.value, '999.999.999-99'));
    }

    function handleChangeCep(event) {
        setCEP(mask(event.target.value, '99999-999'));
    }    

    async function getAddress(cep) {
        try {
            const response = await api.get(`${cep}/json/`);
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

        onRequestClose();
        clearInputs();        
    }  

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container className='form' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="primaryData">
                    <div>
                        <label>Name</label>
                            <input
                                id='name'
                                type='text'
                                placeholder='Enter your name'
                                pattern='[a-zA-Z ]+$'
                                title='Must contain letters only.'
                                required={true}
                            />
                    </div>
                </div>
                <div className="otherDatas">
                    <div>
                        <label>Birthday</label>
                            <input
                                id='birthday'
                                type='date'
                                title='Choose your birthday.'
                                required={true}
                            />
                    </div>
                        <div>
                            <label>CPF</label>
                            <input
                                id='CPF'
                                type='text'
                                placeholder='000.000.000-00'
                                title='Must contain numbers only.'
                                required={true}                                
                                value={cpf}
                                onChange={handleChangeCpf}
                            />
                        </div>
                        <div>
                            <label>CEP</label>
                            <input
                                id='CEP'
                                type='text'
                                placeholder='00000-000'
                                title='Must contain numbers only.'
                                required={true}
                                onBlur={() => getAddress(cep)}
                                value={cep}
                                onChange={handleChangeCep}

                            />
                        </div>
                        <div>
                            <label>Number</label>
                            <input
                                id='number'
                                type='number'
                                placeholder='00'
                                pattern='[0-9]+$'
                                title='Must contain numbers only.'
                                required={true}
                            />
                        </div>
                </div>
                <input
                    id='address'
                    type='text'
                    placeholder='Enter your address'
                    value={address}
                    required={true}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <div className="otherDatas">
                    <input
                        id='complement'
                        type='text'
                        placeholder='Complement'
                        value={complement}
                        onChange={(event) => setComplement(event.target.value)}
                    />
                    <input
                        id='district'
                        type='text'
                        placeholder='Enter your district'
                        required={true}
                        value={district}
                        onChange={(event) => setDistrict(event.target.value)}
                    />
                    <input
                        id='city'
                        type='text'
                        placeholder='Enter your city'
                        required={true}
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <input
                        id='UF'
                        type='text'
                        placeholder='UF'
                        pattern='[A-Za-z]{2}'
                        title='Must contain at least two letters.'
                        required={true}
                        value={uf}
                        onChange={(event) => setUF(event.target.value)}
                    />
                </div>

                <button type='submit'>Register</button>
            </Container>
        </Modal>
    );
}