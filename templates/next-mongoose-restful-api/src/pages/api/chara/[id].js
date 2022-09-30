import dbConnect from "@src/lib/dbConnect"
import Waifu from "@src/model/Waifu"

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case "GET":
      try {
        const waifu = await Waifu.findById(id)
        if (!waifu) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: waifu })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case "PUT": /* Edit a model by its ID */
      try {
        const waifu = await Waifu.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!waifu) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: waifu })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case "DELETE": /* Delete a model by its ID */
      try {
        const deletedWaifu = await Waifu.deleteOne({ _id: id })
        if (!deletedWaifu) {
          return res.status(400).json({ success: false })
        }
        res
          .status(200)
          .json({ success: true, data: { message: 'Succes Delete' } })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false, data: { message: "Nothing" } })
      break
  }
}
