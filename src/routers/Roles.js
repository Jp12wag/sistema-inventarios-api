const express = require('express')
const Rol = require('../models/Roles')
const { resolveSoa } = require('dns')
const router = new express.Router()


router.post('/roles', async (req, res) => {
    const roles = new Rol(req.body)
    console.log(roles);

    try {
        await roles.save()
        res.status(201).send(roles)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/roles', async (req, res) => {
    roles = await Rol.find();
   
    res.send(roles)
})

module.exports = router