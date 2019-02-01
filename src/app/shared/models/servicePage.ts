export interface ServicePageOne {
  // sid:string;
  name: string;
  description: string;
 


}
export interface ServicePageTwo {
  // sid:string;
 
 cost: string;
  deliveryTime: string;


}
export class ServicePage {
  name: string;
  description: string;
 cost: string;
  deliveryTime: string;

  clear() {
      this.name = '';
      this.description = '';
      this.cost = '';
      this.deliveryTime = '';
     
  }
}