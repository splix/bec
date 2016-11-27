contract('Calculate Unclaimed', function(accounts) {

    it("just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726892, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 0);
        }).then(done).catch(done);
    });

    it("0 unclaimed just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726893, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 0);
        }).then(done).catch(done);
    });

    it("1 unclaimed just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726894, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 250000000);
        }).then(done).catch(done);
    });

    it("3 unclaimed just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726896, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 750000000);
        }).then(done).catch(done);
    });

    it("3 unclaimed after 2800004", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2800000, 2800004, 2800008, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 750000000);
        }).then(done).catch(done);
    });

    it("1 unclaimed after 2800007", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2800000, 2800007, 2800009, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 250000000);
        }).then(done).catch(done);
    });

    it("1 unclaimed after 6900000", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(6900000, 6899999, 6900001, 250000000, 125000000).then((e) => {
            assert.equal(e.toNumber(), 250000000);
        }).then(done).catch(done);
    });

    it("2 unclaimed after 6900000", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(6900000, 6899999, 6900002, 250000000, 125000000).then((e) => {
            assert.equal(e.toNumber(), 375000000);
        }).then(done).catch(done);
    });

    it("0 unclaimed after 3000100", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2800000, 3000099, 3000100, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 0);
        }).then(done).catch(done);
    });

});