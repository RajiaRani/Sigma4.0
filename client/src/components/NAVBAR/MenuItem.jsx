import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import Button from '@mui/material/Button';

export default function MenuItem({ title, Icon, SubmenuComponent }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsSubMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <li className={`g-level1 ${isSubMenuOpen ? "open" : ""}`} ref={menuRef}>
            <Button
                className="d-flex"
                onClick={toggleSubMenu}
                aria-expanded={isSubMenuOpen}
                aria-controls={`${title}-submenu`}
            >
                {title} <RiArrowDropDownFill className="ms-auto" />
            </Button>
            <div id={`${title}-submenu`} className="submenu shadow">
                {isSubMenuOpen && <SubmenuComponent closeSubMenu={() => setIsSubMenuOpen(false)} />}
            </div>
        </li>
    );
}
