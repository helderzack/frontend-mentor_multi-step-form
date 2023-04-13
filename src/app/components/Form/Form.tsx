import './Form.css';

export default function Form(): JSX.Element {
    return (
        <form className='info-form'>
            <div className='input-container'>
                <label htmlFor="name" className='input-container__label'>Name</label>
                <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className='input-container__input' />
            </div>
            <div className='input-container'>
                <label htmlFor="email" className='input-container__label'>Email</label>
                <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className='input-container__input' />
            </div>
            <div className='input-container'>
                <label htmlFor="phone" className='input-container__label'>Phone Number</label>
                <input type="text" name="phone" placeholder='e.g. +1 234 567 890' id="phone" className='input-container__input' />
            </div>
        </form>
    )
}
