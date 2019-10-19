import {Model, snakeCaseMappers} from 'objection';

class User extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'user';
  }
}

export default User;
