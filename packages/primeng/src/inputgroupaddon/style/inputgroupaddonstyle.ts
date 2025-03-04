import { Injectable } from '@angular/core';
import { BaseStyle } from '@pixel/primeng/base';

const classes = {
    root: 'p-inputgroupaddon'
};

@Injectable()
export class InputGroupAddonStyle extends BaseStyle {
    name = 'inputgroupaddon';

    classes = classes;
}
