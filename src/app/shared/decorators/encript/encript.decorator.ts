import { Injector } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { EncriptService } from '@shared/services/encript.service';

import "reflect-metadata";

const fieldsToEncript = Symbol("encript:fields");

const fieldsToDecript = Symbol("decript:fields");

export function encript(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = function () {
    return value;
  };

  const setter = function (newValue: any) {

    let fields = Reflect.getMetadata(fieldsToEncript, target.constructor);
    if (!fields) fields = new Set();
    fields.add(propertyKey);

    Reflect.defineMetadata(fieldsToEncript, fields, target.constructor);

    value = newValue;
  };

  // Redefine a propriedade com os novos getter e setter
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
};

export function decript(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const setter = function (newValue: any) {
    let fields = Reflect.getMetadata(fieldsToDecript, target.constructor);
    if (!fields) fields = new Set();
    fields.add(propertyKey);

    Reflect.defineMetadata(fieldsToDecript, fields, target.constructor);

    value = newValue;
  };

  // Redefine a propriedade com os novos getter e setter
  Object.defineProperty(target, propertyKey, {
    set: setter,
    enumerable: true,
    configurable: true,
  });
};

export function enableEncryption() {
  return function (constructor: any) {
    constructor.prototype.encript = async () => {
      const injector = Injector.create({ providers: [{ provide: EncriptService, useClass: EncriptService }] });
      const encriptService = injector.get(EncriptService);

      const metadata = Reflect.getMetadata(fieldsToEncript, constructor);
      const result = class extends constructor { };
      const obj = constructor.prototype;

      for (const fields in obj) {
        if (typeof obj[fields] === "string") {
          result[fields] = await lastValueFrom(encriptService.encript(obj[fields]));
          continue;
        }

        result[fields] = obj[fields]
      }

      return result;
    };

    constructor.prototype.decript = async () => {
      const injector = Injector.create({ providers: [{ provide: EncriptService, useClass: EncriptService }] });
      const encriptService = injector.get(EncriptService);

      const metadata = Reflect.getMetadata(fieldsToDecript, constructor);
      const result = class extends constructor { };
      const obj = constructor.prototype;

      for (const fields in obj) {
        if (typeof obj[fields] === "string") {
          result[fields] = await lastValueFrom(encriptService.decript(obj[fields]));
          continue;
        }

        result[fields] = obj[fields]
      }

      return result;
    };
  };
}
