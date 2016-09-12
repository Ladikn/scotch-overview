import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <a href="/" class='navbar-brand'>Angular Tutorial</a>
            </nav>
        </header>

        <div class="jumbotron">
            <h1>First Component</h1>
        </div>

        <footer class='text-center'>This is all mine!  Muahahaha!</footer>
    `,
    styles: [`
        .jumbotron { 
            box-shadow: 0 2px 0 rgba (0, 0, 255, 0.8); 
        }
    `]
})

export class AppComponent {};