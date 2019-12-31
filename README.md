## create new project

npm new [project name]

npm install：安装项目所需要的依赖包

ng serve --open

## create new component

 ng g component components/[component]

## ngFor--loop

```html
<dl>
  <dt *ngFor="let item of cars; let key=index">{{item.car}}--{{key}}
    <h5 *ngFor="let list of item.list">{{list.title}}---{{list.price}}</h5>
  </dt>
</dl>
```

## ngIf--condition

## ngSwitch--condition

## ngClass--class attribute, multiple

## ngStyle--style attribute, multiple

## 父子组件以及组件之间的通讯

> SEE angular-demo03：home，header，footer 

### @Input：father to child

```ts
@Input('title') title;
@Input('method') method;
@Input('home') home: any;
```

### @ViewChild：child to father

1. DOM操作，

2. sub-component，父组件操作子组件（调用子组件DOM和方法）

suggest to get DOM in method ngAfterViewInit()，because the DOM loading completed in this time.

```html
<div #mybox>this is a div</div
<app-header #header>header</app-header>
```

```ts
// query results available in ngOnInit
@ViewChild('mybox',{static:true}) mybox:any;
// query results available in ngAfterViewInit
// normally,use 'false', only rarer cases use 'true'!!!
// https://angular.io/guide/static-query-migration
@ViewChild('header',{static:false}) header:any;
```

### @Output：child to father + EventEmitter

相当于在子组件中给父组件广播，父组件接受

```html
// child
<button (click)="sendFather()">send to father</button>
```

```ts
@Output() private outer = new EventEmitter();
sendFather() {
    this.outer.emit('send to father from child---footer');
}
```

```html
// father
<app-footer (xxx)="run($event)"></app-footer>
```

```ts
run(e){
    console.log(e)
    console.log('object home---father')
}
```

### 非父子组件

1. 组件之间传值，繁琐
2. 共享方法（localStorage，service）

## lifecycle hook

ngOnChanges：父子组件传值中

！ngOnInit：一般请求数据

ngDoCheck：在onInit()和onChanges()之后，可以自定义操作

ngAfterContentInit：

ngAfterContentChecked：

！ngAfterViewInit：DOM操作

ngAfterViewChecked：

！ngOnDestroy：

> SEE angular-demo03：lifecycle，lifecycle-parent

## RxJS

> SEE ionic-demo11 tab2

RxJS is a tool for turning a data stream into a tool, or reactive extension programming. Angular introduced RxJS to make asynchronous controllable easier.

RxJS是一种针对一部数据流变成工具，或者叫响应式扩展编程。Angular引入RxJS为了就是让异步可控更简单。

异步编程常见方法如下：

1. callback function 回调函数
2. event listen 事件监听
3. Promise
4. RxJS

RxJS和Promise相类似，不过更强大。可以中途撤回，可以发射多个值，提供多种工具函数。

### unsubscribe 中途撤回

### 发射多个值

### map filter 多种工具函数

Angular 6之前的要装rxjs-compat才可以使用。

之后版本引入import {map, filter} from 'rxjs/operators'

### 延迟执行

## data request 数据请求

{HttpClientModule} in app.module.ts

### 1. get

{HttpClient}直接引入到要用的component中

### 2. post

{HttpClient, HttpHeaders}直接引入到要用的component中

```ts
const httpOptions = { 
  headers: new HttpHeaders({ 
	'Content-Type': 'application/json' }) 
}
```

### 3. jsonp

再把{HttpClientJsonpModule} in app.module.ts

{HttpClient}直接引入到要用的component中

PS: 服务器必须支持jsonp

### 4. third party-axios 第三方模块axios请求数据

可以自己封装方法，也可以直接引入到要用的component中

## route

{path: '', redirectTo: 'home', pathMatch: 'full'}

{path: '**', redirectTo: 'home'}

means to match any routes that are not found

表示匹配不到路由的时候跳转到home路由

### 普通

routerLink

### get传值

queryParams，跳转传值

```html
<ul>
  <!-- get -->
  <li *ngFor="let item of list;let key=index">
    <a [routerLink]="['/news-content']" [queryParams]="{nid:key+1}">{{key}}---{{item}}</a>
  </li>
</ul>
```

import {ActivatedRoute} from '@angular/router'，获取

```ts
this.activatedRoute.queryParams.subscribe((data) => {
	console.log(data.nid);
    this.nid = data.nid;
});
```

### dynamic route 动态路由

rounterLink, second param

```html
<ul>
  <!-- dynamic route -->
  <li *ngFor="let item of list;let key=index">
    <a [routerLink]="['/news-content',key]">{{key}}---{{item}}</a>
  </li>
</ul>
```

