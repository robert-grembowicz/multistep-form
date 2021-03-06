import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiData } from 'types';

const data: ApiData = {
  title: 'What therapy or consultation are you looking for?',
  options: [
    'Indyvidual',
    'Couple therapy',
    'For children'
  ],
  type: 'radio'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  res.status(200).json(data)
}
