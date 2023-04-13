import Form from "../Form/Form";
import './Card.css';

export default function Card(): JSX.Element {
    return (
        <section className='card'>
            <div className='card__content'>
                <div className='card__text'>
                    <p className='card__title'>Personal info</p>
                    <p className='card__description'>Please provide your name, email address, and phone number.</p>
                </div>
                <Form />
            </div>
        </section >
    );
}