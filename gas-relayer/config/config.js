module.exports = {
    "gasPrice": 20,
    "node": {
        "local":{
            "protocol": "ws",
            "host": "localhost",
            "port": 8546
        },
        "ganache": {
            "protocol": "http",
            "host": "localhost",
            "port": 8545
        },
        "blockchain": {
            "account": "0xb8d851486d1c953e31a44374aca11151d49b8bb3"
        },
        "whisper": {
            "symKey": "0xd0d905c1c62b810b787141430417caf2b3f54cffadb395b7bb39fdeb8f17266b",
            "ttl": 1000,
            "minPow": 0.2,
            "powTime": 1000
        }
    },

    "heartbeat": {
        "enabled": true,
        "symKey": "0xd0d905c1c62b810b787141430417caf2b3f54cffadb395b7bb39fdeb8f17266b"
    },
    
    "tokens": {
        "0x0000000000000000000000000000000000000000": {
            "name": "Ethereum",
            "symbol": "ETH",
            "minAccepted":{
                "value": 1,
                "currency": "USD"
            }
        },
        "%STTAddress%": {
            "name": "Status Test Token",
            "symbol": "SNT",
            "minAccepted":{
                "value": 1,
                "currency": "USD"
            },
            "pricePlugin": "../plugins/token-utils.js"
        }
    },

    "contracts":{
        "IdentityGasRelay": {
            "abiFile": "../abi/IdentityGasRelay.json",
            "isIdentity": true,
            "factoryAddress": "%IdentityFactoryAddress%",
            "kernelVerification": "isKernel(bytes32)",
            "allowedFunctions": [
                { 
                    "function": "approveAndCallGasRelayed(address,address,uint256,bytes,uint256,uint256,uint256,address,bytes)", 
                    "isToken": true
                },
                {
                    "function": "callGasRelayed(address,uint256,bytes,uint256,uint256,uint256,address,bytes)",
                    "isToken": false
                }
            ],
            "strategy": "../src/strategy/IdentityStrategy.js"
        },
        "SNTController": {
            "abiFile": "../abi/SNTController.json",
            "isIdentity": false,
            "address": "%SNTController%",
            "allowedFunctions": [
                {
                    "function":"transferSNT(address,uint256,uint256,uint256,bytes)"
                },
                {
                    "function":"executeGasRelayed(address,bytes,uint256,uint256,uint256,bytes)"
                }
            ],
            "strategy": "../src/strategy/SNTStrategy.js"
        }
    }
};
