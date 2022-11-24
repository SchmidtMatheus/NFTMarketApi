const router = require("express").Router();

const ApiMarket = require("../models/ApiMarket");

router.post("/create", async (req, res) => {
    const {title,
        description,
        price,
        imageUrl,
        userId} = req.body;

    if(!title){
        res.status(422).json({ error: "Title Required!"});
        return;
    };
    if(!description){
        res.status(422).json({ error: "Description Required!"});
        return;
    };
    if(!price){
        res.status(422).json({ error: "Price Required!"});
        return;
    };
    if(!imageUrl){
        res.status(422).json({ error: "ImageUrl Required!"});
        return;
    };

    const apiMarket = {
        title,
        description,
        price,
        imageUrl,
        sale: true,
        userId
    };

    try {
        await ApiMarket.create(apiMarket);

        res.status(201).json({ message: "NFT Registered!"});
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

router.post("/comprar", async (req, res) => {
    const {_id,
        userId} = req.body;
    let nft = await ApiMarket.find().where('_id').equals(_id)
    nft.userId = userId;
    nft.sale = false;
    try {
        await nft.save();
        res.status(201).json({ message: "NFT Registered!"});
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

//read

//findAll
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const apiMarkets = await ApiMarket.find().where('userId').ne(userId);

        res.status(200).json({ apiMarkets });
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

//findOne
router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const apiMarket = await ApiMarket.findOne({ _id: id});

        if(!apiMarket){
            res.status(422).json({ message: "apiMarket not Found!"});
            return;
        };

        res.status(200).json({ apiMarket });
    } catch (error) {
        res.status(500).json({ error: error });
    };
})

//update

//patch method to update only necessary data
router.patch("/:id", async (req, res) => {
    const id = req.params.id;

    const {
        title,
        description,
        price,
        imageUrl,
        sale,
    } = req.body;

    const apiMarket = {
        title,
        description,
        price,
        imageUrl,
        sale,
    };

    try {
        const updateapiMarket = await ApiMarket.updateOne({ _id: id }, apiMarket);

        //matchedCount returns 1 if changes were made
        if(updateapiMarket.matchedCount === 0){
            res.status(422).json({ message: "NFT not Found!"});
            return;
        };

        res.status(200).json({ apiMarket });
    } catch (error) {
        res.status(500).json({ error: error });
    };
})


//delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const apiMarket = await ApiMarket.findOne({ _id: id });

    if(!apiMarket){
        res.status(422).json({ message: "NFT not Found!"});
        return;
    };

    res.status(200).json({ message: "NFT deleted!"});
    try {
        await ApiMarket.deleteOne({ _id: id });
    } catch (error) {
        res.status(500).json({ error: error });
    };
})

module.exports = router;