module lottery{
  export class AppController{
    constructor(){
      this.activeTab = 'enter';
    }
    activeTab: string;

    setTab(activeTab: string){
      this.activeTab = activeTab;
    }
  }
}