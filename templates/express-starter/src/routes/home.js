import express from 'express'
import { getData, getDataName } from '../controller/homeController.js'

const router = express.Router()

router.get('/', getData).get('/:name', getDataName)

export default router
