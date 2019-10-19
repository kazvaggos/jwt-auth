import {newToken} from '../util/jwtAuth';
import {checkUser} from './signin.model';

const signIn = async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).send({message: 'not all data filled'});
  }

  const invalid = {message: 'Invalid email and passoword combination'};

  try {
    const user = await checkUser(email, password);

    if (!user) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(201).send({token});
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export {signIn};
