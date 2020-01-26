import React from 'react'
import SignUpImg from '../Team/join.png'
import withStyle from 'react-jss'
import GithubLogin from './githubSignup'

const signupStyle = {
    container:{
        width: "900px",
        background: "#fff",
        margin: '0 auto',
        boxShadow: "0 15px 16.83px 0.17px rgba(0,0,0,.05)",
        borderRadius: '20px',
    },
    signupContent:{
        padding:'75px 0',
        display:'flex'
    },
    signupForm: {
        marginLeft: '75px',
        marginRight: '75px',
        paddingLeft: '34px'
    },
    formTitle:  {
        lineHeight: '1.66',
        margin: '0',
        padding: '0',
        fontWeight: '700',
        color: '#222',
        fontSize: '36px'
    },
    registerForm: {
        width: '100%'
    },
    formGroup: {
        position: 'relative',
        marginBottom: '25px',
        overflow: 'hidden'
    },
    inputBox: {
        width: '100%',
        display: 'block',
        border: 'none',
        borderBottom: '1px solid #999',
        padding: '6px 30px',
        boxSizing: 'border-box'
    },
    signupImage: {

    },
    signupForm: {
        width: '50%',
    },
    signupImage: {
        width: '50%',
    },
    signupImageLink: {

    }
}

const Signup = ({classes}) => (
    <div className={classes.container}>
        <div className={classes.signupContent}>        
            <div className={classes.signupImage}>
                <img src={SignUpImg} width="450" alt="sing up image" />
                <a href="#" className={classes.signupImageLink}>I am already member</a>
            </div>    
            <div className={classes.signupForm}>
                <h2 className={classes.formTitle}>Sign up</h2>
                <GithubLogin />
            </div>
        </div>
    </div>
)

export default withStyle(signupStyle)(Signup);