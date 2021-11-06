const { Router } = require('express')

const { ventasGet,
        ventasPut,
        ventasDelete,
        ventasPost
     } = require('../controllers/ventas')

const router = Router()

router.get('/',ventasGet)
router.post('/',ventasPost)
router.put('/:id',ventasPut)
router.delete('/:id',ventasDelete)

module.exports = router