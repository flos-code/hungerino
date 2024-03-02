import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'hungerino-46fa6',
          appId: '1:941655761150:web:d761993e1fed61047c05af',
          storageBucket: 'hungerino-46fa6.appspot.com',
          apiKey: 'AIzaSyANkY4Gf3Z-_uvW9r4h17FZNr9SBkkmxiQ',
          authDomain: 'hungerino-46fa6.firebaseapp.com',
          messagingSenderId: '941655761150',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
