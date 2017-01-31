import { NgModule } from '@angular/core';
import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';
import { ButtonsModule } from './buttons/buttons.module';
import { CarouselModule } from './carousel/carousel.module';
import { CollapseModule } from './collapse/collapse.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PaginationModule } from './pagination/pagination.module';
import { ProgressbarModule } from './progressbar/progressbar.module';
import { RatingModule } from './rating/rating.module';
import { SortableModule } from './sortable';
import { TabsModule } from './tabs/tabs.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { TypeaheadModule } from './typeahead/typeahead.module';
import { PopoverModule } from './popover/popover.module';
var MODULES = [
    AccordionModule, AlertModule, ButtonsModule,
    CarouselModule, CollapseModule, DatepickerModule,
    DropdownModule, ModalModule, PaginationModule,
    ProgressbarModule, PopoverModule, RatingModule,
    TabsModule, TimepickerModule, TooltipModule,
    TypeaheadModule
];
export var BsRootModule = (function () {
    function BsRootModule() {
    }
    BsRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AccordionModule.forRoot(), AlertModule.forRoot(), ButtonsModule.forRoot(),
                        CarouselModule.forRoot(), CollapseModule.forRoot(), DatepickerModule.forRoot(),
                        DropdownModule.forRoot(), ModalModule.forRoot(), PaginationModule.forRoot(),
                        ProgressbarModule.forRoot(), PopoverModule.forRoot(), RatingModule.forRoot(),
                        TabsModule.forRoot(), TimepickerModule.forRoot(), TooltipModule.forRoot(),
                        TypeaheadModule.forRoot(), SortableModule.forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    BsRootModule.ctorParameters = function () { return []; };
    return BsRootModule;
}());
export var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.forRoot = function () {
        return { ngModule: BsRootModule };
    };
    Ng2BootstrapModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] },
    ];
    /** @nocollapse */
    Ng2BootstrapModule.ctorParameters = function () { return []; };
    return Ng2BootstrapModule;
}());
export * from './accordion';
export * from './alert';
export * from './buttons';
export * from './carousel';
export * from './collapse';
export * from './datepicker';
export * from './modal';
export * from './dropdown';
export * from './pagination';
export * from './progressbar';
export * from './rating';
export * from './sortable';
export * from './tabs';
export * from './timepicker';
export * from './tooltip';
export * from './typeahead';
export * from './popover';
export * from './utils/ng2-bootstrap-config';
export * from './utils/decorators';
export * from './component-loader';
export * from './positioning';
//# sourceMappingURL=index.js.map