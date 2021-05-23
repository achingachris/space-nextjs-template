import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='px-4 py-5 my-5 text-center'>
        <Image
          className='d-block mx-auto mb-4'
          src='/aptmnts.svg'
          alt='apartments'
          width='500'
          height='350'
        />
        <h1 className='display-5 fw-bold'>Waiyaki Homes</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button
              type='button'
              className='btn btn-primary btn-lg px-4 me-sm-3'
            >
              rent
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg px-4'
            >
              purchase
            </button>
          </div>
        </div>
      </div>

      <div className='b-example-divider'></div>
    </div>
  )
}

export default Hero
