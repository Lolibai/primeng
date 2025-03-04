import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        html: `import { Avatar } from '@pixel/primeng/avatar';
import { AvatarGroup } from '@pixel/primeng/avatargroup';`
    };
}
