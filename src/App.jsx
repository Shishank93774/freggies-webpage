import './App.css'
import Contact from './components/contact/Contact';
import Events from './components/Events/Events';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/navbar';
import Sliders from './components/sliders/Sliders';

const cardsData = [
  {
    label: "Handbag",
    alt: "image3",
    url: "https://static.wixstatic.com/media/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg",
    price: "499"
  },
  {
    label: "Sweater",
    alt: "image4",
    url: "https://static.wixstatic.com/media/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg",
    price: "2,099"
  },
  {
    label: "Flower Vase",
    alt: "image5",
    url: "https://static.wixstatic.com/media/22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg",
    price: "1,099"
  },
  {
    label: "T-Shirt",
    alt: "image6",
    url: "https://static.wixstatic.com/media/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg",
    price: "449"
  },
]
;
const cardsData2 = [
  {
    label: "Handbag",
    alt: "image3",
    url: "https://static.wixstatic.com/media/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg",
    price: "499"
  },
  {
    label: "Sweater",
    alt: "image4",
    url: "https://static.wixstatic.com/media/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg",
    price: "2,099"
  },
  {
    label: "T-Shirt",
    alt: "image6",
    url: "https://static.wixstatic.com/media/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg",
    price: "449"
  },
];

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sliders data={cardsData} title={"BEST SELLERS"}></Sliders>
      <Sliders data={cardsData2} title={"BEST OFFERS"}></Sliders>
      <Sliders data={cardsData} title={"KITCHEN MUST HAVE's"}></Sliders>
      <Events></Events>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
