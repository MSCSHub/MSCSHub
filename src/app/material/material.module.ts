// material.module.ts
import { ModuleWithProviders, NgModule} from "@angular/core";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core'; // Don't need
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge'; // Don't need
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Don't need
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper'; // Don't need
import { MatDatepickerModule } from '@angular/material/datepicker'; // Don't need
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion'; // Don't need
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list'; // Don't need
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'; // Don't need
import { MatPaginatorModule } from '@angular/material/paginator'; // Don't need
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Don't need
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Don't need
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core'; // Don't need
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider'; // Don't need
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Don't need
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs'; // Don't need
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree'; // Don't need
import { CustomIconRegistry, SVG_ICONS } from '../shared/custom-icons/custom-icon-registry';


// These are the hardcoded inline svg sources to be used by the `<mat-icon>` component.
// tslint:disable: max-line-length
export const svgIconProviders = [
    {
      provide: SVG_ICONS,
      useValue: {
        name: 'close',
        svgSource:
          '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />' +
            '<path d="M0 0h24v24H0z" fill="none" />' +
          '</svg>',
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        name: 'insert_comment',
        svgSource:
          '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />' +
            '<path d="M0 0h24v24H0z" fill="none" />' +
          '</svg>',
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        name: 'keyboard_arrow_right',
        svgSource:
          '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />' +
          '</svg>',
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        name: 'menu',
        svgSource:
          '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />' +
          '</svg>',
      },
      multi: true,
    },
  
    // Namespace: logos
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'logos',
        name: 'github',
        svgSource:
          '<svg focusable="false" viewBox="0 0 51.8 50.4" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8' +
                'c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1' +
                'c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6' +
                'c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9' +
                'c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3' +
                'C51.5,11.7,40.1,0.2,25.9,0.2z" />' +
          '</svg>',
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'logos',
        name: 'twitter',
        svgSource:
          '<svg focusable="false" viewBox="0 0 50 59" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3.2-7.5-3.2' +
                'c-5.7,0-10.3,4.6-10.3,10.3c0,0.8,0.1,1.6,0.3,2.3C16.1,16.7,8.5,12.6,3.5,6.4c-0.9,1.5-1.4,3.3-1.4,5.2c0,3.6,1.8,6.7,4.6,8.5' +
                'C5,20,3.4,19.6,2,18.8c0,0,0,0.1,0,0.1c0,5,3.5,9.1,8.2,10.1c-0.9,0.2-1.8,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2' +
                'c1.3,4.1,5.1,7,9.6,7.1c-3.5,2.8-7.9,4.4-12.7,4.4c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.9,4.6,15.7,4.6c18.9,0,29.2-15.6,29.2-29.2' +
                'c0-0.4,0-0.9,0-1.3C46.9,13.2,48.6,11.4,50,9.3z" />' +
          '</svg>',
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'logos',
        name: 'slack',
        svgSource:
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"' +
            'aria-hidden="true" focusable="false">' +
            '<path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 ' +
              '0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 ' + 
              '1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 ' + 
              '0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 ' + 
              '1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z"/>' +
          '</svg>'
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'logos',
        name: 'reddit',
        svgSource:
          `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"/></svg>`
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'icons',
        name: 'summer',
        svgSource:
        `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 512 512">
          <g>
            <path d="M377.139 259.492c0 66.637-54.020 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658 0-66.637 54.020-120.658 120.658-120.658 66.637 0 120.658 54.020 120.658 120.658z" fill="#ebbc00"/>
            <path d="M228.352 100.669l30.27-77.906 25.979 77.906z" fill="#ebbc00"/>
            <path d="M228.352 411.341l30.27 77.895 25.979-77.895z" fill="#ebbc00"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M100.659 287.601l-77.895-30.29 77.895-25.959z" fill="#ebbc00"/>
            <path d="M411.361 287.601l77.875-30.29-77.875-25.959z" fill="#ebbc00"/>
            <path d="M126.597 165.703l-33.659-76.472 73.442 36.7z" fill="#ebbc00"/>
            <path d="M346.276 385.423l76.524 33.639-36.741-73.442z" fill="#ebbc00"/>
            <path d="M168.499 388.199l-76.493 33.639 36.72-73.442z" fill="#ebbc00"/>
            <path d="M388.199 168.499l33.618-76.513-73.4 36.751z" fill="#ebbc00"/>
          </g>
        </svg>
        `
      },
      multi: true,
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'icons',
        name: 'spring',
        svgSource: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="24" height="24">
          <defs>
            <style>
              .cls-1 {fill: #7ba60d;}
              .cls-2 {fill: #9cc925;}
              .cls-3 {fill: #ffa400;}
              .cls-4 {fill: #ffd900;}
            </style>
          </defs>
          <title>orange-flower</title>
          <g id="orange-flower">
            <path class="cls-1"
              d="M63.09,55.21a1.6,1.6,0,0,0-2.27,0l-6.06,5.79a2.06,2.06,0,0,0-.13.18c-.06,0-.12.07-.17.12l-9,9.24-9-9.24a1.24,1.24,0,0,0-.17-.12,1.43,1.43,0,0,0-.13-.18l-6.05-5.79a1.61,1.61,0,1,0-2.22,2.32L34,63.27a1.42,1.42,0,0,0,.14.09,1.05,1.05,0,0,0,.09.13l9.32,9.59a1.59,1.59,0,0,0,1.15.48,1.61,1.61,0,0,0,.82-.26,1.57,1.57,0,0,0,.81.26,1.59,1.59,0,0,0,1.15-.48l9.33-9.59a.68.68,0,0,0,.08-.13.82.82,0,0,0,.14-.08L63,57.48A1.61,1.61,0,0,0,63.09,55.21Z" />
            <path class="cls-1" d="M43.86,37.53V83.39a1.6,1.6,0,1,0,3.21,0V37.53Z" />
            <path class="cls-2"
              d="M21.17,49.05S21.35,67.13,33,67.14a6.65,6.65,0,0,0,6.64-6.64C39.61,50.6,21.17,49.05,21.17,49.05Z" />
            <path class="cls-2"
              d="M50.39,60.49A6.65,6.65,0,0,0,57,67.14c11.62,0,11.8-18.09,11.8-18.09S50.39,50.6,50.39,60.49Z" />
            <path class="cls-3"
              d="M69.17,27.15c-.23-7.56-11.55-7.27-11.55-7.27s6.74-8.7-.52-13.63S45,12.61,45,12.61,40.83,1.94,33,6.25s-.52,13.63-.52,13.63-12.62-2-11.54,7.27,11.54,7.27,11.54,7.27S25.7,43.12,33,48.05,45,41.69,45,41.69s4.21,10.67,12.07,6.36.52-13.63.52-13.63S69.4,34.72,69.17,27.15Z" />
            <circle class="cls-4" cx="45" cy="27.15" r="8.53" />
          </g>
        </svg>
        `
      },
      multi: true
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'icons',
        name: 'fall',
        svgSource: `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24"
            viewBox="0 0 1182.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#98482b" stroke="none">
              <path
                d="M5630 12278 c-150 -282 -386 -722 -522 -978 -271 -506 -290 -534 -386 -570 -134 -50 -200 -28 -707 235 -227 118 -415 215 -417 215 -2 0 10 -78 28 -172 51 -267 428 -2277 490 -2603 58 -313 65 -403 38 -495 -32 -107 -122 -162 -228 -140 -115 24 -113 22 -840 838 -373 419 -681 761 -683 759 -2 -2 -53 -177 -113 -388 -65 -225 -119 -397 -133 -416 -31 -47 -99 -90 -161 -103 -63 -13 -7 -23 -994 185 -409 86 -745 155 -747 153 -2 -2 21 -94 51 -203 408 -1487 441 -1609 454 -1689 20 -123 -14 -194 -115 -244 -22 -11 -173 -82 -335 -158 -162 -76 -298 -140 -301 -143 -4 -3 632 -526 1413 -1161 781 -635 1438 -1174 1460 -1198 22 -24 52 -69 66 -100 23 -48 27 -71 27 -142 -1 -77 -8 -108 -79 -340 -122 -397 -175 -574 -173 -576 1 -1 639 72 1417 162 778 90 1430 162 1448 159 18 -4 47 -19 65 -34 28 -26 32 -35 35 -97 2 -38 -6 -226 -17 -419 -23 -383 -65 -1112 -111 -1920 -16 -286 -32 -559 -36 -607 l-6 -88 392 0 392 0 -6 87 c-4 49 -20 324 -36 613 -47 825 -88 1535 -111 1915 -11 193 -19 381 -17 419 3 62 7 71 35 97 18 15 47 30 65 34 18 3 670 -69 1448 -159 778 -90 1416 -163 1417 -162 2 2 -51 179 -173 576 -71 232 -78 263 -79 340 0 71 4 94 27 142 14 31 44 76 66 100 22 24 679 563 1460 1198 781 635 1417 1158 1413 1161 -3 3 -139 67 -301 143 -162 76 -313 147 -335 158 -101 50 -135 121 -115 244 13 80 46 202 454 1689 30 109 53 201 51 203 -2 2 -338 -67 -747 -153 -987 -208 -931 -198 -994 -185 -62 13 -130 56 -161 103 -14 19 -68 191 -133 416 -60 211 -111 386 -113 388 -2 2 -310 -340 -683 -759 -727 -816 -725 -814 -840 -838 -71 -15 -127 1 -175 49 -73 73 -86 194 -45 422 20 108 381 2033 519 2762 18 97 31 177 29 177 -2 0 -190 -97 -417 -215 -451 -234 -519 -261 -630 -253 -72 6 -126 32 -177 85 -32 32 -397 706 -1038 1911 -24 45 -47 82 -50 82 -3 0 -129 -231 -280 -512z" />
            </g>
          </svg>
        `
      },
      multi: true
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'icons',
        name: 'check',
        svgSource: `
          <svg version="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
            <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
          </svg>
        `
      },
      multi: true
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'logos',
        name: 'discord',
        svgSource: `
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 245 240" width="24" height="24"><style>.st0{fill:#FFFFFF;}</style>
            <path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 
            103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 
            20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 
            19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 
            3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 
            8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 
            5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 
            0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
          </svg>
        `
      },
      multi: true
    }
  ];

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatBadgeModule, // Don't need
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule, // Don't need
        MatChipsModule,
        MatStepperModule, // Don't need
        MatDatepickerModule, // Don't need
        MatDialogModule,
        MatExpansionModule, // Don't need
        MatFormFieldModule,
        MatGridListModule, // Don't need
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule, // Don't need
        MatPaginatorModule, // Don't need
        MatProgressBarModule, // Don't need
        MatProgressSpinnerModule, // Don't need
        MatRadioModule,
        MatRippleModule, // Don't need
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule, // Don't need
        MatSlideToggleModule, // Don't need
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule, // Don't need
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule, // Don't need
        MatNativeDateModule // Don't need
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule, // Don't need
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule, // Don't need
        MatChipsModule,
        MatStepperModule, // Don't need
        MatDatepickerModule, // Don't need
        MatDialogModule,
        MatExpansionModule, // Don't need
        MatFormFieldModule, // Don't need?
        MatGridListModule, // Don't need
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule, // Don't need
        MatPaginatorModule, // Don't need
        MatProgressBarModule, // Don't need
        MatProgressSpinnerModule, // Don't need
        MatRadioModule,
        MatRippleModule, // Don't need
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule, // Don't need
        MatSlideToggleModule, // Don't need
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule, // Don't need
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule, // Don't need
        MatNativeDateModule // Don't need
    ],
    providers: [     
        { provide: MatIconRegistry, useClass: CustomIconRegistry },
        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
        svgIconProviders
    ]
})
export class MaterialModule {
    constructor(public matIconRegistry: MatIconRegistry) {
    }

    static forRoot(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [MatIconRegistry]
        };
    }
}