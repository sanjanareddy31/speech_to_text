import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';;
import { HttpClientModule } from '@angular/common/http';
// import { WhisperService } from './speech-to-text/whisper';
// import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [SpeechToTextComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    CommonModule,
    RouterModule.forRoot([]), 
    RouterOutlet,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}