import { useForm } from "react-hook-form"
import { useState } from "react"
import "../../styles/contact_us.css"
import handleFormSubmit from "./handleFormSubmit"
import validatePayload from "../../utils/validatePayload"

export default function ContactForm() {
  const [showDialog, setShowDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errors, setErrors] = useState([])
  const { register, reset, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const errors = validatePayload(data)

    if (errors.length > 0) {
      setErrors(errors)
      setShowErrorDialog(true)
    
    }

    handleFormSubmit(data, setShowDialog, reset);
    setShowDialog(true);
  }

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend><h2>Contact Me</h2></legend>
          <div className="input-container">
            <input type="email" placeholder="example@mail.com" {...register("email")} className="input-elem" />
            <input type="text" placeholder="John Doe" {...register("name")} className="input-elem" />
            <textarea placeholder="Write a message here..." {...register("message")} className="input-elem" />
          </div>
          <div className="subnitAndClear-btn-container">
            <button className="btn-form" type="submit">Send</button>
            <button className="btn-form" type="button" onClick={() => reset()}>Clear</button>
          </div>
        </fieldset>
      </form>

      {showDialog && (
        <dialog className="contact-dialog" open={showDialog} onClose={() => setShowDialog(false)}>
          <h2>Download Resume?</h2>
          <p>Would you like to download my resume?</p>

          <button
            onClick={() => {
              window.open("/Alexander_Romeu_Garcia_resume2026+.pdf","_blank")
              setShowDialog(false)
            }}
          >
            Yes
          </button>

          <button onClick={() => setShowDialog(false)}>No</button>
        </dialog>
      )}

      {showErrorDialog && (
        <dialog className="contact-dialog" open={showErrorDialog}>
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
          <p>Please send the right information.</p>

          <button onClick={() => setShowErrorDialog(false)}>OK</button>
        </dialog>
      )}
    </div>
  )
}
