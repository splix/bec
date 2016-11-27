contract('Calculate Era', function(accounts) {

    var addrClient = accounts[1];

    it("block        1 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  1000000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1000000).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  1500000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1500000).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2000000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2000000).then( (e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2726892 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2750000).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2726893 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2750001).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  3000000 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(3000000).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  4796368 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(4796368).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  5674538 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(5674538).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });


    it("block  6899999 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(6899999).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  7976892 - second era - 1", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(7976892).then( (e) => {
            assert.equal(e[0].toNumber(), 2);
            assert.equal(e[1].toNumber(), 7976892);
            assert.equal(e[2].toNumber(), 100000000);
            assert.equal(e[3].toNumber(), 200000000);
        }).then(done).catch(done);
    });

    it("block  8792060 - second era - 1", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(8792060).then( (e) => {
            assert.equal(e[0].toNumber(), 2);
            assert.equal(e[1].toNumber(), 7976892);
            assert.equal(e[2].toNumber(), 100000000);
            assert.equal(e[3].toNumber(), 200000000);
        }).then(done).catch(done);
    });

    it("block 11000200 - second era - 1", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(11000200).then( (e) => {
            assert.equal(e[0].toNumber(), 2);
            assert.equal(e[1].toNumber(), 7976892);
            //                            .0000
            assert.equal(e[2].toNumber(), 100000000);
            assert.equal(e[3].toNumber(), 200000000);
        }).then(done).catch(done);
    });

    it("block 13226892 - third era - 0.5", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(13226892).then( (e) => {
            assert.equal(e[0].toNumber(), 3);
            assert.equal(e[1].toNumber(), 13226892);
            //                            .0000
            assert.equal(e[2].toNumber(),  50000000);
            assert.equal(e[3].toNumber(), 100000000);
        }).then(done).catch(done);
    });

    it("block 15700000 - third era - 0.5", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(15700000).then( (e) => {
            assert.equal(e[0].toNumber(), 3);
            assert.equal(e[1].toNumber(), 13226892);
            //                            .0000
            assert.equal(e[2].toNumber(),  50000000);
            assert.equal(e[3].toNumber(), 100000000);
        }).then(done).catch(done);
    });

    it("block 18476892 - 4th era - 0.25", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(18476892).then( (e) => {
            assert.equal(e[0].toNumber(), 4);
            assert.equal(e[1].toNumber(), 18476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),  25000000);
            assert.equal(e[3].toNumber(),  50000000);
        }).then(done).catch(done);
    });

    it("block 20000000 - 4th era - 0.25", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(20000000).then( (e) => {
            assert.equal(e[0].toNumber(), 4);
            assert.equal(e[1].toNumber(), 18476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),  25000000);
            assert.equal(e[3].toNumber(),  50000000);
        }).then(done).catch(done);
    });

    it("block 23726892 - 5th era - 0.125", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(23726892).then( (e) => {
            assert.equal(e[0].toNumber(), 5);
            assert.equal(e[1].toNumber(), 23726892);
            //                            .00000000
            assert.equal(e[2].toNumber(),  12500000);
            assert.equal(e[3].toNumber(),  25000000);
        }).then(done).catch(done);
    });

    it("block 28976892 - 6th era - 0.0625", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(28976892).then( (e) => {
            assert.equal(e[0].toNumber(), 6);
            assert.equal(e[1].toNumber(), 28976892);
            //                            .00000000
            assert.equal(e[2].toNumber(),   6250000);
            assert.equal(e[3].toNumber(),  12500000);
        }).then(done).catch(done);
    });

    it("block 34226892 - 7th era - 0.03125", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(34226892).then( (e) => {
            assert.equal(e[0].toNumber(), 7);
            assert.equal(e[1].toNumber(), 34226892);
            //                            .00000000
            assert.equal(e[2].toNumber(),   3125000);
            assert.equal(e[3].toNumber(),   6250000);
        }).then(done).catch(done);
    });

    it("block 39476892 - 8th era - 0.015625", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(39476892).then( (e) => {
            assert.equal(e[0].toNumber(), 8);
            assert.equal(e[1].toNumber(), 39476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),   1562500);
            assert.equal(e[3].toNumber(),   3125000);
        }).then(done).catch(done);
    });

    it("block 44726892 - 9th era - 0.00781250", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(44726892).then( (e) => {
            assert.equal(e[0].toNumber(), 9);
            assert.equal(e[1].toNumber(), 44726892);
            //                            .00000000
            assert.equal(e[2].toNumber(),    781250);
            assert.equal(e[3].toNumber(),   1562500);
        }).then(done).catch(done);
    });

    it("block 49976892 - 10th era - 0.00390625", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(49976892).then( (e) => {
            assert.equal(e[0].toNumber(), 10);
            assert.equal(e[1].toNumber(), 49976892);
            //                            .00000000
            assert.equal(e[2].toNumber(),    390625);
            assert.equal(e[3].toNumber(),    781250);
        }).then(done).catch(done);
    });

    it("block 55226892 - 11th era - 0.00195312", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(55226892).then( (e) => {
            assert.equal(e[0].toNumber(), 11);
            assert.equal(e[1].toNumber(), 55226892);
            //                            .00000000
            assert.equal(e[2].toNumber(),    195312);
            assert.equal(e[3].toNumber(),    390625);
        }).then(done).catch(done);
    });

    it("block 60476892 - 12th era - 0.00097656", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(60476892).then( (e) => {
            assert.equal(e[0].toNumber(), 12);
            assert.equal(e[1].toNumber(), 60476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),     97656);
            assert.equal(e[3].toNumber(),    195312);
        }).then(done).catch(done);
    });

    it("block 65726892 - 13th era - 0.00048828", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(65726892).then( (e) => {
            assert.equal(e[0].toNumber(), 13);
            assert.equal(e[1].toNumber(), 65726892);
            //                            .00000000
            assert.equal(e[2].toNumber(),     48828);
            assert.equal(e[3].toNumber(),     97656);
        }).then(done).catch(done);
    });

    it("block 70976892 - 14th era - 0.00024414", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(70976892).then( (e) => {
            assert.equal(e[0].toNumber(), 14);
            assert.equal(e[1].toNumber(), 70976892);
            //                            .00000000
            assert.equal(e[2].toNumber(),    24414);
            assert.equal(e[3].toNumber(),    48828);
        }).then(done).catch(done);
    });

    it("block 102476892 - 20th era - 0.00000381", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(102476892).then( (e) => {
            assert.equal(e[0].toNumber(), 20);
            assert.equal(e[1].toNumber(), 102476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),      381);
            assert.equal(e[3].toNumber(),      762);
        }).then(done).catch(done);
    });

    it("block 144476892 - 28th era - 0.00000001", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(144476892).then( (e) => {
            assert.equal(e[0].toNumber(), 28);
            assert.equal(e[1].toNumber(), 144476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),         1);
            assert.equal(e[3].toNumber(),         2);
        }).then(done).catch(done);
    });

    it("block 149726892 - 29th era - 0.00000000", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(149726892).then( (e) => {
            assert.equal(e[0].toNumber(), 29);
            assert.equal(e[1].toNumber(), 149726892);
            //                            .00000000
            assert.equal(e[2].toNumber(),         0);
            assert.equal(e[3].toNumber(),         1);
        }).then(done).catch(done);
    });

    it("block 154976892 - 30th era - 0.00000000", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(154976892).then( (e) => {
            assert.equal(e[0].toNumber(), 30);
            assert.equal(e[1].toNumber(), 154976892);
            //                            .00000000
            assert.equal(e[2].toNumber(),         0);
            assert.equal(e[3].toNumber(),         0);
        }).then(done).catch(done);
    });

    it("block 154976893 - 30th era - 0.00000000", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(154976893).then( (e) => {
            assert.equal(e[0].toNumber(), 30);
            assert.equal(e[1].toNumber(), 154976892);
            //                            .00000000
            assert.equal(e[2].toNumber(),         0);
            assert.equal(e[3].toNumber(),         0);
        }).then(done).catch(done);
    });

    it("block 165476892 - 32th era - 0.00000000", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(165476892).then( (e) => {
            assert.equal(e[0].toNumber(), 32);
            assert.equal(e[1].toNumber(), 165476892);
            //                            .00000000
            assert.equal(e[2].toNumber(),         0);
            assert.equal(e[3].toNumber(),         0);
        }).then(done).catch(done);
    });

});
