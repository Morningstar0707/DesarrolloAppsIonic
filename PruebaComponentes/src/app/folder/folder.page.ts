import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonDatetime, IonDatetimeButton, IonModal, ScrollDetail,IonChip, IonCheckbox,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, calendar, musicalNote, camera, film, flash, home} from 'ionicons/icons';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  standalone: true,
  styleUrls: ['./folder.page.scss'],
  imports: [IonDatetime, IonDatetimeButton, IonModal, IonContent,ReactiveFormsModule, IonChip, IonCheckbox,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonActionSheet, IonButton, IonAlert, IonBadge, IonTabBar, IonTabButton, IonIcon, IonBreadcrumb, IonBreadcrumbs],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { 
     /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ heart, calendar, musicalNote, camera, film, flash, home});
    this.myForm = this.fb.group({
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    // Mark the control as touched to trigger the error message.
    // This is needed if the user submits the form without interacting
    // with the checkbox.
    this.myForm.get('agree')!.markAsTouched();
  }
  
  alertButtons = ['Aceptar'];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
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
