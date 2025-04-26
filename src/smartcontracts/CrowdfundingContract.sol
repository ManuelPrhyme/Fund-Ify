// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title Decentralized Crowdfunding Platform Smart Contract
 * @notice This contract allows creators to launch crowdfunding campaigns and 
 * contributors to fund them. Funds are only released to the creator if the campaign 
 * reaches its funding goal before the deadline.
 * @dev This is a stand-alone contract example, NOT integrated with the frontend
 */
contract CrowdfundingPlatform {
    // Struct to represent a campaign
    struct Campaign {
        address creator;
        string title;
        string description;
        uint256 goal;
        uint256 deadline;
        uint256 amountRaised;
        bool claimed;
        mapping(address => uint256) contributions;
        address[] contributors;
    }
    
    // Campaign ID counter
    uint256 private campaignIdCounter;
    
    // Mapping from campaign ID to Campaign struct
    mapping(uint256 => Campaign) public campaigns;
    
    // Platform fee percentage (3%)
    uint256 public constant PLATFORM_FEE = 3;
    
    // Address of the platform owner
    address public owner;
    
    // Events
    event CampaignCreated(uint256 campaignId, address creator, string title, uint256 goal, uint256 deadline);
    event ContributionMade(uint256 campaignId, address contributor, uint256 amount);
    event FundsClaimed(uint256 campaignId, address creator, uint256 amount);
    event RefundClaimed(uint256 campaignId, address contributor, uint256 amount);
    
    // Constructor
    constructor() {
        owner = msg.sender;
        campaignIdCounter = 1;
    }
    
    /**
     * @notice Creates a new crowdfunding campaign
     * @param _title Title of the campaign
     * @param _description Description of the campaign
     * @param _goal Funding goal in wei
     * @param _durationInDays Duration of the campaign in days
     * @return campaignId The ID of the newly created campaign
     */
    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _goal,
        uint256 _durationInDays
    ) external returns (uint256) {
        require(_goal > 0, "Goal must be greater than 0");
        require(_durationInDays > 0, "Duration must be greater than 0");
        
        uint256 campaignId = campaignIdCounter;
        campaignIdCounter++;
        
        Campaign storage newCampaign = campaigns[campaignId];
        newCampaign.creator = msg.sender;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.goal = _goal;
        newCampaign.deadline = block.timestamp + (_durationInDays * 1 days);
        newCampaign.amountRaised = 0;
        newCampaign.claimed = false;
        
        emit CampaignCreated(campaignId, msg.sender, _title, _goal, newCampaign.deadline);
        
        return campaignId;
    }
    
    /**
     * @notice Allows users to contribute to a campaign
     * @param _campaignId ID of the campaign to contribute to
     */
    function contribute(uint256 _campaignId) external payable {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(campaign.creator != address(0), "Campaign does not exist");
        require(block.timestamp < campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than 0");
        
        // If this is the first contribution from this address, add to contributors array
        if (campaign.contributions[msg.sender] == 0) {
            campaign.contributors.push(msg.sender);
        }
        
        // Add the contribution amount
        campaign.contributions[msg.sender] += msg.value;
        campaign.amountRaised += msg.value;
        
        emit ContributionMade(_campaignId, msg.sender, msg.value);
    }
    
    /**
     * @notice Allows campaign creator to claim funds if goal is reached
     * @param _campaignId ID of the campaign
     */
    function claimFunds(uint256 _campaignId) external {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(msg.sender == campaign.creator, "Only the creator can claim funds");
        require(block.timestamp >= campaign.deadline, "Campaign is still active");
        require(campaign.amountRaised >= campaign.goal, "Funding goal not reached");
        require(!campaign.claimed, "Funds already claimed");
        
        campaign.claimed = true;
        
        // Calculate platform fee
        uint256 fee = (campaign.amountRaised * PLATFORM_FEE) / 100;
        uint256 creatorAmount = campaign.amountRaised - fee;
        
        // Transfer funds to platform owner and creator
        (bool feeSuccess, ) = payable(owner).call{value: fee}("");
        require(feeSuccess, "Fee transfer failed");
        
        (bool creatorSuccess, ) = payable(campaign.creator).call{value: creatorAmount}("");
        require(creatorSuccess, "Creator transfer failed");
        
        emit FundsClaimed(_campaignId, campaign.creator, creatorAmount);
    }
    
    /**
     * @notice Allows contributors to claim refunds if campaign fails to reach its goal
     * @param _campaignId ID of the campaign
     */
    function claimRefund(uint256 _campaignId) external {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(block.timestamp >= campaign.deadline, "Campaign is still active");
        require(campaign.amountRaised < campaign.goal, "Funding goal was reached");
        
        uint256 contribution = campaign.contributions[msg.sender];
        require(contribution > 0, "No contribution found");
        
        // Reset contribution to prevent multiple refunds
        campaign.contributions[msg.sender] = 0;
        
        // Transfer refund to contributor
        (bool success, ) = payable(msg.sender).call{value: contribution}("");
        require(success, "Refund transfer failed");
        
        emit RefundClaimed(_campaignId, msg.sender, contribution);
    }
    
    /**
     * @notice Get details about a campaign
     * @param _campaignId ID of the campaign
     * @return creator Address of the campaign creator
     * @return title Title of the campaign
     * @return description Description of the campaign
     * @return goal Funding goal in wei
     * @return deadline Deadline timestamp
     * @return amountRaised Amount raised so far
     * @return claimed Whether funds have been claimed
     * @return isActive Whether the campaign is still active
     * @return contributorsCount Number of unique contributors
     */
    function getCampaignDetails(uint256 _campaignId) external view returns (
        address creator,
        string memory title,
        string memory description,
        uint256 goal,
        uint256 deadline,
        uint256 amountRaised,
        bool claimed,
        bool isActive,
        uint256 contributorsCount
    ) {
        Campaign storage campaign = campaigns[_campaignId];
        
        return (
            campaign.creator,
            campaign.title,
            campaign.description,
            campaign.goal,
            campaign.deadline,
            campaign.amountRaised,
            campaign.claimed,
            block.timestamp < campaign.deadline,
            campaign.contributors.length
        );
    }
    
    /**
     * @notice Get the contribution amount for a specific contributor
     * @param _campaignId ID of the campaign
     * @param _contributor Address of the contributor
     * @return Contribution amount in wei
     */
    function getContribution(uint256 _campaignId, address _contributor) external view returns (uint256) {
        return campaigns[_campaignId].contributions[_contributor];
    }
}