import { Ul } from "./styles";

export function RightNav({open}) {
    return (
        <Ul open={open}>
            <li>HEALTHY RECIPES</li>
            <li>BLOG</li>
            <li>JOIN</li>
            <li>
                <button type="button">
                    REGISTER
                </button>
            </li>
        </Ul>
    );
}