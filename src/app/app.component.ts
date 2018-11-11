import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showWhatWentWell: boolean = true;
  showWhatCanBeImproved: boolean = true;
  showStartDoing: boolean = true;
  showActionItems: boolean = true;

  options = ['All sections', 'What went well', 'What can be improved', 'Start doing', 'Action items'];

  showOnly(selectedValue) {
    if (this.options.indexOf(selectedValue) == 0) {
      this.showWhatWentWell = true;
      this.showWhatCanBeImproved = true;
      this.showStartDoing = true;
      this.showActionItems = true;
    }
    else if (this.options.indexOf(selectedValue) == 1) {
      this.showWhatWentWell = true;
      this.showWhatCanBeImproved = false;
      this.showStartDoing = false;
      this.showActionItems = false;
    }
    else if (this.options.indexOf(selectedValue) == 2) {
      this.showWhatWentWell = false;
      this.showWhatCanBeImproved = true;
      this.showStartDoing = false;
      this.showActionItems = false;
    }
    else if (this.options.indexOf(selectedValue) == 3) {
      this.showWhatWentWell = false;
      this.showWhatCanBeImproved = false;
      this.showStartDoing = true;
      this.showActionItems = false;
    }
    else if (this.options.indexOf(selectedValue) == 4) {
      this.showWhatWentWell = false;
      this.showWhatCanBeImproved = false;
      this.showStartDoing = false;
      this.showActionItems = true;
    }
  }
}
