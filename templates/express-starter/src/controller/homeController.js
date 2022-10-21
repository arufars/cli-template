import asyncHandler from 'express-async-handler'

const getData = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `Hello World` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

const getDataName = asyncHandler(async (req, res) => {
  try {
    const { params } = req

    res.status(200).json({ message: `Hello ${params.name}` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export { getData , getDataName}
