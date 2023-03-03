import css from '../../components/Layout/Layout.module.css';
export default function HomePage() {
  return (
    <>
      <section>
        <h1 className={css.navtext}>Phonebook</h1>
        <p className={css.navtext}>Hi, let's go... </p>
      </section>
    </>
  );
}
