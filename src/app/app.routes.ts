import { Routes } from '@angular/router';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { ColorsComponent } from './components/colors/colors.component';

export const routes: Routes = [
    {
        path: '',
        component: CalculatorComponent,
    },
    {
        path: 'calculator',
        component: CalculatorComponent,
    },
    {
        path: 'colors',
        component: ColorsComponent,
    }
];
