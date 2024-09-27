import Service from '@ember/service';

export default class ModalService extends Service {
  @tracked isOpen = false;
  @tracked componentName = null;

  open(componentName) {
    this.componentName = componentName;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.componentName = null;
  }
}
