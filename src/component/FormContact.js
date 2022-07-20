import '../styles/Form.css';

const FormContact = () => (
  <section className="contact-form--wrap">
    <div className="left-side--form">
      <div className="horizontal--line-black" />
      <p className="number-text--about number-text--form">01</p>
      <p className="question question-contact">Let&apos;s Contact  ✉</p>
    </div>
    <form className="form" id="form" action="https://formspree.io/f/mlezraod" method="POST">
      <input className="input input-name" type="text" name="name" placeholder="YOUR NAME" maxLength="30" required />
      <input className="input input-email" id="email" type="email" name="email" placeholder="YOUR EMAIL" required />
      <textarea
        className="input input-text-area"
        name="YOUR MESSAGE"
        cols="30"
        rows="10"
        maxLength="500"
        placeholder="YOUR MESSAGE"
        required
      />
      <button className="btn button-form" type="submit">Get It Touch</button>
    </form>
  </section>
);

export default FormContact;
