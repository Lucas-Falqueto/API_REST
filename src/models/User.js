import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 a 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      passaword_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      passaword: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 a 50 caracteres.',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (user.passaword) {
        user.passaword_hash = await bcryptjs.hash(user.passaword, 8);
      }
    });

    return this;
  }

  passawordIsvalid(passaword) {
    return bcryptjs.compare(passaword, this.passaword_hash);
  }
}
