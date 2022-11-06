import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../../prisma/prima';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query['id'];

  if (!id || typeof id !== 'string') {
    res.statusCode = 404;
    res.send(JSON.stringify({ messsage: 'not found' }));
    return;
  }

  const data = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });

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
