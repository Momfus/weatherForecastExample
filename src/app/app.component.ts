import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './services/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

    showSpinner: boolean;

    constructor( public spinnerService: SpinnerService ) {

    }

    ngOnInit(): void {

        this.showSpinner = false;

        this.spinnerService.loaderStatus.subscribe((state) => {
            setTimeout(() => {
              this.showSpinner = state.show;
            }, 0);
          });

    }

}
