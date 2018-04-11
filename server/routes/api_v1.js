/**
 *
 * Example route for API
 *
 */

import { Router } from 'express';
import { sendMailFromGmail } from '../middlewares/gmail'

const router = Router();

router.route('/info').get(getInfo);
router.route('/send').post(sendEmail);

function sendEmail(req, res, next) {
  sendMailFromGmail(req, res, next);
}

function getInfo(req, res) {
  res.status(200).json({
    message: 'GET INFO'
  });
}

export default router;
