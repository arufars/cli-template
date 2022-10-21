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
    methods: ['GET', 'HEAD', 'DELETE', 'PUT'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  await dbConnect()

  
  const {
    query: { id },
    method,
  } = req


  switch (method) {
    case 'GET':
      try {
        const character = await Character.findById(id)
        res.status(200).json({ success: true, data: character })
      } catch (err) {
        res.status(400).json({ message: err, msg: 'Not found' })
      }
      break
    case 'PUT':
      try {
        const character = await Character.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        res.status(200).json({ data: character })
      } catch (err) {
        res.status(400).json({ message: err })
      }
      break
    case 'DELETE':
      try {
        const deletedCharacter = await Character.deleteOne({ _id: id })
        res.status(200).json({ success: true, data: deletedCharacter })
      } catch (err) {
        res.status(400).json({ message: err })
      }
      break
    default:
      res.status(400).json({ message: 'Method not allowed' })
      break
  }
}
