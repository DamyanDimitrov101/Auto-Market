import { Component } from 'react';

import styles from './Ask.module.css';

class Ask extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);

        this.state = {

        };
    }

    goBack() {
        this.props.history.goBack();
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
                        <form action="" className={styles.askForm}>
                            <article className={styles.askFormUserInfo}>
                            <label htmlFor="name" className={styles.askFormNameArea}>Name*:
                            
                            <input type="name" className={styles.askFormInput} autoFocus />
                            </label>

                            <label htmlFor="email" className={styles.askFormEmailArea}>Your E-Mail*:
                            <input type="email" className={styles.askFormInput} />
                            </label>
                            </article>

                            <label htmlFor="text" className={styles.askFormTextarea}>Your question:</label>
                            <textarea type="text" className={styles.askFormTextArea} />


                            <label htmlFor="checkBox" className={styles.askFormTermsAndCond}>Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy. 
                                <input type="checkBox" className={styles.askFormTermsAndCond+" checkBox"} />
                            </label>

                            <input type="submit"className={styles.AskFormSend+" submitBtn"} />
                        </form>
                    </article>
                </section>
            </section>
         </div>
        )
    };
}

export default Ask;