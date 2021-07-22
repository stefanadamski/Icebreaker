
export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2> Icebreaker Media </h2>
        </div>
        <div className='row'>
            <div className='col-xs-6 col-md-3'>
                <div className='firstSectionIcon'>
                    <div className='boatIcon'> </div>
                </div>
                <h3>{props.data ? props.data.firstFeature : 'loading'}</h3>
                <p>{props.data ? props.data.description1 : 'loading'}</p>
            </div>
            <div className='col-xs-6 col-md-3'>
                <div className='firstSectionIcon'>
                    <div className='crackedGround'> </div>
                </div>
                <h3>{props.data ? props.data.secondFeature : 'loading'}</h3>
                <p>{props.data ? props.data.description2 : 'loading'}</p>
            </div>
            <div className='col-xs-6 col-md-3'>
                <div className='firstSectionIcon'>
                    <div className='iceCrystal'> </div>
                </div>
                <h3>{props.data ? props.data.thirdFeature : 'loading'}</h3>
                <p>{props.data ? props.data.description3 : 'loading'}</p>
            </div>
            <div className='col-xs-6 col-md-3'>
                <div className='firstSectionIcon'>
                    <div className='oceanTransportation'> </div>
                </div>
                <h3>{props.data ? props.data.fourthFeature : 'loading'}</h3>
                <p>{props.data ? props.data.description4 : 'loading'}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
