import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  quizzes: Quiz[] = [
    {
      question: 'Which of the following is not part of the gadgets',
      answer: [
        {option: 'Mobile phones', correct: false},
        {option: 'Head phones', correct: false},
        {option: 'Wireless computer set', correct: false},
        {option: 'Car', correct: true},
        
      ]
    },
    {
      question: 'Which of the following is not part of electronic',
      answer: [
        {option: 'Stove', correct: true},
        {option: 'Mobile', correct: false},
        {option: 'Watch', correct: false},
        {option: 'Television', correct: false},

      ]
    },
    {
      question: 'Which of the following does not make part of the computer?',
      answer: [
        {option: 'Printer', correct: false},
        {option: 'Fridge', correct: true},
        {option: 'Mobile', correct: false},
        {option: 'Laptop', correct: false},

      ]
    },
    {
      question: 'Which of the following is not part of the four element that makes up a computer.',
      answer: [
        {option: 'Power', correct: true},
        {option: 'Storage', correct: false},
        {option: 'Input', correct: false},
        {option: 'Output', correct: false},

      ]
    },
    {
      question: 'What does XML stand for?',
      answer: [
        {option: 'eXtensible Multiple Langauge', correct: false},
        {option: 'eXtensible Makeup Language', correct: false},
        {option: 'eXtansible Mult Lingo', correct: false},
        {option: 'eXtensible Markup langauge', correct: true},
      ]
    },
    {
      question: 'What does CPU stand for?', 
      answer: [
        {option: 'Central Processing Unit', correct: true},
        {option: 'Center Power Units', correct: false},
        {option: 'Centeral Pointer Union', correct: false},
        {option: 'Central Processing Union', correct: false}
      ]
    },
    {
      question: 'What is the purpose of webpack?',
      answer: [
        {option: 'to be a central repository of web packages', correct: false},
        {option: 'to manage web packages versions', correct: false},
        {option: 'to manage web code and resource bundling', correct: true},
        {option: 'to be a central repository of web packages', correct: false},
      ]
    },
    {
      question: 'What is the main primary role of Data Base To store data in the background',
      answer: [
        {option: 'false', correct: false},
        {option: 'true', correct: true},
        {option: 'Neither true nor false', correct: true},
        {option: 'optional', correct: true},
      ]
    },
    {
      question: "Full stack web development doesn't have to know the hardware of the computer?",
      answer: [
        {option: 'true', correct: false},
        {option: 'False', correct: true},
      ]
    },
    {
      question: 'Pair-Pair network a computer act as a server and client?', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
