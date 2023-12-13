import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  standalone:true
})
export class SpeechToTextComponent {
  recognition: any;
  transcription: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // console.log('Constructor called');
    if (isPlatformBrowser(this.platformId)) {
      // console.log("dbe");
      if ('SpeechRecognition' in window||'webkitSpeechRecognition' in window) {
        console.log('SpeechRecognition supported'); 
        this.recognition = new (window as Window).webkitSpeechRecognition();
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event: any) => {
          console.log('Recognition result:', event);
          const transcript = event.results[0][0].transcript;
          this.transcription = transcript;
        };
      } else {
        console.error('Speech recognition not supported in this browser');
      }
    }
  }

  startListening(): void {
    if (this.recognition && this.recognition.readyState !== 'listening') {
      this.transcription = ''; 
      this.recognition.start();
    } else {
      console.error('SpeechRecognition is already running or not initialized.');
    }
  }
  

  stopListening(): void {
    if (this.recognition) {
      this.recognition.stop();
    } else {
      console.error('SpeechRecognition not initialized.');
    }
  }
}



// import { Component, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { WhisperService } from './whisper';
// import { HttpClient } from '@angular/common/http'; 
// console.log("cvg");
// declare global {
//   interface Window {
//     SpeechRecognition: any;
//     webkitSpeechRecognition: any;
//   }
// }

// @Component({
//   selector: 'app-speech-to-text',
//   templateUrl: './speech-to-text.component.html',
//   styleUrls: ['./speech-to-text.component.css'],
//   standalone: true
// })
// export class SpeechToTextComponent {
//   recognition: any;
//   transcription: string = '';

//   constructor(
//     @Inject(PLATFORM_ID) private platformId: Object,
//     private whisperasService: WhisperService,
//     private http: HttpClient 
//   ) {
//     console.log("fgh");
//     if (isPlatformBrowser(this.platformId)) {
//       if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//         console.log('SpeechRecognition supported');
//         this.recognition = new (window as Window).webkitSpeechRecognition();
//         this.recognition.lang = 'en-US';

//         this.recognition.onresult = (event: any) => {
//           console.log('Recognition result:', event);
//           const transcript = event.results[0][0].transcript;
//           this.transcription = transcript;
//           this.transcribeToWhisperASR();
//         };
//       } else {
//         console.error('Speech recognition not supported in this browser');
//       }
//     }
//   }

//   startListening(): void {
//     if (this.recognition && this.recognition.readyState !== 'listening') {
//       this.transcription = '';
//       this.recognition.start();
//     } else {
//       console.error('SpeechRecognition is already running or not initialized.');
//     }
//   }

//   stopListening(): void {
//     if (this.recognition) {
//       this.recognition.stop();
//     } else {
//       console.error('SpeechRecognition not initialized.');
//     }
//   }

//   private transcribeToWhisperASR(): void {
//     const audioBlob = this.audioBlobFromTranscription(this.transcription);
  
//     this.whisperasService.transcribeAudio(audioBlob).subscribe(
//       (whisperTranscription) => {
//         console.log('Transcription to Whisper ASR:', whisperTranscription);
        
//       },
//       (error) => {
//         console.error('Error transcribing to Whisper ASR:', error);
//       }
//     );
//   }

//   private audioBlobFromTranscription(transcription: string): Blob {
   
//     return new Blob([transcription], { type: 'audio/wav' });
//   }
// }