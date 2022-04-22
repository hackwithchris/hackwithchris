# Learn Blockchain with Chris

Let's learn the basics of how to create an NFT project. 

1. Contracts
2. Frontend
3. Server
4. Art - We're looking to partner with an artist!! 

Masked NFT Minting is a desirable trait for NFT projects. We want to also take the time to build out an elegant solution for this by building a metadata server that will subscribe to minting events and only after a token has been minted will the metadata and the image to be uploaded to IPFS. 

Here is a great [article](https://medium.com/coinmonks/methods-for-nft-masked-minting-ddd05dceed32) I found that talks about some of these methods, what we'll be implementing is a variation of method number 2.

---

Most NFT metadata and images are not stored on the blockchain. They are stored instead of IPFS. Please familiarize yourself with IPFS by taking a look at their [docs](https://medium.com/coinmonks/methods-for-nft-masked-minting-ddd05dceed32).

# Resources

## Moralis

Website: [https://moralis.io/](https://moralis.io/)

I've been using Moralis's Speedy Nodes since they first came out. We can utilize their speedy node websockets for this project. Please create a free account.

## Pinata

Website: [https://www.pinata.cloud/](https://www.pinata.cloud/)

Pinata is a pinning service that allows users to host files on the IPFS network easily. Please create a free account.

## Tenderly 

Website: [https://tenderly.co/](https://tenderly.co/)

I use tenderly for debugging transactions that failed. I use log in with github. Tenderly has been a life saver for me many times.
