"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.REVIEWER_ABI = exports.COMMUNITYDAO_CONTRACT_ABI = exports.PUSH_CHANNEL_ADDRESS = exports.LOG_LEVEL = exports.REVIEW_CONTRACT_ADDRESS = exports.COMMUNITYDAO_CONTRACT_ADDRESS = exports.NETWORK_HTTPS_URL = exports.RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY = exports.NETWORK_LATEST_BLOCK_NUMBER_KEY = exports.NETWORK = exports.DEFAULT_RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY = exports.DEFAULT_LATEST_BLOCK_NUMBER_KEY = exports.RECON_INTERVAL = exports.HTTPS_MODE_INTERVAL = exports.REDIS_HOSTNAME = exports.HOSTNAME = exports.KEY = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.KEY = process.env.KEY;
exports.HOSTNAME = process.env.hostname;
exports.REDIS_HOSTNAME = (_a = process.env.REDIS_HOSTNAME) !== null && _a !== void 0 ? _a : "localhost";
exports.HTTPS_MODE_INTERVAL = (_b = process.env.HTTPS_MODE_INTERVAL) !== null && _b !== void 0 ? _b : 5000;
exports.RECON_INTERVAL = (_c = process.env.RECON_INTERVAL) !== null && _c !== void 0 ? _c : 6000;
exports.DEFAULT_LATEST_BLOCK_NUMBER_KEY = "ethereum_block_number_key";
exports.DEFAULT_RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY = "recon_ethereum_block_number_key";
exports.NETWORK = "MATIC";
exports.NETWORK_LATEST_BLOCK_NUMBER_KEY = (_d = process.env.BLOCK_NUMBER_KEY) !== null && _d !== void 0 ? _d : exports.DEFAULT_LATEST_BLOCK_NUMBER_KEY;
exports.RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY = (_e = process.env.RECON_BLOCK_NUMBER_KEY) !== null && _e !== void 0 ? _e : exports.DEFAULT_RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY;
exports.NETWORK_HTTPS_URL = (_f = process.env.NETWORK_HTTPS_URL) !== null && _f !== void 0 ? _f : "";
exports.COMMUNITYDAO_CONTRACT_ADDRESS = (_g = process.env.COMMUNITYDAO_CONTRACT_ADDRESS) !== null && _g !== void 0 ? _g : "0x0";
exports.REVIEW_CONTRACT_ADDRESS = (_h = process.env.REVIEW_CONTRACT_ADDRESS) !== null && _h !== void 0 ? _h : "0x0";
exports.LOG_LEVEL = (_j = process.env.LOG_LEVEL) !== null && _j !== void 0 ? _j : "INFO";
exports.PUSH_CHANNEL_ADDRESS = (_k = process.env.PUSH_CHANNEL_ADDRESS) !== null && _k !== void 0 ? _k : "";
exports.COMMUNITYDAO_CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_verified_contract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "credibility",
                "type": "int256"
            }
        ],
        "name": "CredibilityUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "MemberAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "min_degree",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "institutes",
                "type": "uint256[]"
            }
        ],
        "name": "MembershipCriteriaUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "new_member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "voteStart",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "voteEnd",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "descriptionHash",
                "type": "string"
            }
        ],
        "name": "MembershipProposalCreate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
            }
        ],
        "name": "QuorumUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "support",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "descriptionHash",
                "type": "string"
            }
        ],
        "name": "Voted",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MEMBERSHIP_REQUEST_ID",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MEMBER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VERIFIED_CONTRACT_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_members",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_voting_period",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_verified_contract",
                "type": "address"
            }
        ],
        "name": "addVerifiedContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "addressToId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_new_member",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "support",
                "type": "bool"
            }
        ],
        "name": "castVoteMembership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "credibility",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "criteria",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "degree",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSupportedRequests",
        "outputs": [
            {
                "internalType": "uint64[]",
                "name": "arr",
                "type": "uint64[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            }
        ],
        "name": "getZKPRequest",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "schema",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "slotIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "operator",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "value",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "string",
                        "name": "circuitId",
                        "type": "string"
                    }
                ],
                "internalType": "struct ICircuitValidator.CircuitQuery",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "idToAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_member",
                "type": "address"
            }
        ],
        "name": "isMember",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "last_block_request",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "membership_proposals",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteStart",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteEnd",
                "type": "tuple"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "canceled",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "descriptionHash",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "proofs",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "quorum",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_verified_contract",
                "type": "address"
            }
        ],
        "name": "removeVerifiedContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "requestQueries",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "schema",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "slotIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "operator",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "circuitId",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "requestValidators",
        "outputs": [
            {
                "internalType": "contract ICircuitValidator",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_member",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_credit",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "increase",
                "type": "bool"
            }
        ],
        "name": "setCredibility",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_degree",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "_allowed_institutions",
                "type": "uint256[]"
            }
        ],
        "name": "setMembershipCriteria",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_quorum",
                "type": "uint256"
            }
        ],
        "name": "setQuorum",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            },
            {
                "internalType": "contract ICircuitValidator",
                "name": "validator",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "schema",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "slotIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "operator",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "value",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "string",
                        "name": "circuitId",
                        "type": "string"
                    }
                ],
                "internalType": "struct ICircuitValidator.CircuitQuery",
                "name": "query",
                "type": "tuple"
            }
        ],
        "name": "setZKPRequest",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            },
            {
                "internalType": "uint256[]",
                "name": "inputs",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[2]",
                "name": "a",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "b",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "c",
                "type": "uint256[2]"
            }
        ],
        "name": "submitZKPResponse",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "supportedRequests",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
