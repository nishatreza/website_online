
export interface Seller{
    name:string;
    level:string;
    image:string;
    comment:string;
    reviewerNumber:string;
    cost:string;
    rating:string;
}
export interface Thumbnail{
    url:string;
    active:boolean;
}
export interface Gig{
  seller:Seller;
  thumbnail:Thumbnail[];
 name:string;
 slug:string;

}


export interface GigsPage {
    title: string;
    subTitle: string;
    gigItems: Gig[];
    

  }

