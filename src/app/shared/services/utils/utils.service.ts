import { Routes } from "@angular/router";
import { backOfficeRoutes } from "app/routes/backoffice.routes";
import { studentPortalRoutes } from "app/routes/students.routes";

export class Utils {
  static readonly byteValue = 1048576;

  static convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) {
      form_data.append(key, form[key]);
    }
    return form_data;
  }

  static addMounth(date: Date, mounth: number) {
    return new Date(date.setMonth(date.getMonth() + mounth));
  }

  static subtractMounth(date: Date, mounth: number) {
    return new Date(date.setMonth(date.getMonth() - mounth));
  }

  static getRouteByRole(role: string): string {
    let url = '';

    switch (role) {
      case 'ADMIN':
        url = '/backoffice';
        break;
      case 'DIRECTOR':
        url = '/backoffice';
        break;
      case 'TEACHER':
        url = '/backoffice';
        break;
      case 'STUDENT':
        url = '/student';
        break;
      default: "/authenticate";
    }

    return url;
  }

  static getMenusByRole(role: string) {
    let newMenus: any[] = [];

    switch (role) {
      case 'ADMIN':
        newMenus = Utils.extractMenus(backOfficeRoutes);
        break;
      case 'DIRECTOR':
        newMenus = Utils.extractMenus(backOfficeRoutes);
        break;
      case 'TEACHER':
        newMenus = Utils.extractMenus(backOfficeRoutes);
        break;
      case 'STUDENT':
        newMenus = Utils.extractMenus(studentPortalRoutes);
        break;
    }

    return newMenus;
  }

  static extractMenus(menus: Routes): { label: string, link: string }[] {
    let newMenus: any = [];

    menus.forEach(menu => {
      newMenus.push({
        label: (menu.title as string)?.split('-')[0]?.trim() || 'Menu desconhecido',
        link: menu.path
      });
    });

    return newMenus;
  }
}
