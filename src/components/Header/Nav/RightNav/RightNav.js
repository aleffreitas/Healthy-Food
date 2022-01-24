import { Ul } from "./styles";
import { Link } from 'react-scroll';
import { navMenu } from 'services/menu';

export function RightNav({ open, setOpen, openNewModal}) {

    return (
        <Ul open={open}>
            {navMenu.map((item) => {
                return (            
                    <Link
                        key={item.id}
                        open={open}
                        onClick={() => setOpen(!open)}
                        to={item.to} spy={true}
                        smooth={true}>
                        <li>{item.text}</li>
                    </Link>
                )
            })}

            <li>
                <button type="button" onClick={openNewModal}>
                    REGISTER
                </button>
            </li>
        </Ul>
    );
}