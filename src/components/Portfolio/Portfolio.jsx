import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import './portfolio.css'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Run Buddy',
    reqs: 'HTML, CSS, JS',
    github: 'https://github.com/ChristanFox/run-buddy',
    demo: 'https://christanfox.github.io/run-buddy/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lazy Date',
    reqs: 'Handlebars, CSS, JS',
    github: 'https://github.com/njacques47/lazy-date',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Planner',
    reqs: 'JS, Restful APIs, Bcrypt, Filestack, MySQL, Sequelize, Handlebars, Dotenv, Nodemon',
    github: 'https://github.com/bk7711/travel_project',
    demo: 'https://murmuring-springs-00638.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: "Oui'd Cavern",
    reqs: 'MongoDB, Express, Bcrypt, React, NodeJS, Apollo, Graphql, JSONwebtoken, Nodemon, Mongoose',
    github: 'https://github.com/ChristanFox/silver-giggle',
    demo: 'https://fathomless-peak-27221.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Laker Nation Quiz',
    reqs: 'JS, CSS, HTML',
    github: 'https://github.com/ChristanFox/Week-4---Laker-Nation-Quiz',
    demo: 'https://christanfox.github.io/Week-4---Laker-Nation-Quiz/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Budget Tracker',
    reqs: 'Compression, Express, Mongoose, Morgan',
    github: 'https://github.com/ChristanFox/Budget-Tracker',
    demo: 'https://budget-tracker-cfox.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, reqs, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <h4>Utilizing</h4>
                <h5>{reqs}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }  
      </div>
    </section>
  )
}

export default Portfolio