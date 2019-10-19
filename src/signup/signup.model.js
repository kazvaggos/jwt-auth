import bcrypt from 'bcrypt';
import User from './model';

const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return await User.query().insertAndFetch({
    name,
    email,
    password: hashedPassword
  });
};

export {createUser};
