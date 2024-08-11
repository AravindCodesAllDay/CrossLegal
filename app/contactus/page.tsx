import { CSSProperties } from 'react';
import Navbar from "../_components/Navbar";

export default function ContactPage() {
    return (
      <>
      <Navbar/>
        <div style={containerStyle}>
            <div style={leftColumnStyle}>
                <div style={twoColumnContainerStyle}>
                    <div style={sectionStyle}>
                        <b><h2>Our Location</h2></b> <br></br>
                        <p>1234 Main Street</p>
                        <p>City, State, ZIP</p>
                        <p>Country</p>
                    </div>
                    <div style={sectionStyle}>
                        <b><h2>Support</h2></b> <br></br>
                        <p>Email: support@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                </div>
            </div>

            <div style={rightColumnStyle}>
               <center> <h4>Have any Questions?</h4> <br></br>
                <h1> Drop us a Line</h1> </center>
                <form style={formStyle}>
                    <div style={formGroupStyle}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                    <button type="submit" style={buttonStyle}>Send Now</button>
                </form>
            </div>
        </div>
        </>
    );
}

// Define styles as CSSProperties
const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
};

const leftColumnStyle: CSSProperties = {
    flex: '1',
    marginRight: '20px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
};

const twoColumnContainerStyle: CSSProperties = {
    display: 'flex',
    gap: '20px', // Adds space between the two columns
};

const sectionStyle: CSSProperties = {
    flex: '1',
    backgroundColor: '#e9e9e9',
    padding: '15px',
    borderRadius: '8px',
};

const rightColumnStyle: CSSProperties = {
    flex: '1',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const formGroupStyle: CSSProperties = {
    marginBottom: '15px',
};

const buttonStyle: CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
};
