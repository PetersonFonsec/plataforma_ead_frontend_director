import { menus } from "@shared/data/menus";

export class Utils {
  static readonly byteValue = 1048576;

  static convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) form_data.append(key, form[key]);

    return form_data;
  }

  static addMonth(date: Date, month: number) {
    return new Date(date.setMonth(date.getMonth() + month));
  }

  static subtractMonth(date: Date, month: number) {
    return new Date(date.setMonth(date.getMonth() - month));
  }

  static getRouteByRole(role: string): string {
    const urlBaseByRoles: any = { ADMIN: '/backoffice', DIRECTOR: '/backoffice', TEACHER: '/backoffice', STUDENT: '/student' };

    return urlBaseByRoles[role] || "/authenticate";
  }

  static getMenusByRole(role: string) {
    const urlBaseByRoles: any = { ADMIN: menus.DIRECTOR, DIRECTOR: menus.DIRECTOR, TEACHER: menus.TEACHER, STUDENT: menus.STUDENT };
    return urlBaseByRoles[role] || menus.STUDENT;
  }
}
