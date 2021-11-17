import { NextApiRequest, NextApiResponse } from 'next';

async function time(_req: NextApiRequest, res: NextApiResponse){
    
  const dynamicDate = new Date();

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  res.status(200).json({date: dynamicDate.toISOString()});
}

export default time;