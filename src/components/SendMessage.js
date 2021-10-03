import React, { Component } from 'react'
import './SendMessage.css'


const axios = require('axios')


export default class SendMessage extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            number_wpp: "",
            message_wpp: "a"
        }
        this.sendMessage = this.sendMessage.bind(this)

    }
    sendMessage(){
        axios.post('http://192.95.46.251:3333/sendText', {
            sessionName: "sz", 
            number: this.state.number_wpp,
            text:"SendZap V2"
        })
        .then(function (response) {
            console.log(response.data.result)
            
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render(){
        return(
            <div className="Send">
                <h2>sendzap_v2</h2>
                <input type="text" onChange={(event)=>{this.setState({number_wpp:event.target.value})}}></input>
                <input type="button" value="Enviar" onClick= {this.sendMessage}></input>
                <h2>Status: </h2>
            </div>
        )
    }
}