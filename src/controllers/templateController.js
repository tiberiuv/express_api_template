import {sendSuccess} from '../utils/errorHandling'
export const health = async (req, res, next) => {
    sendSuccess(res, 'Alive!')
}