import httpMocks from 'node-mocks-http';
import {getUser} from '../user.controllers';
import * as userModel from '../user.model';

let req;
let res;
let resStatus;
let resJson;

describe('user::controllers::getUser', () => {
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    req.jwtPayload = {email: 'test@test.com'};

    resStatus = jest.fn();
    resJson = jest.fn();

    res.status = resStatus;
    res.json = resJson;

    resJson.mockImplementation(() => res);
    resStatus.mockImplementation(() => res);
  });

  it('should return status 200 when request resolves', async () => {
    userModel.getUserByEmail = () => Promise.resolve({});
    await getUser(req, res, () => {});

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should return status 401 when request rejects', async () => {
    userModel.getUserByEmail = () => Promise.reject();
    await getUser(req, res, () => {});

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('should return status 401 when no user is found', async () => {
    userModel.getUserByEmail = () => Promise.resolve(null);
    await getUser(req, res, () => {});

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('should return user when user is found', async () => {
    userModel.getUserByEmail = () =>
      Promise.resolve({
        name: 'Vaggelis',
        password: '123456789',
        created: '123',
        email: 'test@test.com'
      });

    await getUser(req, res, () => {});

    expect(res.json).toHaveBeenCalledWith({data: {name: 'Vaggelis', email: 'test@test.com'}});
  });
});
