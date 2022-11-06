import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../../prisma/prima';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await prisma.users.findMany(); // all users

  if (!data) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=100000, state-while-revalidate');

    res.send(JSON.stringify({ message: 'id not found' }));
    return;
  }

  return res.json(data);
};
