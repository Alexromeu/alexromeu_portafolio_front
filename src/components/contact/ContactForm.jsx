import { useForm } from "react-hook-form"
import { useState } from "react"
import "../../styles/contact_us.css"
import handleFormSubmit from "./handleFormSubmit"
import { Dialog } from "@mui/material"
import { downloadFile } from "../../utils/DownloadFile"



export default function ContactForm() {
  const [ showDialog, setShowDialog ] = useState(false)
  const [downloadUrl, setDownloadUrl ] = useState('')

  const {
      register,
      reset,
      handleSubmit,
      formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    handleFormSubmit(data, setDownloadUrl, setShowDialog, reset)
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
      
  <dialog className="contact-dialog" open = {showDialog} onClose={() => setShowDialog(false)}>
    <h2>Download Resume?</h2>
    <p>Would you like to download the resume now?</p>

    <button onClick={() => {
      downloadFile(downloadUrl), 
      setShowDialog(false)}}

      >Yes</button>
    <button onClick={() => setShowDialog(false)}>No</button>
  </dialog>
)}
  </div>
);

}