```ts
this.activatedRoute.params.subscribe((data) => {
      console.log(data.nid);
      this.nid = data.nid;
});
```

### js传值

1. get

   ```html
   <button (click)="toProductContent()">js to product content page by dynamic route</button>
   <br>
   <br>
   <button (click)="toHome()">js to home page</button>
   ```

   ```ts
   import { Router } from '@angular/router';
   constructor(public router: Router) { }
   
   toProductContent() {
       this.router.navigate(['/product-content', '1']);
   }
     toHome() {
       this.router.navigate(['/home']);
   }
   ```

2. dynamic route

   ```html
   <button (click)="toNews()">js to news page by get</button>
   ```

   ```ts
   import { Router, NavigationExtras } from '@angular/router';
   constructor(public router: Router) { }
   
   toNews() {
       let queryParams = {
         queryParams: { pid: 111 }
       };
       // or
       // let navigationExtras: NavigationExtras = {
       //   queryParams: { 'session_id': '123' },
       //   fragment: 'anchor'
       // };
       this.router.navigate(['/news'], queryParams);
   }
   ```

   

>  SEE angular-demo04

### nested

 children

> SEE angular-demo05

## custom module 自定义模块

项目小的时候不建议使用自定义模块

项目大的时候，可以将相类似的组件封装在模块中，由根模块调用子模块

app中引入自定义模块

module中的组件要暴露出来才可以外部使用

### lazy load by route

```bash
// the module with route
ng g module [name] --routing
```
```ts
// app module
const routes: Routes = [
  { path: 'user', loadChildren: './module/user/user.module#UserModule' },
  { path: 'product', loadChildren: './module/product/product.module#ProductModule' },
  { path: '**', redirectTo: 'user' }
];
// product module!!!
const routes: Routes = [
  {
    path: '', component: ProductComponent,
    // mount in product module!!!
    children: [
      { path: 'info', component: InfoComponent },
      { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  },
  // mount in app module!!!
  { path: 'list', component: ListComponent }
];
```
> SEE angular-demo07

## Architecture

### component 组件

A component is what you used to call a directive in Angular. It contains a template, styles, a list of injectables (directives, services) and a selector.

Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated per an element in a template.

### directives 指令

Directives allow you to attach behaviour to elements in the DOM. It is also what you used to call a directive in Angular, but without a proper view. You can therefore place as many directives as you want on one DOM-element. This is not possible with components.

### pipes 管道

1. structural 
2. attribute

{{variable | pipe}}

### service--data retrieval 

Now that we saw how to create a component, a directive and a pipe, we are going to clean up our code and separate the data retrieval (the presidential candidates) into a service.

> 公共的方法放到service，各个组件之间是不可以使用其他组件的方法

### guard

the type of interface you want to implement

## NgModule 模块

### @NgModule

- declarations(可声明对象表): The components, directives, and pipes that belong to this NgModule.那些属于本 NgModule 的组件、指令、管道。
- exports(导出表):  The subset of declarations that should be visible and usable in the component templates of other NgModules.那些能在其它模块的组件模板中使用的可声明对象的子集。
- imports(导入表): Other modules whose exported classes are needed by component templates declared in this NgModule.那些导出了本模块中的组件模板所需的类的其它模块。
- providers:  Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）
- bootstrap: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。

### dependency injection

## Components & Templates

```ts
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
```

>The `<script>` element is a notable exception; it is forbidden 禁用

###  binding syntax

one-way from data source to view target: interpolation, property, attribute, class, style

```ts
{{expression}}
[target]='expression'
bind-target='expression'
```

one-way from data source to view target: interpolation, property, attribute, class, style

```ts
(target)='statement'
on-target='statement'
```

two-way: two-way

```ts
[(target)]='expression'
bindon-target='expression'
```

### HTML attribute vs. DOM property

attributes are defined by HTML, properties are defined by the DOM(Document Object Model)

>template binding works with **properties s** and **events**, not **attributes**

### Property binding 

```html
// they are same
<p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
<p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

<p><span>"{{title}}" is the <i>interpolated</i> title.</span></p>
<p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>
```

## Attribute, class and style bindings

```html
<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
    
// the *NgClass* directive is usually preferred when managing multiple class names at the same time.
<!-- toggle the "special" class on/off with a property -->
<div [class.special]="isSpecial">The class binding is special</div>

<!-- binding to `class.special` trumps the class attribute -->
<div class="special"
     [class.special]="!isSpecial">This one is not so special</div>

//  the *NgStyle* directive is generally preferred when setting several inline styles at the same time.
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>

<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
```

### Event

