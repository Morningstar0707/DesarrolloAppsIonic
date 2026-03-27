import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, CheckboxCustomEvent, IonImg, IonListHeader, IonItemOption, IonItemOptions, IonItemSliding, IonNote, IonText, IonAvatar, IonInput, IonList, IonFab, IonFabButton, IonFabList, IonPicker, IonPickerColumn, IonPickerColumnOption, IonDatetime, IonDatetimeButton, IonModal, ScrollDetail, IonChip, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { chevronForward, listCircle, airplane, bluetooth, call, wifi, heart, calendar, musicalNote, camera, film, flash, home, add, colorPalette, document, globe } from 'ionicons/icons';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  standalone: true,
  styleUrls: ['./folder.page.scss'],
  imports: [IonImg, IonListHeader, IonNote, IonText, IonAvatar, IonInput, IonItem, IonList, IonFab, IonFabButton, IonFabList, IonIcon, IonPicker, IonPickerColumn, IonPickerColumnOption, IonDatetime, IonDatetimeButton, IonModal, IonContent, ReactiveFormsModule, IonChip, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList],
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
    addIcons({ chevronForward, listCircle, airplane, bluetooth, call, wifi, heart, calendar, musicalNote, camera, film, flash, home, add, colorPalette, document, globe });
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

}
