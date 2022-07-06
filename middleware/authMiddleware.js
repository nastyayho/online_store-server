const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer dasdadfdfgdgsdfs
        if (!token) {
            console.log('нет токена')
            return res
                .status(401)
                .json({ message: 'Пользователь не авторизован' })
        }
        const decoded = jwt.verify(token, procss.env.SECRET_KEY)
        console.log('есть токен')
        req.user = decoded
        next()
    } catch (e) {
        const token = req.headers.authorization.split(' ')[1] // Bearer dasdadfdfgdgsdfs
        console.log('че то там не вышло')
        console.log({ token })
        res.status(401).json({ message: 'Пользователь не авторизован' })
    }
}
