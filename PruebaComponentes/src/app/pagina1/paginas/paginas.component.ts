import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonFooter, IonToolbar, IonButtons, IonMenuButton, IonTitle,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss'],
  imports: [IonContent, IonHeader, IonFooter, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class PaginasComponent  implements OnInit {
  public pagina1!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    this.pagina1 = this.activatedRoute.snapshot.paramMap.get('pagina1') as string;
  }

}
