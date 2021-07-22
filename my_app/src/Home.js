import { useState, useEffect } from 'react'
import { Navigation } from './components/Main/navigation'
import { Header } from './components/Main/header'
import { Features } from './components/Main/features'
import { About } from './components/Main/about'
import { Strategies } from './components/Main/strategies'
import { Portfolio } from './components/Main/portfolio'
import { Pricing } from './components/Main/pricing'
import { Contact } from './components/Main/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Strategies data={landingPageData.Strategies} />
            <Portfolio data={landingPageData.Portfolio}/>
            <Pricing data={landingPageData.Pricing} />
            <Contact data={landingPageData.Contact} />
        </div>
    )
}

export default App

