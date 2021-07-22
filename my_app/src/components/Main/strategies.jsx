
export const Strategies = (props) => {
  return (
    <div id='strategies' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2> Strategie </h2>
          <p>
            Jednostka pływająca o specjalnej, wzmocnionej konstrukcji kadłuba umożliwiającej łamanie pokrywy lodowej
            (np. lodu morskiego). Lodołamacze używane są na zamarzających wodach żeglownych, aby umożliwić w ten sposób
            żeglugę w okresie zimowym.
          </p>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            {' '}
            <div className='iconContainer'>
              <div className='iciclesIcon'> </div>
            </div>
            <div className='service-desc'>
              <h3> {props.data ? props.data.strategyOne : 'loading'} </h3>
              <p>Lodołamacze używane są na zamarzających wodach żeglownych, aby umożliwić
                w ten sposób żeglugę w okresie zimowym.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='iconContainer'>
              <div className='iglooIcon'> </div>
            </div>
            <div className='service-desc'>
              <h3> Icebreaker </h3>
              <p>Lodołamacze używane są na zamarzających wodach żeglownych, aby umożliwić
                w ten sposób żeglugę w okresie zimowym.</p>
            </div>
          </div><div className='col-md-4'>
          {' '}
          <div className='iconContainer'>
            <div className='snowIcon'> </div>
          </div>
          <div className='service-desc'>
            <h3> Icebreaker </h3>
            <p>Lodołamacze używane są na zamarzających wodach żeglownych, aby umożliwić
              w ten sposób żeglugę w okresie zimowym.</p>
          </div>
        </div>
        </div>
        <button className='btn-custom'> Więcej </button>
      </div>
    </div>
  )
}
