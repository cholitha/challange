import{NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatListModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatCardModule,
      MatToolbarModule,
      MatSelectModule,
      MatMenuModule,
      MatBadgeModule,
      MatAutocompleteModule,MatGridListModule
  ],
    exports: [MatButtonModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatListModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatCardModule,
      MatToolbarModule,
      MatSelectModule,
      MatMenuModule,
      MatBadgeModule,
      MatAutocompleteModule ,MatGridListModule
  ]
  })
  export class MatModule { }