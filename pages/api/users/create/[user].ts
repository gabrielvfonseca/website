import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const { v4: uuidv4 } = require('uuid');
import prisma from '../../../../prisma/prima';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = uuidv4; // generate id:uuid
  const username = req.query['username'];
  const name = req.query['name'];
  const profile_url = req.query['profile_url'];
  const avatar = req.query['avatar']; // ?

  let newUser: Prisma.usersCreateInput;

  if (!name || (typeof name !== 'string' && !username) || typeof username !== 'string') {
    res.statusCode = 404;
    res.send(JSON.stringify({ messsage: 'query missing' }));
    return;
  }

  if (!avatar) {
    newUser = {
      id: id,
      username: username,
      name: name,
      profile_url: profile_url,
    };
  } else {
    newUser = {
      id: id,
      username: username,
      name: name,
      avatar: avatar,
      profile_url: profile_url,
    };
  }

  const createUser = await prisma.users.create({
    data: newUser,
  });

  if (!createUser) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=100000, state-while-revalidate');

    res.send(JSON.stringify({ message: 'id not found' }));
    return;
  }

  return res.json(createUser);
};
