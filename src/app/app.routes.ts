import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/categories/list/list.component';
import { TraficListComponent } from './components/trafics/list/list.component';
import { TraficFormComponent } from './components/trafics/form/form.component';
import { CategoryFormComponent } from './components/categories/form/form.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoryListComponent
    },
    {
        path: 'trafics',
        component: TraficListComponent
    },
    {
        path: 'traficform',
        component: TraficFormComponent
    },
    {
        path:"categoryform",
        component:CategoryFormComponent
    }

];
