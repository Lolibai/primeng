import { Injectable } from '@angular/core';
import { BaseStyle } from '@pixel/primeng/base';

const classes = {
    root: 'p-inputicon'
};

@Injectable()
export class InputIconStyle extends BaseStyle {
    name = 'inputicon';

    classes = classes;
}
