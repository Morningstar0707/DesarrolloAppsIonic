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
];