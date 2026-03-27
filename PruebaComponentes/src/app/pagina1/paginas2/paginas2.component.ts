import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList,IonContent, IonHeader, IonFooter, IonToolbar, IonTitle, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { generate } from 'rxjs';

@Component({
  selector: 'app-paginas2',
  templateUrl: './paginas2.component.html',
  styleUrls: ['./paginas2.component.scss'],
  imports: [IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonContent, IonHeader, IonFooter, IonToolbar, IonTitle, IonMenuButton, IonButtons],
})
export class Paginas2Component  implements OnInit {
  public pagina2!: string;
  private activatedRoute = inject(ActivatedRoute);

  items: string[] = [];

  

  constructor() { }

  ngOnInit() {
    this.pagina2 = this.activatedRoute.snapshot.paramMap.get('pagina2') as string;
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
