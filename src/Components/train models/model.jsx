import React, { Component } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '84d748537109485badfb633b96443b4a'
});

class Model extends Component {
    constructor() {
        super();
    }
    
    trainModels = () => {
        console.log('working');
        // app.inputs.create({
        //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezJwCvCZIz72N5OQFg0XZBdo_8uPi4VzkP09FHNmJUoYbQHww3A",
        //     concepts: [
        //         {
        //         id: "da-viva ankara",
        //         value: true
        //         }
        //     ]
        //     });
        app.models.create(
            "African_ankara_fabric",
            [
              { "id": "da-viva ankara" },
              {"id": "kente ankara"},
              {"id": "dashiki"}
            ]
          ).then(response => {
              // do something with response
              console.log(response.id)
              app.models.train(response.id).then(response => {
                // do something with response
                console.log(response)
              }).catch(err => {
                // there was an error
                console.log(err)
              }
            );
            })
            .catch(err => {
              // there was an error
              console.log(err)
            }
          );
        
    }
    render () {
    return (
        <div>
            <h2>this is me creating my ankara models</h2>
            <button className = 'mt-5' onClick = {this.trainModels}>train</button>
        </div>
    )
}
}
export default Model;
// appId - "5c95906e78c346d9949219fb0c3ca084"