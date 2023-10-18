import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { motion } from "framer-motion"


const Footer: React.FC = () => {
   const footerAnimation = {
      hidden: {
         y: 100,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      },
   }
   return (
      <motion.footer
         variants={footerAnimation}
         transition={{
            duration: 2,
         }}
         initial="hidden"
         whileInView="visible"
         className="flex w-screen mt-12 footer" id="footer"
      >
         <div className="footer1 w-2/6 flex justify-center items-center"><p><PlaceIcon />Проспект Миру, 9, Рівне</p></div>
         <div className="footer2 w-2/6 flex justify-center items-center">
            <a href="https://www.instagram.com/"><InstagramIcon sx={{ fontSize: "40px" }} /></a>
            <a className='m-10' href="https://web.telegram.org/"><TelegramIcon sx={{ fontSize: "40px" }} /></a>
            <a href="https://www.facebook.com/"><FacebookIcon sx={{ fontSize: "40px" }} /></a>
         </div>
         <div className="footer3 w-2/6 flex flex-col justify-center items-center">
            <a className='mb-4' href="tel:+38000000000"><LocalPhoneIcon />+38000000000</a>
            <a href="mailto:mail@example.com"><MailIcon />mail@example.com</a>
         </div>
      </motion.footer>
   )
}
export default Footer