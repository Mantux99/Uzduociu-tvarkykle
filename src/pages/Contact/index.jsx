import React, {Component} from 'react';
import styles from './index.module.scss';

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            text: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.email]: event.target.value,
            [event.target.text]: event.target.value,
        })
    }

    render () {
        const {email} = this.state;
        const {text} = this.state;
        return(
            <section className={styles.section}>
            <div className={styles.form} >
                <h1>Contact with us</h1>
                <form onSubmit={this.handleSubmit}>
                    <p><input type="email" placeholder="Your email" name="email" onChange={this.handleInputChange}/></p>
                    <p><textarea name="text" onChange={this.handleInputChange}></textarea></p>
                    <p><button className={styles.button}>Send Message</button></p>
                </form>
            </div>
            </section>
        )
    }
}

export default Contact