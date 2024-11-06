import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/IMAGES/AllLogos/NotFound.jpg"; // Rename the image import

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Oops! Page Not Found</h1>
            <img src={NotFoundImage} alt="Cartoon Character Looking Lost" style={styles.image} />
            <p style={styles.text}>
                It seems you're lost in the clouds! Why not go <Link to="/">back home</Link>?
            </p>
        </div>
    );
};

const styles = {
    container: { textAlign: 'center', padding: '50px' },
    heading: { color: '#333' },
    image: { maxWidth: '500px', margin: '20px 0' },
    text: { fontSize: '1.2em', color: '#666' }
};

export default NotFound;

