import PlaceIcon from '@mui/icons-material/Place';
import { motion } from "framer-motion"





const Map: React.FC = () => {

   const titleAnimation = {
      hidden: {
         x: -100,
         opacity: 0,
      },
      visible: {
         x: 0,
         opacity: 1,
      },
   }
   const mapAnimation = {
      hidden: {
         x: 100,
         opacity: 0,
      },
      visible: {
         x: 0,
         opacity: 1,
      },
   }

   return (
      <section id="map" className="flex justify-center">

         <motion.div
            variants={titleAnimation}
            transition={{
               duration: 2,
            }}
            initial="hidden"
            whileInView="visible"
            className='mr-8 map'
         >
            <h2 className='text-4xl mb-6 tracking-widest'>Завітай до нас</h2>
            <p><PlaceIcon />Проспект Миру, 9, Рівне</p>
         </motion.div>


         <motion.iframe
            variants={mapAnimation}
            transition={{
               duration: 3.5,
            }}
            initial="hidden"
            whileInView="visible"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.2043426671494!2d26.24845457696827!3d50.623320674901166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f135369300001%3A0x87270d51ee8a5bea!2z0KHQuNGG0LjQu9C40Y8!5e0!3m2!1sru!2sua!4v1694998078713!5m2!1sru!2sua"
            className="googlemap"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></motion.iframe>

      </section>
   )
}

export default Map