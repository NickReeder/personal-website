import { Injectable } from '@angular/core';

export interface project{
  id: number,
  title: string,
  image: projectImage[],
  tagline: string,
  description: string,
  link: string
}

export interface projectImage{
  itemImageSrc: string,
  alt: string,
  title: string

}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectData: project[] = [
    {
      id: 1,
      title: "Autonomous Taxi Optimization",
      image: [
        {
          itemImageSrc: './projects/waymo/waymo.webp',
          alt: 'Waymo DES - Waymo Car',
          title: 'The Waymo Jaguar'
        },
        {
          itemImageSrc: './projects/waymo/weekly.png',
          alt: 'Waymo DES - Weekly Rides',
          title: 'Weekly ridership demand in San Francisco.'
        },
        {
          itemImageSrc: './projects/waymo/wednseday.png',
          alt: 'Waymo DES - Wednesday Rides',
          title: 'Wednesday ridership demand in San Francisco.'
        },
        {
          itemImageSrc: './projects/waymo/Schedule.png',
          alt: 'Waymo DES - Weekday Charging Schedule',
          title: 'Charing schedule for weekdays. Colorored by group, blocks indicate charging periods.'
        },
      ],
      tagline: "Using Descrete Event Simulation to optimize the charging and deployement of autonomous taxis in a city. This was built with real Uber data and charging statistics of Waymo taxis",
      description: `Using R, built a descrete event simulation to model the deployement and charging of autonomous taxis in a San Francisco. The model was built with real uber data and charging statistics of Waymo taxis.
      <br><br>
      Using the DES, the schedule of the taxis were adjusted to maximize ridership, with the aim of market capture. The next stage of this project is in progress, and will involve using Reinforcment Learning to optimize the taxi schedules in real time.
      The core challenge of this project was the creation of the DES itself, which stocasitically created ride requests, ride distances, (from Uber data) and user tolerance for wait times. It then would dispatch taxis based on charge levels.
      The schedule would determine which taxis were availble for dispatch and which were reserved for charging. One of the core restrictions was ensuring that no taxi would run out of charge mid shift (an issue solved by a dynamic charging schedule).
      <br> <br>
      <h2> <b> Note: </b> This project was lost in a computer wipe and is being rebuilt. More details to come soon! </h2>`
      ,link: 'autonomous-taxi-optimization'
    },
    {
      id: 2,
      title: "Supreme Court Case Predictions",
      image: [
        {
          itemImageSrc: './projects/supreme_court/seal.png',
          alt: 'Seal of the Supreme Court',
          title: 'Seal of the Supreme Court'
        },],
      tagline: "Using NLP and Machine Learning to predict Supreme Court case outcomes and determine justice response to specific arguments. This was built with webscraped data for the Supreme Court.",
      description: `
      Usinng Python and NLP techniques, built a model to predict Supreme Court case outcomes and determine justice response to specific arguments. The objective of this project was two fold: first, to predict the outcome of Supreme Court cases, and second, to determine which arguments were most effective in swaying justices.
      The first ojective comes from the supreme courts increasing use of the shadow docket, in which cases are decided without oral arguments or full briefing. This has led to a need for predicting case outcomes based on limited information.
      The second objective comes from the goal of both aiding lawters in crafting their arguments and measuring consistency in justice decision making.
      <br><br>
      The core challenge of this project was the data collection and cleaning, as Supreme Court cases are not easily accessible in a structured format. I used webscraping techniques to collect data from Justia, which provides oral arguments, summaries, and case classifcation (ex. Copyrights, Reproductive Rights, etc.). I then used NLP techniques to clean and preprocess the data, including tokenization, stemming, and lemmatization.
      <br><br>
      The results of the tokenizaion were also used to create a network graph of argument similarty between justices, which provided insights into justice decision making and ideologicl trends.
      <br><br>
      <h2> <b> Note: </b> This project was lost in a computer wipe and is being rebuilt. More details to come soon! </h2>
      
      `,
      link: 'supreme-court'
    },
    {
      id: 3,
      title: "Air Traffic Control with Reinformcement Learning",
      image: [
        {
          itemImageSrc: './projects/atc/bluesky_route.png',
          alt: 'ATC RL - Flgiht Path',
          title: 'An example flight path in the BlueSky simulator.'
        },
        {
          itemImageSrc: './projects/atc/complex_airspace.jpg',
          alt: 'ATC RL - Complex Airspace',
          title: 'An example of a complex airspace with many aircraft.'
        }],
      tagline: "Developed a tool to make air traffic control decsions using Reinformcent Learning. Built on the BlueSky ATC simulator.",
      description: `Using Python, interface with the open source BlueSky ATC simulator to create a Rienformcent Learning Agent to make air traffic control decisions. The agent recieved the state of the airspace (altitudes, headings, speeds) of all aircraft and was tasked with sending new headings to avoid conflicts and maintain efficient traffic flow.
      The model was positvely reweard for landing aircraft and constantly penalized for the number of aircraft in the air. The core challenges were interfacing with the simulator and creating a reward system that would encourage the agent to make safe and efficient decisions.
      <br><br>
      <h2> <b> Note: </b> This project was lost in a computer wipe and is being rebuilt. If you are interested in my projects using reinforcement learning, check out my Baltro RL project! </h2>`, 
      link: 'atc-rl'
    },
    {
      id: 4,
      title: "Personal Website",
      image: [
        {
          itemImageSrc: './projects/website/ng-image.jpg',
          alt: 'Angular Logo',
          title: 'Angular Logo'
        },
      ],
      tagline: "This website! Built with Angular and hosted on git. ",
      description: "I developed this site with the goal of teaching myself angular and web development. Feedback is welcome and appreciated for all asspects, from design to content!",
      link: 'personal-website'
    },
    {
      id: 5,
      title: "Reinforment Learning for Balatro",
      image: [
        {
          itemImageSrc: './projects/balatro/Balatro_keyart.png',
          alt: 'Balatro RL - Store Phase',
          title: 'Balatro Logo.'
        },
        {
          itemImageSrc: './projects/balatro/balatro_hand.png',
          alt: 'Balatro RL - Hand Phase',
          title: 'An example of a high scoring hand.'
        },
        {
          itemImageSrc: './projects/balatro/balatro_shop.png',
          alt: 'Balatro RL - Store Phase',
          title: 'An example of a buy phase.'
        },
        {
          itemImageSrc: './projects/balatro/Loop.png',
          alt: 'Balatro RL - Architecture',
          title: 'The architecture/flow of information from the game to the agent.'
        },
      ],
      tagline: "Training a Reinforcement Leaning agent to play Balatro, a poker-inspired rouge-like game. Built with python, it serves as a case study for manageing short and long term rewards.",
      description: `Balatro is a deck-building rouge-like game in which the player must build combinations of cards and jokers to reach increasibly challening score thresholds.
      A single run consists of a series of 'antes' in which the player alternates between a store phase and a hand phase. In the store phase the player can buy and sell jokers and card enhancements, while in the hand phase the player plays a hand of poker to reach the score threshold.
      The player wins when they beat ante 8, through there is an endless mode after. It is these antes that I intend to structure the reward structure around, as simply reaching the highest score possible may not always set you up for success on the next ante.
      This lends itself well to Reinforcment Learning as the player must make a series of descrete decisions, managing short term and long term rewards in a clearly defined scoring system. 
      To learn more about the game (2024 game of the year!), visit the game's website <a href="https://www.playbalatro.com/">here</a>.
      <br><br>
      The first challenge of this project was creating a an API to interface with the game, which is written in LUA (a language I had never used before). Using LUA, I wrote the game state to a JSON file, which read into Python to serve as the agent's environment.
      <br><br>
      The second challenge was the state itself whhich is incredibly complex. For example, each shop may contain 2-4 main items which can be any of the 150 jokers (each of which may have 1 enhancement), 52 players cards (each of which may have up to 3 enchancements), or 52 boosters. A shop will also contains at least one voucher (which upgrades your run in some manner) and two booster packs (which contain either joker, playing cards, or consumables)
      The current plan is to build either a dense vector/series of vectors to represent this space OR tranlsate the state to language and use an LLM to parse it. I am still working on this aspect of the project.
      <br><br>
      The thirds challenge was training the agent itself as it had two primary tasks: managing stores to spend money wisely, and playing hands to reach the score threshold. I intend to train two polices for the agent to folow, one for each phase. 
      <br><br>
      Presently, I am still working on developing the enviorment and passing the complicated game state to the agent. Once this is complete, I will begin training the agent and tuning the reward structure.
      `,
      link: 'balatro-rl'
    },
    {
      id: 6,
      title: "Director - Crew Network Analysis",
      image: [
        {
          itemImageSrc: './projects/director/triangles.png',
          alt: 'Director Crew Network - Example Network',
          title: 'Example Network Graph by Ethnicity'
        },
        {
          itemImageSrc: './projects/director/renown.png',
          alt: 'Director Crew Network - Example Network',
          title: 'Example Network Graph of Renowned Directors'
        },
        {
          itemImageSrc: './projects/director/scorsese.png',
          alt: 'Director Crew Network - Scorsese',
          title: 'An example node with tiers of crew members.'
        },
        {
          itemImageSrc: './projects/director/burnett.png',
          alt: 'Director Crew Network - Burnett',
          title: 'An example node with no tiers of crew members.'
        },
      ],
      tagline: "Analyzed director - crew hiring patterns using network analysis and webscraped data from IMDB and NetworkX.",
      description: `
      Using Python, NetworkX, and webscraped data from IMDB I analyzed director - crew hiring patterns using network analysis. The objective of this project was to determine if directors tend to hire the same crew members across different projects, and if so, to what extent.
      These results were compared across catagories such as renown and ethnicity. This project was done in a team of four, where I was primarily responsible for network building and the underlying math, although there was extensive cross collaboration.
      It was also done under the supervison of <a href = "https://alexandernwala.com/"> Proffessor Alexander Nwala </a>, who provided guidance on the project and its direction.
      <br><br>
      To see our full report follow this link: <a href="https://github.com/NickReeder/Data-Projects/blob/main/Network_Sciences/IMDB/Final_report.md">Director-Crew Network Analysis</a>
      `,
      link: 'imdb-network-analysis'
    },
  ]


    
}
