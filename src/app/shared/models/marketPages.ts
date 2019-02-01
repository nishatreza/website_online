export interface ServiceItem {
    title: string;
    thumbnail?: string;
   url:string;
  

  }
export interface MarketPage {
    title: string;
    subTitle: string;
    serviceItems: ServiceItem[];
    category: string;
  }

  // for gig
  export interface GigOverview{
    thumbnail:string[];
    userName:string;
    userLevel:string;
    userImage:string;
    userRating:string;
    reviewerNumber:string;
    cost:string;
    userComment:string;
  }



export interface GigPage{
  title:string;
  subTitle:string;
  gigOverviews:GigOverview[];
  category:string;

}