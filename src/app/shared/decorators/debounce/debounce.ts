import { Decorator, Method } from './debounce.model';
import { debouncify } from './debouncify';

export function debounce<T = any>(delayMs: number): Decorator<T> {
  return (
    target: T,
    propertyName: keyof T,
    descriptor: TypedPropertyDescriptor<Method<any>>,
  ): TypedPropertyDescriptor<Method<any>> => {
    if (descriptor.value) {
      const methodsMap = new WeakMap<any, Method<any>>();
      const originalMethod = descriptor.value;

      descriptor.value = function (...args: any[]) {
        if (!methodsMap.has(this)) {
          methodsMap.set(this, debouncify(originalMethod, delayMs).bind(this));
        }

        (methodsMap.get(this) as any)(...args);
      };

      return descriptor;
    }

    throw new Error('@debounce is applicable only on a methods.');
  };
}
