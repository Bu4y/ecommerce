export class DashboardModel {
    lastvisit: Array<ListingItemModel>;
    popularproducts: Array<ListingItemModel>;
    popularshops: Array<PopularshopsItemModel>;
    bestsellers: Array<ListingItemModel>;
    banner_title: string;
    banner_image: string;
    title: string;
}

export class ListingItemModel {
    name: string;
    image: string;
    unitprice: number;
}

export class PopularshopsItemModel {
    name: string;
    image: string;
}

