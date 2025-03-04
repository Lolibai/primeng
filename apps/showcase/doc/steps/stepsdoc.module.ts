import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { TicketService } from '@/service/ticketservice';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { CardModule } from '@pixel/primeng/card';
import { Checkbox } from '@pixel/primeng/checkbox';
import { DropdownModule } from '@pixel/primeng/dropdown';
import { InputMask } from '@pixel/primeng/inputmask';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { StepsModule } from '@pixel/primeng/steps';
import { ToastModule } from '@pixel/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMask, Checkbox, CardModule, ButtonModule, RouterModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, InteractiveDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, ControlledDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
