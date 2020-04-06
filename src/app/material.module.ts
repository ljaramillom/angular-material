import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class MaterialModule {}