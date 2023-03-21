import React,{useRef} from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import c from "./assets/mobile.png"
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
function Contact() {

  

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ukztntd', 'template_4rl35o9', form.current, 'JtcjoysPABtO-K2cj')
          .then(() => {
              handleClickOpen();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          
      };
  return (
    <>
    <div className='background'>
    <div  id='contact'>
    <div className='contact-container'>
      <span className='heading-span' data-aos="fade-up" data-aos-duration="1000">
        <img src={c} className='icon'/>
        <h2 className='heading' > Let's connect</h2>
      </span>
        <div className='form-container'>
        <div className='contact-info'>
          <span className='contact-icon'>
          
          <a href="tel:+1-908-969-8039">
          <svg className="email-call" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          </a>
          </span>
          <p>908-969-8039</p>
          
          <span className='contact-icon'>
          <a href="mailto:yousfanaqvi@gmail.com" className="email-call"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
          </a>
          </span>
          
          <p>yousfanaqvi@gmail.com</p>
          

        </div>
            <form ref={form} onSubmit={sendEmail}>
            <div className='form-textfield'>
            <TextField fullWidth label="Name" id="name" required />
            </div>
            <div className='form-textfield'>
              <TextField fullWidth label="Email" id="email" required />
            </div>
            <div className='form-textfield'>
              <TextField fullWidth label="Type your message here.." id="message" multiline
                maxRows={20} required />
            </div>
            <div  align="right">
              <button type='submit' name="submit" className='cta-btn' title='send message' ><SendIcon></SendIcon></button>
            </div>
            </form>
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been sent</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
    </div>
    
  </>
  )
}

export default Contact