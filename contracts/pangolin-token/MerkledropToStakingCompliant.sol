// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IPangolinStakingPositions is IERC721 {
    function mint(uint256 amount) external returns (uint256 positionId);
}

contract MerkledropToStakingCompliant is Ownable, Pausable {
    mapping(address => uint96) public claimedAmounts;
    IERC20 public immutable PNG;
    IPangolinStakingPositions public immutable SAR;
    bytes32 public merkleRoot;
    bytes32 public complianceHash = keccak256("By signing this transaction, I hereby acknowledge that I am not a US resident or citizen. (Citizens or residents of the United States of America are not allowed to the PSB token airdrop due to applicable law.)");

    event Claimed(address indexed from, address indexed to, uint96 indexed amount);
    event MerkleRootSet(bytes32 indexed newMerkleRoot);

    constructor(address airdropToken, address stakingPositions, address initialOwner) {
        require(airdropToken.code.length != 0, "invalid token address");
        require(stakingPositions.code.length != 0, "invalid staking address");
        require(initialOwner != address(0), "invalid initial owner");
        _transferOwnership(initialOwner);
        IERC20(airdropToken).approve(stakingPositions, type(uint256).max);
        PNG = IERC20(airdropToken);
        SAR = IPangolinStakingPositions(stakingPositions);
        _pause();
    }

    function claim(
        uint96 amount,
        bytes32[] calldata merkleProof,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        claimTo(msg.sender, amount, merkleProof, v, r, s);
    }

    function claimTo(
        address to,
        uint96 amount,
        bytes32[] calldata merkleProof,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public whenNotPaused {
        address signer = ECDSA.recover(complianceHash, v, r, s);
        require(signer == msg.sender, "invalid compliance signature");
        uint96 previouslyClaimed = claimedAmounts[msg.sender];
        require(previouslyClaimed < amount, "nothing to claim");
        bytes32 node = bytes32(abi.encodePacked(msg.sender, amount));
        require(MerkleProof.verify(merkleProof, merkleRoot, node), "invalid proof");
        claimedAmounts[msg.sender] = amount;
        unchecked {
            amount -= previouslyClaimed;
        }
        uint256 positionId = SAR.mint(amount);
        SAR.safeTransferFrom(address(this), to, positionId);
        emit Claimed(msg.sender, to, amount);
    }

    function setComplianceMessage(string calldata newComplianceMessage) external onlyOwner {
        complianceHash = keccak256(bytes(newComplianceMessage));
    }

    function setMerkleRoot(bytes32 newMerkleRoot) external whenPaused onlyOwner {
        merkleRoot = newMerkleRoot;
        emit MerkleRootSet(newMerkleRoot);
    }

    function recover(IERC20 token, uint256 amount) external whenPaused onlyOwner {
        require(token.transfer(msg.sender, amount), "transfer failed");
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        require(merkleRoot != 0x00, "merkle root not set");
        _unpause();
    }
}
