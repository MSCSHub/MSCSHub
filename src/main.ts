import { enableProdMode, EnvironmentProviders, importProvidersFrom, Provider } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './app/material/material.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { ScreenTrackingService, UserTrackingService, provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      BrowserModule,
      MaterialModule,
      MatCardModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      MatChipsModule,
      FormsModule,
      MatInputModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatOptionModule,
      MatSelectModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      provideRouter(APP_ROUTES, 
        withPreloading(PreloadAllModules),
        withDebugTracing(),
      ),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAnalytics(() => getAnalytics()),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      ScreenTrackingService,
      UserTrackingService,
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
      { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));