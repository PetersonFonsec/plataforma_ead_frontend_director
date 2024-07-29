import { Pipe, PipeTransform } from '@angular/core';
import { IAvatarParans } from '@shared/components/avatar/avatar.component';
import { IUser } from '@shared/services/user-logged/user-logged.model';

@Pipe({
  name: 'iuserToAvatar',
  standalone: true
})
export class IuserToAvatarPipe implements PipeTransform {

  transform({ photo: src, name }: IUser): IAvatarParans {
    return { src, name };
  }

}
