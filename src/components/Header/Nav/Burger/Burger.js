import { useState } from "react";
import { RightNav } from "../RightNav/RightNav";
import { StyledBurger } from "./styles";

export function Burger({openNewModal}) {

    const [open, setOpen] = useState(false);
    
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
                
            </StyledBurger >
            <RightNav open={open} setOpen={setOpen} openNewModal={openNewModal}/>
        </>
    );
}