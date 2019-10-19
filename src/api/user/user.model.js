import User from './model';

const getUserByEmail = async email => await User.query().findOne({email});

export {getUserByEmail};
