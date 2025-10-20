import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/categories/list/list.component';
import { TraficListComponent } from './components/trafics/list/list.component';
import { TraficFormComponent } from './components/trafics/form/form.component';
import { CategoryFormComponent } from './components/categories/form/form.component';
import { ProductFormComponent } from './components/product/form/form.component';
import { ProductListComponent } from './components/product/list/list.component';
import { BuyersFormComponent } from './components/buyers/form/form.component';
import { BuyersListComponent } from './components/buyers/list/list.component';
import { PriceFormComponent } from './components/pricelist/form/form.component';
import { PriceListComponent } from './components/pricelist/list/list.component';

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
        path: 'traficform/:id',
        component: TraficFormComponent
    },
    {
        path:"categoryform",
        component:CategoryFormComponent
    },
    {
        path:"categoryform/:id",
        component:CategoryFormComponent
    },
    {
        path:"productform",
        component:ProductFormComponent
    },
    {
        path:"productform/:id",
        component:ProductFormComponent
    },
    {
        path:"product",
        component:ProductListComponent
    },
    {
        path:"buyerform",
        component:BuyersFormComponent
    },
    {
        path:"buyerform/:id",
        component:BuyersFormComponent
    },
    {
        path:"buyer",
        component:BuyersListComponent
    }
    ,
    {
        path:"priceform",
        component:PriceFormComponent
    },
    {
        path:"priceform/:id",
        component:PriceFormComponent
    },
    {
        path:"price",
        component:PriceListComponent
    }
    
    

];
