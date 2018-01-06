"use strict"

/* Constants */
let CONTEST_ADDRESS = "0x79fc85413add6b3250f67281c35281f728cfe661"
let TOKEN_ADDRESS = "0xccd7d4778c7c0c5be57b88134f1c0bdbe91a6064"

let CONTEST_ABI =
JSON.parse('[{"constant": true,"inputs": [],"name": "endBlock","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "hasVoted","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_subAddress","type": "address"},{"name": "_index","type": "uint256"}],"name": "approveSubmission","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "getUnapprovedSubmissionAddresses","outputs": [{"name": "submissions","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_name","type": "bytes32"},{"name": "_desc","type": "bytes"},{"name": "_url","type": "bytes32"}],"name": "editSubmission","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "approvedSubmissions","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "hasSubmitted","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_amount","type": "uint256"}],"name": "addBounty","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_unfortunateSubmission","type": "address"}],"name": "removeVote","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "winningAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_amount","type": "uint256"}],"name": "releaseStake","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "startBlock","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "votedOn","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "voteCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_favoriteSubmission","type": "address"}],"name": "vote","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_name","type": "bytes32"},{"name": "_desc","type": "bytes"},{"name": "_url","type": "bytes32"}],"name": "registerSubmission","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "submissions","outputs": [{"name": "submitter","type": "address"},{"name": "isApproved","type": "bool"},{"name": "name","type": "bytes32"},{"name": "desc","type": "bytes"},{"name": "url","type": "bytes32"},{"name": "id","type": "uint256"},{"name": "votes","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "unapprovedSubmissions","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "bounty","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_amount","type": "uint256"}],"name": "stake","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "id","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "highestVote","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getApprovedSubmissionAddresses","outputs": [{"name": "submissions","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "checkContestStatus","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "completeContest","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "stakedAmount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "token","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [{"name": "_tokenAddress","type": "address"},{"name": "_startBlock","type": "uint256"},{"name": "_endBlock","type": "uint256"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_from","type": "address"},{"indexed": false,"name": "_value","type": "uint256"}],"name": "Staked","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_from","type": "address"},{"indexed": false,"name": "_value","type": "uint256"}],"name": "StakeReleased","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"}],"name": "SubmissionRegistered","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"}],"name": "SubmissionApproved","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "favoriteSubmission","type": "address"},{"indexed": true,"name": "who","type": "address"},{"indexed": false,"name": "amount","type": "uint256"}],"name": "Voted","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "unfortunateSubmission","type": "address"},{"indexed": true,"name": "who","type": "address"},{"indexed": false,"name": "amount","type": "uint256"}],"name": "RemovedVote","type": "event"}]')

let TOKEN_ABI =
JSON.parse('[{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_spender","type": "address"},{"name": "_value","type": "uint256"}],"name": "approve","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_owner","type": "address"},{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],"name": "transferFrom","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "version","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],"name": "transfer","outputs": [{"name": "success","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"},{"name": "_spender","type": "address"}],"name": "allowance","outputs": [{"name": "remaining","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"payable": false,"stateMutability": "nonpayable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_from","type": "address"},{"indexed": true,"name": "_to","type": "address"},{"indexed": false,"name": "_value","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_owner","type": "address"},{"indexed": true,"name": "_spender","type": "address"},{"indexed": false,"name": "_value","type": "uint256"}],"name": "Approval","type": "event"}]')


/* Web3 Setup */
var Web3 = require('web3')

/* Create web3 for Metamask interaction */
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

/* Contract and Events */
const DevContestContract = web3.eth.contract(CONTEST_ABI)
const MPTokenContract = web3.eth.contract(TOKEN_ABI)
const DevContest = DevContestContract.at(CONTEST_ADDRESS)
const MPToken = MPTokenContract.at(TOKEN_ADDRESS)

/* Get user on page */
const userAccount = web3.eth.accounts[0]

/* Log to console current block number */
web3.eth.getBlockNumber(function(error, result){ console.log("CURRENT BLOCK NUMBER:" + result) })
