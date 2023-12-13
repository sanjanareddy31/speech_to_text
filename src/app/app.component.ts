// import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// @NgModule({
//   declarations:[SpeechToTextComponent],
//   imports:[BrowserModule]

// })
// export class AppComponent {
//   title = 'whisper_project';
// }

import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
 import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[SpeechToTextComponent]
  
})

export class AppComponent {
  title = 'whisper_project';
}