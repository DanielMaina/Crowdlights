// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract CrowdsNFT is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    bool public paused;
    uint public preMintRate = 0.13 ether;
    uint public secondpreMintRate = 0.14 ether;
    uint public publicMintRate = 0.15 ether;
    uint public secondpublicMintRate = 0.175 ether;
    uint public thirdpublicMintRate = 0.2 ether;
    uint public mintRate = 2 ether;
    uint public MAX_MINT = 5;
    uint public MAX_SUPPLY = 5000;

    constructor() ERC721("Crowds NFT", "CRWD") {}

    //change id to 00, first nft should be 0001
    function _baseURI() internal pure override returns (string memory) {
        return "https://api.crowds.app/getNFTMetadata/crowds/0001";
    }

    function _safeMint(address to) public virtual payable{
        if (totalSupply() <= 500) {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= preMintRate, "Not enough ether sent for pre sale."); 
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);
        }
        else if (totalSupply() <= 1000 && paused) {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= secondpreMintRate, "Not enough ether sent for pre sale.");
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);

        }
        else if (totalSupply() <= 2000 && paused) {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= publicMintRate, "Not enough ether sent for public sale.");
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);

        }
        else if (totalSupply() <= 3500 && paused) {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= secondpublicMintRate, "Not enough ether sent for public sale.");
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);

        }
        else if (totalSupply() <= 5000 && paused) {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= thirdpublicMintRate, "Not enough ether sent for public sale.");
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);

        }
        else {
          require(totalSupply() < MAX_SUPPLY, "Can't mint more");
          require(msg.value >= mintRate, "Not enough ether sent. Contact Owner");
          _tokenIdCounter.increment();
          uint256 tokenId = _tokenIdCounter.current();
          _safeMint(to, tokenId);
        }
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    
    function getRemainingNFTAmount() public view returns (uint256) {
        return MAX_SUPPLY - totalSupply();
    }

    // bool public canPause = true;
    
    // function setPaused(bool _pause) public {
    //     require(msg.sender == owner(), "You are not the owner");
    //     require(canPause == true);
    //     _pause();
    // }

    // function removePauseCapability(bool _unpause) public {
    //       require(msg.sender == owner, "You are not the owner");
    //       _unpause();
    //       canPause = false;
    //   }
    
    function withdraw() public onlyOwner {
        require(address(this).balance > 0, "Balance is 0");
        payable(owner()).transfer(address(this).balance);
    }
}