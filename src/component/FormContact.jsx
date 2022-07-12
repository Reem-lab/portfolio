import '../styles/Form.css';

const FormContact = () => {
  return (
    <section className="contact-form--wrap">
       <div className="left-side--form">
         <div className="horizontal--line-black" />
         <p className="number-text--about">01</p>
         <p className="question">Let's Contact  ✉</p>
      </div>
      <form class="form" id="form" action="https://formspree.io/f/mlezraod" method="POST">
          <input class="input input-name" type="text" name="name" placeholder="YOUR NAME" maxlength="30" required autofocus />
            <input class="input input-email" id="email" type="email" name="email" placeholder="YOUR EMAIL" required />
            <textarea class="input input-text-area" name="YOUR MESSAGE" cols="30" rows="10" maxlength="500"
              placeholder="YOUR MESSAGE" required></textarea>
            <button class="btn button-form" type="submit">Get It Touch</button>
      </form>
    </section>
  )
}

export default FormContact;
