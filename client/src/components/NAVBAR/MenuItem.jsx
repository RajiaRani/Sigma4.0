import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import Button from '@mui/material/Button';

export default function MenuItem({ title, Icon, SubmenuComponent }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <li className="g-level1">
            <Button className="d-flex" onClick={toggleSubMenu}>
                {title} <RiArrowDropDownFill className="ms-auto" />
            </Button>
            {isSubMenuOpen && (
                <div className="submenu shadow">
                    <SubmenuComponent closeSubMenu={() => setIsSubMenuOpen(false)} />
                </div>
            )}
        </li>
    );
}
