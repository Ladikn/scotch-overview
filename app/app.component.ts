import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>First Component</h1>
        </div>
    `,
    styles: [`
        .jumbotron { 
            box-shadow: 0 2px 0 rgba (0, 0, 255, 0.8); 
        }
    `]
})

export class AppComponent {};