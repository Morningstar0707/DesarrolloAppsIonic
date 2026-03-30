import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSelect, IonSelectOption, IonSegment, IonSegmentButton, IonSearchbar, IonReorder, IonReorderGroup, ReorderEndCustomEvent, IonRefresher, IonRefresherContent, RefresherCustomEvent, IonRange, IonRadio, IonRadioGroup, IonSkeletonText, IonThumbnail, IonPopover, AnimationController, CheckboxCustomEvent, IonImg, IonListHeader, IonItemOption, IonItemOptions, IonItemSliding, IonNote, IonText, IonAvatar, IonInput, IonList, IonFab, IonFabButton, IonFabList, IonPicker, IonPickerColumn, IonPickerColumnOption, IonDatetime, IonDatetimeButton, IonModal, ScrollDetail, IonChip, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { pizza, chevronForward, listCircle, airplane, bluetooth, call, wifi, heart, calendar, musicalNote, camera, film, flash, home, add, colorPalette, document, globe } from 'ionicons/icons';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Food {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  standalone: true,
  styleUrls: ['./folder.page.scss'],
  imports: [IonSelect, IonSelectOption, IonSegment, IonSegmentButton, IonSearchbar, IonReorder, IonReorderGroup, IonRefresher, IonRefresherContent, IonRange, IonListHeader, IonSkeletonText, IonThumbnail, IonPopover, IonImg, IonListHeader, IonNote, IonText, IonAvatar, IonInput, IonItem, IonList, IonFab, IonFabButton, IonFabList, IonIcon, IonPicker, IonPickerColumn, IonPickerColumnOption, IonDatetime, IonDatetimeButton, IonModal, IonContent, ReactiveFormsModule, IonChip, IonCheckbox, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRadio, IonRadioGroup],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  myForm: FormGroup;
  canDismiss = false;

  presentingElement!: HTMLElement | null;

  constructor(private fb: FormBuilder, private animationCtrl: AnimationController) {
    /**
    * Any icons you want to use in your application
    * can be registered in app.component.ts and then
    * referenced by name anywhere in your application.
    */
    addIcons({ pizza, chevronForward, listCircle, airplane, bluetooth, call, wifi, heart, calendar, musicalNote, camera, film, flash, home, add, colorPalette, document, globe });
    this.myForm = this.fb.group({
      agree: [false, Validators.requiredTrue],
    });
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  onSubmit() {
    // Mark the control as touched to trigger the error message.
    // This is needed if the user submits the form without interacting
    // with the checkbox.
    this.myForm.get('agree')!.markAsTouched();
  }

  alertButtons = ['Aceptar'];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.presentingElement = window.document.querySelector('.ion-page');
  }

  onTermsChanged(event: CheckboxCustomEvent) {
    this.canDismiss = event.detail.checked;
  }

  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(event: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(event.detail));
  }

  handleScrollEnd() {
    console.log('scroll end');
  }


  foods: Food[] = [
    {
      id: 1,
      name: 'Apples',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Cupcakes',
      type: 'dessert',
    },
  ];

  compareWith(o1: Food, o2: Food): boolean {
    return o1.id === o2.id;
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }

  pinFormatter(value: number) {
    return `${value}%`;
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group.
    event.detail.complete();
  }

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.results = this.data.filter((d) => d.toLowerCase().includes(query));
  }

  customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };

  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };

  customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };

  customModalOptions = {
    header: 'Favorite Candy',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };
}
