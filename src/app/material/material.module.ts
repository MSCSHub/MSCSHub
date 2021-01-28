// material.module.ts
import { ModuleWithProviders, NgModule} from "@angular/core";
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
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
        namespace: 'icons',
        name: 'sun',
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
        name: 'sun2',
        svgSource: `
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 187.322 187.322" style="enable-background:new 0 0 187.322 187.322;" xml:space="preserve">
            <g>
              <polygon style="fill:#F7A663;" points="101.677,40.71 93.661,0 85.645,40.71 93.661,40.71 	"/>
              <polygon style="fill:#FFC80A;" points="67.185,47.804 74.127,43.796 46.83,12.548 60.243,51.812 	"/>
              <polygon style="fill:#F7A663;" points="47.804,67.186 51.811,60.243 12.548,46.83 43.795,74.128 	"/>
              <polygon style="fill:#FFC80A;" points="40.709,93.66 40.71,85.646 0,93.66 40.709,101.677 	"/>
              <polygon style="fill:#F7A663;" points="47.803,120.137 43.796,113.194 12.548,140.491 51.81,127.079 	"/>
              <polygon style="fill:#FFC80A;" points="60.244,135.511 46.83,174.774 74.127,143.527 67.184,139.519 	"/>
              <polygon style="fill:#F7A663;" points="85.645,146.611 93.661,187.322 101.677,146.613 93.661,146.613 	"/>
              <polygon style="fill:#FFC80A;" points="120.137,139.519 113.195,143.525 140.491,174.774 127.079,135.511 	"/>
              <polygon style="fill:#F7A663;" points="139.519,120.137 135.51,127.077 174.773,140.491 143.525,113.194 	"/>
              <polygon style="fill:#FFC80A;" points="187.322,93.66 146.612,85.645 146.613,93.66 146.612,101.676 	"/>
              <polygon style="fill:#F7A663;" points="139.518,67.184 143.525,74.126 174.773,46.83 135.509,60.243 	"/>
              <polygon style="fill:#FFC80A;" points="127.078,51.812 140.491,12.548 113.193,43.796 120.136,47.804 	"/>
              <path style="fill:#FDD633;" d="M93.661,45.265v96.793c26.729,0,48.397-21.668,48.397-48.397S120.39,45.265,93.661,45.265z"/>
              <path style="fill:#F4CA19;" d="M45.265,93.661c0,26.729,21.668,48.397,48.396,48.397V45.265
                C66.933,45.265,45.265,66.933,45.265,93.661z"/>
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
        name: 'flower',
        svgSource: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="24" height="24">
          <defs>
            <style>
              .cls-1 {
                fill: #7ba60d;
              }

              .cls-2 {
                fill: #9cc925;
              }

              .cls-3 {
                fill: #ffa400;
              }

              .cls-4 {
                fill: #ffd900;
              }
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
        name: 'tree',
        svgSource: `
        <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88.5 122.88"
          style="enable-background:new 0 0 88.5 122.88" xml:space="preserve" width="24" height="24">
          <g>
            <path
              d="M36.19,122.88V96.34H5.13c-5.2,0.48-6.26-3.63-4.03-7.04l19.84-23.26l-0.57-0.57H9.75c-3.85,0.57-5.27-3.6-2.94-6.53 l21.37-25.1h-6.24c-3.91,0.1-4.87-3.49-2.37-6.88L39.04,3.84C40.37,2.26,41.79-0.05,44.1,0c1.99,0.04,3.19,1.93,4.37,3.31 l20.7,24.14c2.25,3.22,0.33,6.61-3.59,6.61H60l21.22,24.87c2.55,2.52,1.25,6.55-1.68,7.11H67.21l18.5,21.7 c2.17,2.55,5.27,7.91-0.54,8.6H51.83v26.54H36.19L36.19,122.88z" fill="#98482b"/>
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
        name: 'tree2',
        svgSource: `
          <svg id="Capa_1" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" fill="#f24e4e" r="256" />
              <path
                  d="m379.812 397.657c5.427-11.639 5.835-24.73 2.042-37.932-3.33-11.591 4.092-23.408 15.981-25.427 52.165-8.861 90.743-40.389 90.743-77.924 0-17.495-8.384-33.684-22.617-46.881-7.654-7.097-8.66-18.803-2.268-27.055 41.327-53.355 49.374-116.88 16.061-150.192s-96.837-25.265-150.192 16.061c-8.253 6.392-19.958 5.386-27.055-2.268-13.197-14.233-29.386-22.617-46.881-22.617-37.535 0-69.064 38.578-77.924 90.743-2.019 11.889-13.836 19.311-25.427 15.981-13.202-3.793-26.293-3.385-37.932 2.042-24.428 11.391-36.034 41.891-32.633 77.139.957 9.916-5.606 18.856-15.257 21.328-8.152 2.088-15.397 6.001-21.236 11.839-24.895 24.895-14.804 75.348 22.538 112.69l89.06 89.06c37.342 37.342 87.795 47.433 112.69 22.538 5.839-5.839 9.751-13.084 11.839-21.236 2.472-9.65 11.412-16.214 21.328-15.257 35.249 3.403 65.749-8.204 77.14-32.632z"
                  fill="#fcb858" />
              <path
                  d="m87.644 284.921c5.839-5.839 13.084-9.751 21.236-11.839 9.65-2.472 16.214-11.412 15.257-21.328-3.402-35.248 8.205-65.748 32.632-77.139 11.639-5.427 24.73-5.835 37.932-2.042 11.591 3.33 23.408-4.092 25.427-15.981 8.861-52.165 40.389-90.743 77.924-90.743 17.495 0 33.684 8.384 46.881 22.617 7.097 7.654 18.803 8.66 27.055 2.268 41.493-32.139 89.134-44.146 123.935-32.231-3.406-9.949-8.763-18.851-16.169-26.257-33.312-33.312-96.837-25.265-150.192 16.061-8.252 6.392-19.958 5.386-27.055-2.268-13.197-14.233-29.386-22.617-46.881-22.617-37.535 0-69.063 38.578-77.924 90.743-2.019 11.889-13.836 19.31-25.427 15.981-13.202-3.793-26.293-3.385-37.932 2.042-24.427 11.391-36.034 41.891-32.632 77.139.957 9.916-5.607 18.856-15.257 21.328-8.152 2.088-15.397 6.001-21.236 11.839-24.895 24.895-14.804 75.348 22.538 112.69 8.196 8.196 25.141 25.141 42.426 42.426-37.342-37.341-47.433-87.794-22.538-112.689z"
                  fill="#fda554" />
              <path
                  d="m375.175 231.581h-94.755v-94.755c0-8.284-6.716-15-15-15s-15 6.716-15 15v124.755h124.755c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15z"
                  fill="#af4427" />
              <path
                  d="m266.406 340.349h-94.755v-94.755c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v124.755h124.755c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  fill="#af4427" />
              <path
                  d="m356.268 134.518-291.572 291.573c6.653 7.477 13.736 14.56 21.213 21.213l291.572-291.572c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213-.001z"
                  fill="#c15838" />
          </svg>
        `
      },
      multi: true
    },
    {
      provide: SVG_ICONS,
      useValue: {
        namespace: 'icons',
        name: 'leaf',
        svgSource: `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 25.263 25.263" style="enable-background:new 0 0 25.263 25.263;" xml:space="preserve">
            <g>
              <path style="fill:#98482b;" d="M15.362,9.69c0,0-0.75,1.108-1.068,0c-0.318-1.109-1.346-4.949-1.762-5.226   c-0.417-0.278-0.417-0.278-0.417-0.278s-0.078,1.506-0.594,1.307c-0.515-0.198-4.313-2.217-4.63-2.652L6.574,2.444   c0,0,0.355,3.328-0.515,2.615c0,0,1.113,2.771-2.573,3.048c0,0,1.186,3.087,4.552,4.75c0,0,1.148,1.783-0.949,1.503   c0,0-2.932-0.395-3.325-0.752c0,0-1.548,3.01-3.764,3.128c0,0,2.656,1.504,2.337,4.156c0,0,5.107,0.041,4.911,0.832   c-0.2,0.795-0.555,1.601-0.555,1.601s4.71-0.929,5.422-2.194c0,0,0.989,0.99,1.071,1.939c0,0,2.693-0.594,2.452-2.296   c0,0,1.269,0.948,1.427,2.551l0.554-0.375c0,0-0.319-1.661-1.464-2.967c0,0-0.517-1.308,0.789-0.633c0,0,3.085,1.029,5.7-0.833   c0,0-2.888-0.948-3.006-1.978c0,0,5.394-3.326,5.625-5.542c0,0-1.944,0.198-2.972-0.633c0,0-1.309-0.396,0.394-4.791   c0,0-1.227,0.724-1.62-3.636c0,0-3.051,4.665-4.518,3.082C16.548,5.018,15.165,8.066,15.362,9.69z"/>
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
        name: 'leaf2',
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
    }
  ];
  // tslint:enable: max-line-length

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    providers: [     
        { provide: MatIconRegistry, useClass: CustomIconRegistry },
        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
        svgIconProviders
    ]
})
export class MaterialModule {
    constructor(public matIconRegistry: MatIconRegistry) {
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }

    static forRoot(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [MatIconRegistry]
        };
    }
}