import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  exports: [
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    InputMaskModule,
    InputSwitchModule,
  ],
})
export class PrimengSharedModule {}
