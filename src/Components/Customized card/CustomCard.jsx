import React from 'react';

export const CustomCard = ({src, cardTitle, cardDescription}) => {
    return (
        <div class="card" data-background="color" data-color="purple">
            <div className="card-body text-center">
                <div className="card-icon">
                    <img alt = 'how-to-use' src = {src} />
                </div>
                <div className="description">
                    <h4 className="card-title">{cardTitle}</h4>
                    <p class="card-description">{cardDescription}</p>
                </div>
            </div>
        </div>
    );
}