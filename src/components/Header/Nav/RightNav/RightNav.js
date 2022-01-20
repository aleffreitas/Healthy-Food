import { Ul } from "./styles";
import {Link} from 'react-scroll';


export function RightNav({open,setOpen}) {
    return (
        <Ul open={open}>
            <Link open={open} onClick={() => setOpen(!open)} to="healthyRecipes" spy={true} smooth={true}> <li>HEALTHY RECIPES</li> </Link>
            <Link open={open} onClick={() => setOpen(!open)} to="blog" spy={true} smooth={true}><li>BLOG</li> </Link>
            <Link open={open} onClick={() => setOpen(!open)} to="join" spy={true} smooth={true}><li>JOIN</li></Link>
            <li>
                <button type="button" open={open} onClick={() => setOpen(!open)}>
                    REGISTER
                </button>
            </li>
        </Ul>
    );
}