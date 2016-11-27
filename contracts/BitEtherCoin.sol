pragma solidity ^0.4.4;

contract BitEtherCoin {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event Reward(address indexed _miner, uint256 _value, bool _current);

    uint256 public totalSupply;
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    uint256 minedBlock = 0;
    address satoshi;

    string public name = "BitEtherCoin";
    uint8  public decimals = 8;
    string public symbol = "BEC";

    // Initial reward per Ethereum Block is 2,
    // for 25 block it gives same reward as for Bitcoin first era (2 * 25 == 50)
    //
    //                   2.00000000
    uint256 rewardBase = 200000000;

    uint256  eraSize =    5250000;
    uint256  startBlock = 2726892;

    function BitEtherCoin() {
        satoshi = msg.sender;
    }

    // Mining Operations

    function claim() returns (uint256) {
        var (eraId, eraBlock, reward, prevReward) = getEra();
        if (minedBlock >= block.number) {
            Reward(block.coinbase, reward, false);
        } else if (eraId > 0 && eraId < 30) {
            uint256 unclaimed = getUnclaimed(eraBlock, minedBlock, block.number, prevReward, reward);

            if (reward > 0) {
                balances[block.coinbase] += reward;
                totalSupply += reward;
            }

            if (unclaimed > 0) {
                balances[satoshi] += unclaimed;
                totalSupply += unclaimed;
            }

            minedBlock = block.number;
            Reward(block.coinbase, reward, true);
        }
        return reward;
    }

    // returns:
    //  uint256 - era id
    //  uint256 - era start block
    //  uint256 - current era reward
    //  uint256 - previous era reward
    function getEra() returns(uint256, uint256, uint256, uint256) {
        return getEraForBlock(block.number);
    }

    // returns:
    //  uint256 - era id
    //  uint256 - era start block
    //  uint256 - current era reward
    //  uint256 - previous era reward
    function getEraForBlock(uint256 _block) returns(uint256, uint256, uint256, uint256) {
        if (_block < startBlock) {
            return (0, 0, 0, 0);
        }
        uint256 coinBlock = _block - startBlock;
        uint256 eraNumber = coinBlock / eraSize;
        uint256 eraId = eraNumber + 1;
        uint256 eraStart = startBlock + eraNumber * eraSize;
        if (eraNumber > 0) {
            // for eraNumber = 1 (second era) it should be rewardBase
            uint256 rewardPrevious = rewardBase / (2 ** (eraNumber - 1));
            uint256 reward = rewardPrevious / 2;
            return (eraId, eraStart, reward, rewardPrevious);
        } else {
            return (eraId, eraStart, rewardBase, 0);
        }
    }

    // parameters:
    //  uint256 _eraBlock     - start block for current era
    //  uint256 _blockMined   - last mined block
    //  uint256 _blockNumber  - current block
    //  uint256 _rewardPrev   - reward for previous era (or 0)
    //  uint256 _reward       - reward for current era
    function getUnclaimed(uint256 _eraBlock, uint256 _blockMined, uint256 _blockNumber,
                          uint256 _rewardPrev, uint256 _reward) returns(uint256) {
        uint256 unclaimed = 0;
        if (_blockMined >= startBlock) {
            if (_blockMined < _eraBlock) {
                // some blocks are from previous era
                unclaimed = (_eraBlock - _blockMined) * _rewardPrev;
                if (_blockNumber > _eraBlock) {
                    unclaimed += (_blockNumber - _eraBlock - 1) * _reward;
                }
            } else {
                // all block are from current era
                unclaimed = (_blockNumber - _blockMined - 1) * _reward;
            }
        } else if (_blockNumber > _eraBlock) {
            unclaimed = (_blockNumber - _eraBlock - 1) * _reward;
        }
        return unclaimed;
    }

    // Token Interface

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value) returns (bool success) {
        if (balances[msg.sender] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to]        += _value;
            Transfer(msg.sender, _to, _value);
            return true;
        }
        return false;
    }

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0) {
            balances[_to]   += _value;
            balances[_from] -= _value;
            allowed[_from][msg.sender] -= _value;
            Transfer(_from, _to, _value);
            return true;
        }
        return false;
    }

    function approve(address _spender, uint256 _value) returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    // Other

    function () {
        throw;
    }
}