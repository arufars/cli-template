// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiRequest} res
 */
export default function handler(req, res) {
  const { name } = req.query
  res.status(200).json({ name: `Hello ${name}` })
}
