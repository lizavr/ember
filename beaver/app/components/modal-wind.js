import Component from '@glimmer/component';
import { action } from '@ember/object';
//import { tracked } from '@glimmer/tracking';

export default class ModalWindComponent extends Component {
  // showHelpModal=false;

  @action onClose() {
    alert('click'); //this.isLarge = !this.isLarge;
  }
}
