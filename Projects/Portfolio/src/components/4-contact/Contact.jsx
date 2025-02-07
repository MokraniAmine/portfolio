import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import AnimationContact from '../../../public/animation/AnimationContact.json';

const Contact = () => {
  const [state, handleSubmit] = useForm("mbldklra");
  if (state.succeeded) {
    return <h1>Thank you for reaching out! 🙌</h1>;
}
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Me
      </h1>
      <p className="sub-title">
        Got a Problem? Let’s Solve It Together! 🚀 Whether you need my expertise
        or have a question, I’m just a message away. Let’s connect and bring
        your ideas to life! 💻✨
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex" >
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{marginTop:"25px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">Submit</button>
        </form>
        <div className="animation">
          <Lottie className="contact-animation"
                  loop={true}
                  style={{height:355}}
                  animationData={AnimationContact}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
