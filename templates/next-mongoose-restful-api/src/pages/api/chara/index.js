import cors from "cors";
import dbConnect from "@src/lib/dbConnect";
import Waifu from "@src/model/Waifu";

// Initializing the cors middleware
const corsHandler = cors({
  methods: ["GET"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
export default async function handler(req, res) {
  await runMiddleware(req, res, corsHandler);

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const waifu = await Waifu.find({}); /* find all the data in our database */
        // condition if waifu is empty
        if (!waifu) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: waifu });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const waifu = await Waifu.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: waifu });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
