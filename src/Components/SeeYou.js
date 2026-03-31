import stolice from "../assets/images/stoliceBG.jpg"
import SplitText from './SplitText'

const SeeYou = () => {
  return (
    <section className='flex flex-col items-center justify-center overflow-hidden'>
      <div className='relative content-center w-full h-full'>
        <img className='w-full md:h-[700px]' src={stolice} alt="" />
      </div>
      <div className='absolute flex items-center'>
        <h1 className='text-5xl text-white'>
          <SplitText delay={0.2} stagger={0.07}>Vidimo se!</SplitText>
        </h1>
      </div>
    </section>
  )
}

export default SeeYou
