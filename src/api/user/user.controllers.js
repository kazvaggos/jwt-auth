import {getUserByEmail} from './user.model';

const getUser = async (req, res) => {
  try {
    const user = await getUserByEmail(req.jwtPayload.email);

    if (!user) {
      return res.status(401).end();
    }

    delete user.password;
    delete user.created;

    res.status(200).json({data: user});
  } catch (e) {
    console.error(e);
    return res.status(401).end();
  }
};

export {getUser};
