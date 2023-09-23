import "./App.css"
import Heading from "./component/heading/Heading"
import Question from "./component/question/Question"
import Footer from "./component/footer/Footer"
import linkedinlogo from "./assets/linkedinlogo.svg"
function App() {

  return (
    <>
      <Heading />
      <div id="container">
        <Question />
      </div>
      <Footer img={linkedinlogo} />
    </>
  )
}

export default App
