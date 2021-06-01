import React, { Component } from 'react';

import {createNewQuestion} from '../../services/Ask-Services';
import notificationContext from "../../contexts/notificationContext";

import Checkbox from '../shared/checkBox';
import {InputError } from '../shared/inputError';

import styles from './Ask.module.css';

class Ask extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);

        this.emailInput = React.createRef();
        this.nameInput = React.createRef();
        this.textInput = React.createRef();

        this.state = {
            checked: false,
            emailShow: '',
            nameShow: '',
            textShow: '',
        };
    }

    componentDidMount(){
        //this.context[1]({type: 'SUCCESS', payload: 'Yess'});
    }

    goBack() {
        this.props.history.goBack();
    }

    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
      
    onAskFormSubmitHandler(e){
        e.preventDefault();
          
        let name = e.target.name.value;
        let email = e.target.email.value;
        let text = e.target.text.value;
        let checked = this.state.checked;

        if (email==='') {
            this.emailInput.current.focus();
            this.setState(oldState=> ({...oldState, emailShow: 'Please fill your email!'}));
            this.context[1]({type: 'ERROR', payload: 'Please fill your email!'});
            return;
        }
        
        if (name==='') {
            this.nameInput.current.focus();
            this.setState(oldState=> ({...oldState, emailShow: '' , nameShow: 'Please fill your name!'}));
            
            this.context[1]({type: 'ERROR', payload: 'Please fill your name!'});
            return;
        }
        
        if (text==='') {
            this.textInput.current.focus();
            this.setState(oldState=> ({...oldState, emailShow: '' , nameShow: '', textShow: 'Please ask your question!'}));
            this.context[1]({type: 'ERROR', payload: 'Please fill your question!'});
            return;
        }

        if (!checked) {
            this.context[1]({type: 'ERROR', payload: 'Please accept the Terms and Conditions!'});
           return console.log('Please accept the Terms and Conditions!');    
        }

    createNewQuestion(name,email,text)
                .then(res=> {
                    this.context[1]({type: 'SUCCESS', payload: 'Your question has been submited!'});
                    this.props.history.push('/Cars');
                });

        
    }


    render() {
        return (
            <div className={styles.AskWrapper}>
                <section className={styles.Ask}>
                    <article className={styles.backBtnWrapper}>
                        <button className="CarInfo-wrapper-backBtn back-Btn" onClick={this.goBack}>Go back</button>
                    </article>

                    <section className={styles.AskBg}>
                    <article className={styles.askFormWrapper}>
                        <h1 className={styles.askFormTitle}>Don’t hesitate to let us know if you have any questions or comments!</h1>
                        <p className={styles.askFormSubTitle}>We will reach you by the email provided in the next couple of hours..</p>
                        <form id={'ask-form'} className={styles.askForm} onSubmit={(e) => this.onAskFormSubmitHandler(e)}>
                            <article className={styles.askFormUserInfo}>
                            <label htmlFor="name" className={styles.askFormNameArea}>Name*:
                            
                            <input type="name" name="name" label="email" ref={this.nameInput} className={styles.askFormInput} autoFocus />
                                <InputError>{this.state.nameShow}</InputError>
                            </label>

                            <label htmlFor="email" className={styles.askFormEmailArea}>Your E-Mail*:
                            
                            <input type="email" name="email" ref={this.emailInput} className={styles.askFormInput} />
                                <InputError>{this.state.emailShow}</InputError>
                            </label>
                            </article>

                            <label htmlFor="text" className={styles.askFormTextarea}>Your question:</label>
                            <textarea type="text" name="text" ref={this.textInput} className={styles.askFormTextArea} />
                                <InputError>{this.state.textShow}</InputError>


                            <label htmlFor="checkBox" className={styles.askFormTermsAndCond}>Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy. 
                                <Checkbox 
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
                                name="checkBox" 
                                className={styles.askFormTermsAndCond+" checkBox"} />
                            </label>

                            <input type="submit" className={styles.AskFormSend+" submitBtn"}  data-testid="submitAskForm"/>
                        </form>
                    </article>
                </section>
            </section>
         </div>
        )
    };
}

Ask.contextType = notificationContext;

export default Ask;