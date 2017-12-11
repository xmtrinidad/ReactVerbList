import React from 'react';
import './Footer.css';

const footer = () => {
    return(
        <footer className="Footer">
            <div className="inner">
                <h3 className="name">Xavier Trinidad 2017</h3>
                <h4 className="icon">
                    <a href="https://github.com/xmtrinidad/UdemyReact"><i class="fab fa-react fa-2x"></i></a>
                </h4>
            </div>
        </footer>
    );
}

export default footer;