import {newToken} from '../util/jwtAuth';
import {createUser} from './signup.model';

const signUp = async (req, res) => {
  const {email, password, name} = req.body;

  if (!email || !password || !name) {
    return res.status(400).send({message: 'not all data filled'});
  }

  try {
    const user = await createUser(name, email, password);
    const token = newToken(user);
    return res.status(201).send({token});
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};

export {signUp};
