import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Signin.css'

const Signin = () =>{
    const enterUserName = (event) =>{
        let userName = document.getElementById('username').value
        const allowed = /[A-Za-z0-9_]/g
        let sub = userName.substring(0,userName.length-1)
        if(!allowed.test(event.key))
        document.getElementById('username').value = sub
    }

    const enterPassword = (event) =>{
        let password = document.getElementById('password').value
        const allowed = /[A-Za-z0-9_]/g
        let sub = password.substring(0, password.length - 1)
        if(!allowed.test(event.key)){
            document.getElementById('password').value = sub
        }

        // Declaring the Message
        const lower = document.getElementById('lowercase')
        const upper = document.getElementById('uppercase')
        const number = document.getElementById('number')
        const chars = document.getElementById('chars')
        const length = document.getElementById('password').value.length
        //lowercase checked
        if(password.match(/[a-z]/)){
            lower.classList.remove('invalid')
            lower.classList.add('valid')
        }
        else{
            lower.classList.remove('valid')
            lower.classList.add('invalid')
        }
        //upper case checked
        if(password.match(/[A-Z]/)){
            upper.classList.remove('invalid')
            upper.classList.add('valid')
        }
        else{
            upper.classList.remove('valid')
            upper.classList.add('invalid')
        }
        //number checked
        if(password.match(/[0-9]/)){
            number.classList.remove('invalid')
            number.classList.add('valid')
        }
        else{
            number.classList.remove('valid')
            number.classList.add('invalid')
        }
        //password length checked
        if(length >= 6){
            chars.classList.remove('invalid')
            chars.classList.add('valid')
        }
        else{
            chars.classList.remove('valid')
            chars.classList.add('invalid')
        }
    }

    const showMessage = () =>{
        document.getElementById('message').style.display = 'block'
    }

    const removeMessage = () =>{
        document.getElementById('message').style.display = 'none'
    }
    //show password
    const check = () =>{
        const x = document.getElementById('password')
        if(x.type === 'password') {
            x.type = 'text'
        }
        else {
            x.type = 'password'
        }
    }
    return (
        <Container className="alert-dark rounded">
            <Form className="w-50 mx-auto mt-5">
                <label className="bg-dark px-2 mt-3 text-light rounded">Username :</label>
                <input id="username" type="text" className="form-control" onKeyUp={enterUserName} pattern=".{8,}" placeholder="Your Username Must Contain 8 Characters" title="Your Username Must Contain 8 Characters." required/>
                <label className="bg-dark px-2 mt-3 text-light rounded">Password :</label>
                <input id="password" type="password" className="form-control" onKeyUp={enterPassword} onFocus={showMessage} onBlur={removeMessage} pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" placeholder="At least one Lowercase, Uppercase and number" title="Your Password Must Contain at least 8 Characters one Lowercase, one Uppercase and Number."  required/>
                <Form.Check type="checkbox" label="Show Password" className="mb-2 mt-1" onClick={check}></Form.Check>
                <div id='message' style={{display: "none"}}>
                    <p id="lowercase" className="invalid">At least One Lowercase.</p>
                    <p id="uppercase" className="invalid">At least One Uppercase.</p>
                    <p id="number" className="invalid">At least One Number.</p>
                    <p id="chars" className="invalid">At least 6 Characters Or More.</p><br/>
                </div>
                <Link to="/"><input type="submit" className="btn btn-danger my-2" value="Submit"/></Link>
            </Form>
        </Container>
    )
}

export default Signin