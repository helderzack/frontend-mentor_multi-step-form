import styles from './page.module.css';

export default function Home(): JSX.Element {
  return (
    <section className={styles['card']}>
      <div className={styles['card__content']}>
        <div className={styles['card__text']}>
          <p className={styles['card__title']}>Personal info</p>
          <p className={styles['card__description']}>Please provide your name, email address, and phone number.</p>
        </div>
        <form className={styles['info-form']}>
          <div className={styles['input-container']}>
            <label htmlFor="name" className={styles['input-container__label']}>Name</label>
            <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className={styles['input-container__input']} />
          </div>
          <div className={styles['input-container']}>
            <label htmlFor="email" className={styles['input-container__label']}>Email</label>
            <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className={styles['input-container__input']} />
          </div>
          <div className={styles['input-container']}>
            <label htmlFor="phone" className={styles['input-container__label']}>Phone Number</label>
            <input type="text" name="phone" placeholder='e.g. +1 234 567 890' id="phone" className={styles['input-container__input']} />
          </div>
        </form>
      </div>
    </section >
  )
}
