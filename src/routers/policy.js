const express = require('express')

const policyRouter = new express.Router

// Adding schema
const PolicyDetails = require('../models/policyDetails')

// Storing policy details to database
policyRouter.post('/policyDetails', async (req, res)=>
{
    const policy = PolicyDetails(req.body)
    try
    {
        await policy.save()
        res.status(201).send({policy})
    }
    catch(e)
    {
        res.status(400).send(e.toString())
    }
    
})

// Getting policy details using policy id
policyRouter.get('/policyDetails/:policyId', async (req,res)=>
{
    const policy = await PolicyDetails.find({ policyId: req.params.policyId })
    try
    {
        if(!policy)
        {
            res.status(404).send({"Message" : "Data Not Found"})
        }
        else
        {
            res.status(200).send({policy})
        }
    }
    catch(e)
    {
        res.status(400).send(e.toString())
    }
})

// Getting policy details using customer id
policyRouter.get('/policyDetails/customer/:customerId', async (req,res)=>
{
    const policy = await PolicyDetails.find({ customerId : req.params.customerId })
    try
    {
        if(!policy)
        {
            res.status(404).send({"Message" : "Data Not Found"})
        }
        else
        {
            res.status(200).send({policy})
        }
    }
    catch(e)
    {
        res.status(400).send(e.toString())
    }
})

// Updating policy details
policyRouter.put('/policyDetails/update', async (req, res)=>
{
    try
    {
        const policy = await PolicyDetails.updateOne({ policyId: req.body.policyId},req.body)
        res.status(200).send({policy})
    }
    catch(e)
    {
        res.status(400).send(e.toString())
    }
    
})

module.exports = { policyRouter }