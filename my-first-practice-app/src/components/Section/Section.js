import React from 'react';
import './Section.css'; // Import CSS file for styling

function Section({ id, title, content, image }) {
    return (
        <section id={id}>
            <div className="inner">
                <header>
                    <h2>{title}</h2>
                </header>
                {image && <div className="image fit">
                    <img src={image} alt="" />
                </div>}
                <p>{content}</p>
                <ul className="actions">
                    <li><a href="/" className="button alt">Learn More</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Section;
