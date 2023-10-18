import AboutUs from "./pageCapacity/AboutUs"
import Footer from "./pageCapacity/Footer"
import Italy from "./pageCapacity/Italy"
import Map from "./pageCapacity/Map"
import SiciliaHeader from "./pageCapacity/SiciliaHeader"


const MainPage: React.FC = () => {
   return (
      <div className="main-page-wraper">
         < SiciliaHeader />
         <main>
            < Italy />
            < AboutUs />
            < Map />
         </main>
         < Footer />
      </div>
   )
}
export default MainPage