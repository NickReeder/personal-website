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
      image: [],
      tagline: "Using Descrete Event Simulation to optimize the charging and deployement of autonomous taxis in a city. This was built with real Uber data and charging statistics of Waymo taxis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      link: 'autonomous-taxi-optimization'
    },
    {
      id: 2,
      title: "Supreme Court Case Predictions",
      image: [],
      tagline: "Using NLP and Machine Learning to predict Supreme Court case outcomes and determine justice response to specific arguments. This was built with webscraped data for the Supreme Court.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      link: '/supreme-court'
    },
    {
      id: 3,
      title: "Air Traffic Control with Reinformcement Learning",
      image: [],
      tagline: "Developed a tool to make air traffic control decsions using Reinformcent Learning. Built on the BlueSky ATC simulator.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      link: 'atc-rl'
    },
    {
      id: 4,
      title: "Personal Website",
      image: [],
      tagline: "This website! Built with Angular and hosted on git. ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
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
          title: 'The agent is playing a hand, trying to reach the score threshold with the cards it has.'
        },
        {
          itemImageSrc: './projects/balatro/balatro_shop.png',
          alt: 'Balatro RL - Store Phase',
          title: 'The agent is deciding which cards to buy and sell in order to maximize its score.'
        },
        {
          itemImageSrc: 'standin_image.png',
          alt: 'Balatro RL - Architecture',
          title: 'The architecture/flow of information from the game to the agent.'
        },
      ],
      tagline: "Training a Reinforcement Leaning agent to play Balatro, a poker-inspired rouge-like game. The model had a 90% win rate and was a case study in managing short and long term rewards.",
      description: `Balatro is a deck-building rouge-like game in which the player must build combinations of cards and jokers to reach increasibly challening score thresholds.
      The game has two 'phases': one in which the player manages funds to buy and sell jokers and card enhancements, and one in which the player plays hands to meet the score threshold.
      This lends itself well to Reinforcment Learning as the player must make a series of descrete decisions, managing short term and long term rewards in a clearly defined scoring system. 
      To learn more about the game (2024 game of the year!), visit the game's website <a href="https://www.playbalatro.com/">here</a>.
      <br><br>
      The first challenge of this project was creating a an API to interface with the game, which is written in LUA (a language I had never used before). Using LUA, I wrote the game state to a JSON file, which read into Python to serve as the agent's environment.
      <br><br>
      The second challenge was training the agent itself as it had two primary tasks: managing stores to spend money wisely, and playing hands to reach the score threshold. I used a Deep Q-Network (DQN) approach, training two separate models for each task. The store model was trained on a reward system based on profit margins and the hand model was trained on a reward system based on score thresholds.
      <br><br>
      After training, the models were able to achieve a 90% win rate on the hardest difficulty setting, and were able to consistently reach high score thresholds.
      `,
      link: 'balatro-rl'
    },
    {
      id: 6,
      title: "Director - Crew Network Analysis",
      image: [],
      tagline: "Analyzed director - crew hiring patterns using network analysis and webscraped data from IMDB and NetworkX.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      link: 'personal-website'
    },
  ]


    
}
