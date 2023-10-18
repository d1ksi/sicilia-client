const Logo: React.FC = () => {
   return (
      <div className="w-screen flex flex-col justify-center items-center">
         <div className="h-20 rounded-full w-56 mt-8 bg-orange-100 flex flex-col justify-center items-center">
            <p className="text-4xl italic font-serif tracking-widest"
               style={{ transform: 'skewX(-20deg)' }}
            >
               Sicilia
            </p>
            <div className="flag"></div>
         </div>
      </div>
   )
}

export default Logo