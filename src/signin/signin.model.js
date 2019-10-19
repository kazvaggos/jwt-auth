import bcrypt from 'bcrypt';
import User from './model';

const checkUser = async (email, password) => {
  const user = await User.query().findOne({email});

  if (!user) {
    return false;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return false;
  }

  return user;
};

export {checkUser};
