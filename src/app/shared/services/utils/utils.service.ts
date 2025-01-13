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
}
