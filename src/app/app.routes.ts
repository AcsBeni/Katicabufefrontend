import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/categories/list/list.component';
import { TraficListComponent } from './components/trafics/list/list.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoryListComponent
    },
    {
        path: 'trafics',
        component: TraficListComponent
    }

];
