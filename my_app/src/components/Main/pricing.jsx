import React from 'react';

export const Pricing = (props) => {
  return (
    <div id='pricing' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2> Cennik </h2>
          <p> Wybierz swój plan </p>
            <div className='imageIceFloat'>
                <div className='iceFloat'> </div>
            </div>
        </div>
          <div className='row'>
              <div className='col-md-4'>
                  <div className='pricing-bgr'>
                      <h4 className='pricingTitle'> Basic </h4>
                      <p className='pricingLevel'> 300 zł </p>
                      <p className='pricingDescription'> Lodołamacze używane są na zamarzających wodach żeglownych </p>
                      <ul className='pricingList'>
                          <li> Atut 1 </li>
                          <li> Atut 2 </li>
                          <li> Atut 3 </li>
                      </ul>
                      <a
                          href='#contact'
                          className='btn btn-custom btn-lg page-scroll'
                      >
                          Zamów
                      </a>{' '}
                  </div>
              </div>
              <div className='col-md-4' >
                  <div className='pricing-bgr'>
                      <h4 className='pricingTitle'> Medium </h4>
                      <p className='pricingLevel'> 500 zł </p>
                      <p className='pricingDescription'> Lodołamacze używane są na zamarzających wodach żeglownych </p>
                      <ul className='pricingList'>
                          <li> Atut 1 </li>
                          <li> Atut 2 </li>
                          <li> Atut 3 </li>
                      </ul>
                      <a
                          href='#contact'
                          className='btn btn-custom btn-lg page-scroll'
                      >
                          Zamów
                      </a>{' '}
                  </div>
              </div>
              <div className='col-md-4' >
                  <div className='pricing-bgr'>
                      <h4 className='pricingTitle'> Premium </h4>
                      <p className='pricingLevel'> 800 zł </p>
                      <p className='pricingDescription'> Lodołamacze używane są na zamarzających wodach żeglownych </p>
                      <ul className='pricingList'>
                          <li> Atut 1 </li>
                          <li> Atut 2 </li>
                          <li> Atut 3 </li>
                      </ul>
                      <a
                          href='#contact'
                          className='btn btn-custom btn-lg page-scroll'
                      >
                          Zamów
                      </a>{' '}
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}


