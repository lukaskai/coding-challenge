
# React Native - Coding Challenge

We are looking for people who can build awesome products. This challenge will help us to evaluate your skills!

## Instructions
#### 1. Build your app
You have several days to complete the challenge. Spend no more than 8 hours for this assignment.

*Implementation and design will be evaluated.*
#### 2. Submit your challenge
Follow these instructions to submit your challenge.
* Setup your Development Environment ([React Native - Getting Started guide](https://reactnative.dev/docs/environment-setup))
* Create a private Github repository
* Commit the Base Code
* Write your Code on a separate branch
* Commit your Changes
* Issue a Pull Request
* Invite us as a Collaborator to Your Repository


#### 3. Show us your skills

## Challenge
Tomas wants to estimate his potential earnings in Compound protocol. He needs some easy way to calculate the amount he could earn over time based on different distributions to different assets on Compound.

## Requirements
Your app should be able to complete the following tasks: 
* Show current supply interest rate for DAI, USDC, and USDT assets in the Compound protocol. API to be used: https://compound.finance/docs/api#CTokenService (HINT: Endpoint https://api.compound.finance/api/v2/ctoken and supply_rate value for each asset could be used)
* Allow user to enter the amount of USD investment.
* Allow user to allocate the funds in percentages between 3 assets using sliders. Details: 
  * Total percentage in sliders (sum of 3 sliders values) should always be 100%. 
  * User should be able to change allocations by sliding a single asset slider. E.g. sliding DAI from 30% to 40% should end up reducing the allocations to other asset(s) by 10%.
  * By default user's investment should be 100% in the first asset (DAI).
* Show user's allocation for each asset.
* Show blended interest rate and projected total earnings after one year.

Important! There is no need to take exchange rates into consideration, assume that 1 USD = 1 DAI = 1 USDC = 1 USDT.

## Grading
The grading of the app  will be based off of three criteria:
* **10%** - UI and UX
* **60%** - Overall Code Design and Structure
* **30%** - Data Management
