import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Table from './components/Table'
import Example from './components/Example'
import Example2 from './components/Example2'

function App() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Table />
      {/* <Example /> */}
      {/* <Example2 /> */}
      <Footer />
    </div>
  );
}

export default App
