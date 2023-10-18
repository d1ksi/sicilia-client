import { motion } from "framer-motion"

const Italy: React.FC = () => {
   const imgAnimation = {
      hidden: {
         opacity: 0.1,
      },
      visible: {
         x: 0,
         opacity: 1,
      },
   }
   return (
      <motion.section
         variants={imgAnimation}
         transition={{
            duration: 3,
         }}
         initial="hidden"
         whileInView="visible"
         className="mt-28 italia flex flex-col justify-center items-center"
      >
         <p
            className="font-serif text-zinc-200 text-3xl tracking-widest"
            style={{
               transform: 'skewX(-15deg)',
               zIndex: 2,
               fontFamily: 'Raleway, sans-serif'
            }}
         >
            Відчуйте себе в Італії у нашому ресторані
         </p>
         <p
            className="mt-1 font-serif text-slate-200"
            style={{
               transform: 'skewX(-10deg)',
               zIndex: "2",
               fontFamily: 'Raleway, sans-serif'
            }}
         >
            З нами ви можете почуватися щасливим
         </p>
      </motion.section>
   )
}

export default Italy