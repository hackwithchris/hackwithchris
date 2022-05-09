# CHANGELOG
Learn Blockchain With Chris Series Sessions

## 1.0.0 (4.16.2022)

### Attendees
- cchen408
- cap
- hdozen

### Accomplishments

* Git Org Created: https://github.com/hackwithchris/
* Documentation Started: https://hackwithchris.github.io/
* Server PR: https://github.com/hackwithchris/server/pull/1
* Frontend PR: https://github.com/hackwithchris/frontend/pull/2

---

# 2.0.0 (4.23.2022)

### Attendees
- cchen408
- cap
- hdozen

### Accomplishments

- Documentation Updated
- Frontend Directory Fixes
- Contracts https://github.com/hackwithchris/contracts
    - Setup Hardhat TypeScript Advanced Project
    - Setup Alchemy Project
    - Compiled, Deployed, Tested our first smart contract!
    
---

# 3.0.0 (5.07.2022)

### Attendees
- cchen408
- cap
- hdozen

### Accomplishments

- Openzeppelin Overview
  - Went over EIP Proposals and why we need a standard  
  - Went over ERC-20 by openzeppelin
  - Went over ERC-721 by openzeppelin and why it was inefficient for gas
  - Went through utility libraries and how to use them in your contracts
- ERC-721A by Azuki
  - Went over their documentation
  - Went through their ERC-721A implementation 
- Implement our first ERC-721A contract and deployed it
  - Implemented free simple minting
  - Implement minting with a fee
    - In order to do this we had to add a withdraw function that only the owner can call 
    - Added Ownable functionality to do previous step
    - Wrote unit tests for each of our new functions
      - How to test success cases
      - How to test reverts (failure cases)
      - How to check the amount of gas used
