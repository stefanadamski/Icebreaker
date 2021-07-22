import {PhotoModal} from "../Portfolio/PhotoModal";

export const Portfolio = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2> Portfolio </h2>
          <p>{props.data ? props.data.portfolioTitle : 'loading...'}</p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/icebreaker1.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Brand24</h4>
                    </div>
                    <img
                      src='img/portfolio/icebreaker1.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/icebreaker1.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sotrender</h4>
                    </div>
                    <img
                      src='img/portfolio/icebreaker1.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/icebreaker1.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Coś jeszcze</h4>
                    </div>
                    <img
                      src='img/portfolio/icebreaker1.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                      href='img/portfolio/icebreaker1.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Coś jeszcze</h4>
                    </div>
                    <img
                        src='img/portfolio/icebreaker1.jpg'
                        className='img-responsive'
                        alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                      href='img/portfolio/icebreaker1.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Coś jeszcze</h4>
                    </div>
                    <img
                        src='img/portfolio/icebreaker1.jpg'
                        className='img-responsive'
                        alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                      href='img/portfolio/icebreaker1.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Coś jeszcze</h4>
                    </div>
                    <img
                        src='img/portfolio/icebreaker1.jpg'
                        className='img-responsive'
                        alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhotoModal/>
      </div>
    </div>
  )
}
