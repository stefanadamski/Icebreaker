
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.intro : 'loading'}
                  <span> </span>
                </h1>
                <p>{props.data ? props.data.lines : 'loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  O nas
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
