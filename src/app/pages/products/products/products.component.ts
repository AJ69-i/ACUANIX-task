import { Component , OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItemsService } from 'src/app/core/services/cart-items/cart-items.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { product } from '../../../core/models/product';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnDestroy {

  products:       product[] = [];
  copiedProducts: product[] = [];
  selectedItems:  product[] = [];
  searchedItems:  product[] = [];

// Pagination properties
  totalItems!: number;
  pageSize:    number = 10;
  pageIndex:   number = 0;

  private subscription!: Subscription;

  constructor(private Products: ProductsService , private CartItems: CartItemsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.subscription = this.Products.getAllProducts().subscribe({
      next: (response)=> {
        this.products = response?.products;
        //I add a key value amount and it's value is set to zer0 for each object, So i can put an option for the user to add any product to the cart
        //by using two way data binding
        this.products = this.products.map(obj => ({ ...obj, amount: 0 }));
        //I take a copy of the products, because i need the whole data again when searching for products and filtering
        this.copiedProducts = response?.products;
        this.totalItems = this.products.length;
      }
    });
  }

  selectCategory(category: string) {
    //if the user after filtertion he wants to see all the items again
    if(category === "all") {
      this.products = this.copiedProducts;
    }
    else {
      //I take a copy of the products, because i need the whole data again when filtering the products
      this.products = this.copiedProducts;
      this.selectedItems = this.products?.filter((item)=> {
        return category === item.category ? true : false;
      });
      this.products = this.selectedItems;
    }
  }

  search(searchedItem: string) {
    //Checking whether the input is empty and the user clicked backspace so the input is empty, so we should show all the products
    if(!searchedItem) {
      this.products = this.copiedProducts;
    }
    else if(searchedItem) {
      searchedItem = searchedItem.toLowerCase();
      //I take a copy of the products, because i need the whole data again when searching the products
      this.products = this.copiedProducts;
      this.searchedItems = this.products.filter((item)=> {
        return item.title.toLowerCase().includes(searchedItem) ? true : false;
      });
      this.products = this.searchedItems;
    }
  }

  handlePageChange(event: any): void {
    // Handle page index change logic here
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateVisibleItems();
  }

  handlePageSizeChange(event: any): void {
    // Handle page size change logic here
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updateVisibleItems();
  }

  updateVisibleItems(): void {
    this.products = this.copiedProducts;
    // Update the visible items based on the current page index and page size
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // Slice the items array to get the current page of items
    // You can then use these items in your template
    const visibleItems = this.products.slice(startIndex, endIndex);
    this.products = visibleItems;
  }

  AddtoCart(item: {name: string , quantity: string}) {
    //Checking if a product is already existed and stored in local storage
    if(this.CartItems.getValue("CartItems")) {
      let items = this.CartItems.getValue("CartItems");

      //Check if he choose the same item many times
      let index = items.findIndex((obj: {name: string , quantity: string})=> {
        return obj.name === item.name;
      });

      if(index >= 0) {
        items[index].quantity = item.quantity;
      } else {
        items.push(item);
      }
      this.CartItems.setValue("CartItems" , items);
    } else {
      //If not, Add products for the first time
      this.CartItems.setValue("CartItems" , [item]);
    }
  }

  trackByFn(index: number, item: product) {
    return item.id;
    }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
