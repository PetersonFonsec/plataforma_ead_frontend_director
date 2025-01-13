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
}
