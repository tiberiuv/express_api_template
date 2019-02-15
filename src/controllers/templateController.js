export const health = async (req, res, next) => {
    return res.status(200).json({
        message: 'Alive!'
    })
}