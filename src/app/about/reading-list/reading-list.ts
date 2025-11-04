import { Component } from '@angular/core';
import { Media } from "./media/media";
import { title } from 'node:process';

@Component({
  selector: 'app-reading-list',
  imports: [Media],
  templateUrl: './reading-list.html',
  styleUrl: './reading-list.css'
})
export class ReadingList {
    fictionList = [
    {
      title: 'The Expanse Series',
      author: 'James S.A. Corey',
      image: 'assets/images/gatsby.jpg',
      review: `Best in class of the hard science sci-fi genre, excelling not just in its science but by its deep character work and world building. 
      I first was introduced thgough the show and have recently audio booked the main series and its novellas. This series is a must read for any sci-fi fan, and a great option for those who don't naturally gravitate to the genre.
      It is above all else a story about people that is fed by exceptional charecters and the systems they inhabit.`
    },
    {
      title: 'The Pitt',
      author: 'HBO',
      image: 'assets/images/pitt.jpg',
      review: `The best modern medical drama by far. The show follows the ER of The Pitt (based on the Alleghany General Hospital in Pittsburgh) and is shot in near real time.
        The show masterfully blends the "hurry up to wait" nature of an (extremely medically accurate) ER with the personal lives of its charecters. While some features may be played up, such as the competion between the ER and Surgery departments, the show is overall a very accurate portrayal of the medical field.`
    }
  ];

  nonFictionList = [
    {
      title: 'A Brief History of Time',
      author: 'Dr. Steven Hawking',
      image: 'assets/images/brief-history-of-time.jpg',
      review: `Written by Steven Hawking, this book provide an excellent introduction into the complexities of theoretical physics. It is not an easy read (it has taken me two attempts and more than a couple months to finish it), but it is well worth the effort.
        Hawking has a unique ability to explain complex and mindbending topics such as half spin particles and backwards progoation of time in a way that feels conversational and approachable. It is written like you are talking to your smartest friend.`
    },
    {
      title: 'Everything is Tuberculosis',
      author: 'John Green',
      image: 'assets/images/brief-history-of-time.jpg',
      review: `Written by John Green, Everything is Tuberculosis provides a fascinating insight into both the history and current state of the deadliest disease in human history.
      It seemlessly bounces between the history of the disease, the history that was shaped by it (everything from the state of New Mexico to the invetion of the aderondak chair to World War I), and how the fully preventable diseease remains an major killer.
      It also discusses his personal experience of going to TB clinics in Sierra Lion and relationship with TB patient Henry. It is a quick read that will bum you out less than the title may suggest, but instead leaves you with a greater undestanding of the disease and pathway to eradication.`
    },
    {
      title: 'Abundance',
      author: 'Derek Thompson and Ezra Klein',
      image: 'assets/images/abundance.jpg',
      review: `Written by Derek Thompson and Ezra Klein, Abundance seeks to set the foundation for a new type of policy and politcal ideology that is built on the idea that both scarcity and abundance are choices. 
        It seeks to reframe scarcity politics as a weight hung around the american politcal ecosystem's leg and offer pathways to building more. It is an inherently optimistic book, something missing for current politics, and is a great read for those interested in boht the politcs and policy.
        It alsos seeks to disconnect itslef from the supply-side vs demand-side debate and instead focuses on the processes themselves.`
    }
  ];

}
