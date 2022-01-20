import { Ul } from "./styles";
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import { useState } from "react";


export function RightNav({ open, setOpen}) {

    const [isNewModalOpen, setisNewModalOpen] = useState(false);

    function handleModalOpen() {
        setisNewModalOpen(true);
    }

    function handleCloseModalOpen() {
        setisNewModalOpen(false);
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
                >
                    <h2>teste</h2>
                </Modal>
            </li>
        </Ul>
    );
}