exports.REVIEWER_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_verified_contract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "new_member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "voteStart",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "voteEnd",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "MembershipProposalCreate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "signatures",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startBlock",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "endBlock",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ProposalCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MEMBERSHIP_REQUEST_ID",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MEMBER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VERIFIED_CONTRACT_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_members",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_voting_period",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            }
        ],
        "name": "addMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "addressToId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "support",
                "type": "bool"
            }
        ],
        "name": "castVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_new_member",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "support",
                "type": "bool"
            }
        ],
        "name": "castVoteMembership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "credibility",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "criteria",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "degree",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSupportedRequests",
        "outputs": [
            {
                "internalType": "uint64[]",
                "name": "arr",
                "type": "uint64[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            }
        ],
        "name": "getZKPRequest",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "schema",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "slotIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "operator",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "value",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "string",
                        "name": "circuitId",
                        "type": "string"
                    }
                ],
                "internalType": "struct ICircuitValidator.CircuitQuery",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "idToAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_member",
                "type": "address"
            }
        ],
        "name": "isMember",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "last_block_request",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "membership_proposals",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteStart",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteEnd",
                "type": "tuple"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "canceled",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "proofs",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "proposals",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteStart",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint64",
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Timers.BlockNumber",
                "name": "voteEnd",
                "type": "tuple"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "canceled",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "propose",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "quorum",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "requestQueries",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "schema",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "slotIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "operator",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "circuitId",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "requestValidators",
        "outputs": [
            {
                "internalType": "contract ICircuitValidator",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_member",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_credit",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "increase",
                "type": "bool"
            }
        ],
        "name": "setCredibility",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_degree",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "_allowed_institutions",
                "type": "uint256[]"
            }
        ],
        "name": "setMembershipCriteria",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_quorum",
                "type": "uint256"
            }
        ],
        "name": "setQuorum",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            },
            {
                "internalType": "contract ICircuitValidator",
                "name": "validator",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "schema",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "slotIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "operator",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "value",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "string",
                        "name": "circuitId",
                        "type": "string"
                    }
                ],
                "internalType": "struct ICircuitValidator.CircuitQuery",
                "name": "query",
                "type": "tuple"
            }
        ],
        "name": "setZKPRequest",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "requestId",
                "type": "uint64"
            },
            {
                "internalType": "uint256[]",
                "name": "inputs",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[2]",
                "name": "a",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "b",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "c",
                "type": "uint256[2]"
            }
        ],
        "name": "submitZKPResponse",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "supportedRequests",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
