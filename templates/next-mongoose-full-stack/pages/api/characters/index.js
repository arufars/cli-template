import dbConnect from 'src/lib/dbConnect'
import Character from 'src/model/character'
import NextCors from 'nextjs-cors'

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiRequest} res
 */
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'POST', 'PUT'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const characters = await Character.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: characters })
      } catch (err) {
        res.status(400).json({ message: err })
      }
      break
    case 'POST':
      try {
        const character = await Character.create(
          req.body
        ) /* create a new model in the database */

        res.status(201).json({ success: true, data: character })
      } catch (err) {
        res.status(400).json({ message: err })
      }
      break
    default:
      res.status(400).json({ message: 'Method not allowed' })
      break
  }
}
