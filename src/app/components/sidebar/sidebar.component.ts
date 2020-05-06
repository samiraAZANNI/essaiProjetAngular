import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "MRP (Prod-Planning)",
    rtlTitle: "التخطيط الأولي",
    icon: "icon-settings",
    class: ""
  },
  {
    path: "/maps",
    title: "Purchase",
    rtlTitle: "عملية الشراء",
    icon: "icon-cart",
    class: "" },
  {
    path: "/notifications",
    title: "Customer Alerts",
    rtlTitle: "تنبيهات العملاء",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "Proof Repeat",
    rtlTitle: "تكرار الدليل",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/tables",
    title: "Purchasing Report",
    rtlTitle: "تقرير الشراء",
    icon: "icon-paper",
    class: ""
  },
  {
    path: "/typography",
    title: "Sales Management",
    rtlTitle: "إدارة المبيعات",
    icon: "icon-coins",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
