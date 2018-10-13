import React from 'react';
import './style.css';

const SearchDetails = (props) => {
    return (
        <div className = 'container'>
            <div className = "row">
                <div className = 'col-6'>
                    
                </div>
                <div className = 'col-md-6'>
                    <table>
                        <thead>
                            <tr>
                            <th>Popularity</th>
                            <th>texture</th>
                            <th>quality</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{props.ratings}</td>
                            <td>{props.texture}</td>
                            <td>{props.durability}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default SearchDetails;