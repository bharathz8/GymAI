import { Hero, Features, Pricing, Testimonials, Footer, FAQ } from './sections/index';
import NavBar from './components/NavBar';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <main>
    <NavBar />
    <section className="xl:padding-1 wide:padding-r">
      <Hero />
    </section>
    <section className='padding'>
      <Features />
    </section>
    <section>
      <Pricing />
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <FAQ />
    </section>
    <section className="bg-transparent padding-t pb-8">
      <Footer />
    </section>
  </main>
  </RecoilRoot>
  )
}
export default App