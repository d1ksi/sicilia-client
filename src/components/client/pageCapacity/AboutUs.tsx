import { motion } from "framer-motion"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const AboutUs: React.FC = () => {
   const navigate = useNavigate();

   const handleButtonClick = () => {
      navigate('/menu');
   };

   const textAnimation = {
      hidden: {
         y: -100,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      },
   }
   const imgAnimation = {
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
      <section className="m-16 flex justify-center" id="about">
         <motion.div
            variants={textAnimation}
            transition={{
               duration: 2,
            }}
            initial="hidden"
            whileInView="visible"
            className="w-2/4"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
         >
            <h2 className="text-4xl mb-6 about tracking-widest">Про нас</h2>
            <p className="mb-5">Відвідуючи наш ресторан, ви відчуєте, що переноситесь до самої Італії. Наша атмосфера наповнена італійським шармом і чарівністю. З відкритими вікнами, які пропускають тепле сонячне світло та звуки італійської музики в фоні, ви будете відчувати атмосферу багатого культурного досвіду Італії.
               <br />Наш інтер'єр оформлений в італійському стилі з урахуванням деталей, що створюють атмосферу комфорту та елегантності. Ви погрузитесь в атмосферу старовинних італійських ресторанів, де кожна страва - це мистецтво, а обслуговування - це відданість вам, як дорогому гостю.</p>
            <p className="mb-5">Кожен шматок італійського смаку, який ви скуштовуєте у нас, принесе вам відчуття подорожі в часі і просторі. Наша мета - зробити ваше відвідування нашого ресторану особливим і незабутнім, даруючи вам відчуття, ніби ви опинилися в самій Італії. Будемо раді прийняти вас у нашому "куску Італії" прямо тут, у нашому ресторані.</p>
            <button
               className="p-2 border-orange-500 border rounded-full button-about"
               onClick={handleButtonClick}
            >
               Відчути себе в Італії
            </button>
         </motion.div>
         <motion.img
            variants={imgAnimation}
            transition={{
               duration: 3.5,
            }}
            initial="hidden"
            whileInView="visible"
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/df/03/43/caption.jpg"
            alt="about-photo"
         />
      </section>
   )
}

export default AboutUs