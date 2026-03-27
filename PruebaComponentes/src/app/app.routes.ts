import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: '',
    redirectTo: 'pagina1',
    pathMatch: 'full',
  },
  {
    path: 'pagina1',
    loadComponent: () =>
      import('./pagina1/paginas/paginas.component').then((m) => m.PaginasComponent),
  },
  {
    path: '',
    redirectTo: 'pagina2',
    pathMatch: 'full',
  },
  {
    path: 'pagina2',
    loadComponent: () =>
      import('./pagina1/paginas2/paginas2.component').then((m) => m.Paginas2Component),
  },
];