import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductOneComponent } from '../product-one/product-one.component';
import { ProductTwoComponent } from '../product-two/product-two.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {

  public title = 'Product Page';
  public cardWidth = '80%';

  @Output() output = new EventEmitter();

  // fillerContent = Array(25).fill(0).map(() =>
  //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //   labore et dolore magna aliqua.`);

  content1: Array<string> = ['asdasdas'];

  public products: Product[] = [
    { id: 1, name: 'Product One' },
    { id: 2, name: 'Product Two' }
  ];

  @ViewChild('productContainer', { read: ViewContainerRef }) container;

  tableComponentRef: ComponentRef<any>;

  selectedProduct: any;

  private subscription: Subscription;

  constructor(
    private comFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*REASON: https://indepth.dev/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error#c2ba*/
    Promise.resolve(null).then(() => this.setComponent());
  }

  onProductSelection(val) {
    console.log(val);
    this.selectedProduct = val;
    this.setComponent();
  }

  setComponent() {

    let componentFactory: any;

    switch (this.selectedProduct) {
      // case 0: {
      //   componentFactory = this.comFactoryResolver.resolveComponentFactory(ProductListComponent);
      //   break;
      // }
      case 1: {
        componentFactory = this.comFactoryResolver.resolveComponentFactory(ProductOneComponent);
        break;
      }
      case 2: {
        componentFactory = this.comFactoryResolver.resolveComponentFactory(ProductTwoComponent);
        break;
      }
      default: {
        // componentFactory = this.comFactoryResolver.resolveComponentFactory(ProductListComponent);
        this.container.clear();
        break;
      }
    }

    if (componentFactory) {
      this.container.clear();
      this.tableComponentRef = this.container.createComponent(componentFactory);
      this.subscription = this.tableComponentRef.instance.output?.subscribe(event => console.log(event));
    }
  }

  ngOnDestroy() {
    console.log('>>> ngOnDestroy');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
