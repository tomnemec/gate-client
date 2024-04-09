import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%)' }),
    animate(
      '300ms 300ms ease-out',
      style({ opacity: 1, transform: 'translateX(0%)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-out',
      style({ opacity: 0, transform: 'translateX(-100%)' })
    ),
  ]),
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
]);
