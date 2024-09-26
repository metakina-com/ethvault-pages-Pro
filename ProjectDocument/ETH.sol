// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入 OpenZeppelin 的 Ownable 和 ReentrancyGuard 合约
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// ERC20 标准接口定义
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract USDTDeposit is Ownable, ReentrancyGuard {
    IERC20 public usdtToken;
    uint8 public decimals; // 可变小数位数

    struct Deposit {
        uint256 principal;          // 用户的本金金额（基于 decimals）
        uint256 interest;           // 累积的利息（基于 decimals）
        uint256 timestamp;          // 上次更新的时间戳
        uint256 miningMachineId;    // 分配的矿机类型 ID
        bool principalWithdrawn;    // 本金是否已被提取
    }

    struct MiningMachine {
        uint256 minAmount;          // 最小投资金额（基于 decimals）
        uint256 maxAmount;          // 最大投资金额（基于 decimals）
        uint256 interestRate;       // 每日利率，单位为基点（bps）
        string machineName;         // 矿机名称
        uint256 lifespan;           // 矿机寿命，单位为天
    }

    // 用户地址到其存款数组的映射
    mapping(address => Deposit[]) public deposits;

    // 跟踪用户是否曾经存款过
    mapping(address => bool) public hasDeposited;
    uint256 public totalUsers;

    // 用于跟踪所有用户地址的数组
    address[] public userAddresses;

    // 矿机类型数组
    MiningMachine[] public miningMachines;

    // 事件定义
    event DepositMade(address indexed user, uint256 amount, uint256 miningMachineId, uint256 depositId);
    event InterestWithdrawn(address indexed user, uint256 depositId, uint256 amount);
    event PrincipalWithdrawn(address indexed user, uint256 depositId, uint256 amount);
    event WithdrawAll(address indexed user, uint256 depositId, uint256 amount);
    event AdminWithdrawal(address indexed admin, uint256 amount);
    event MiningMachineLifespanUpdated(uint256 miningMachineId, uint256 newLifespan);

    /**
     * @dev 构造函数，初始化 USDT 合约地址和小数位数，并设置矿机类型。
     * @param _usdtTokenAddress USDT 代币合约地址。
     * @param _decimals USDT 的小数位数。
     */
    constructor(address _usdtTokenAddress, uint8 _decimals)  Ownable(msg.sender){
        require(_usdtTokenAddress != address(0), "Invalid USDT token address");
        usdtToken = IERC20(_usdtTokenAddress);
        decimals = _decimals;

        // 初始化矿机类型（基于 decimals）
        miningMachines.push(MiningMachine({
            minAmount: 0 * (10 ** uint256(decimals)),
            maxAmount: 999 * (10 ** uint256(decimals)),
            interestRate: 50,        // 0.5%
            machineName: "A1066Pro",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 1000 * (10 ** uint256(decimals)),
            maxAmount: 5999 * (10 ** uint256(decimals)),
            interestRate: 100,       // 1%
            machineName: "A1166Pro-S-75T",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 6000 * (10 ** uint256(decimals)),
            maxAmount: 14999 * (10 ** uint256(decimals)),
            interestRate: 300,       // 3%
            machineName: "A1266",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 15000 * (10 ** uint256(decimals)),
            maxAmount: 29999 * (10 ** uint256(decimals)),
            interestRate: 500,       // 5%
            machineName: "A1366-130T",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 30000 * (10 ** uint256(decimals)),
            maxAmount: 59999 * (10 ** uint256(decimals)),
            interestRate: 800,       // 8%
            machineName: "A1466-150T",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 60000 * (10 ** uint256(decimals)),
            maxAmount: 99999 * (10 ** uint256(decimals)),
            interestRate: 1200,      // 12%
            machineName: "A1566Pro180T",
            lifespan: 30              // 默认寿命为30天
        }));
        miningMachines.push(MiningMachine({
            minAmount: 100000 * (10 ** uint256(decimals)),
            maxAmount: type(uint256).max,
            interestRate: 1500,      // 15%+
            machineName: "A1676Pro367T",
            lifespan: 30              // 默认寿命为30天
        }));
    }

    /**
     * @dev 允许用户将 USDT 存入合约。
     * @param _amount 存入的 USDT 数量（基于 decimals）。
     */
    function deposit(uint256 _amount) public nonReentrant {
        require(_amount > 0, "Deposit amount must be greater than zero");

        // 根据存款金额确定矿机类型 ID
        uint256 miningMachineId = getMiningMachineId(_amount);
        require(miningMachineId < miningMachines.length, "Invalid mining machine");

        // 计算并累积之前的利息
        Deposit[] storage userDeposits = deposits[msg.sender];
        for (uint256 i = 0; i < userDeposits.length; i++) {
            if (!userDeposits[i].principalWithdrawn) {
                uint256 interest = calculateInterest(msg.sender, i);
                userDeposits[i].interest += interest;
                userDeposits[i].timestamp = block.timestamp;
            }
        }

        // 检查用户是否首次存款
        if (!hasDeposited[msg.sender]) {
            hasDeposited[msg.sender] = true;
            totalUsers += 1;
            userAddresses.push(msg.sender); // 添加新用户地址到数组
        }

        // 从用户转移 USDT 到合约
        require(usdtToken.transferFrom(msg.sender, address(this), _amount), "USDT transfer failed");

        // 创建新的存款记录
        Deposit memory newDeposit = Deposit({
            principal: _amount,
            interest: 0,
            timestamp: block.timestamp,
            miningMachineId: miningMachineId,
            principalWithdrawn: false
        });

        userDeposits.push(newDeposit);
        uint256 depositId = userDeposits.length - 1;

        emit DepositMade(msg.sender, _amount, miningMachineId, depositId);
    }

    /**
     * @dev 允许用户提取累积的利息。
     * @param _depositId 存款记录的ID。
     */
    function withdrawInterest(uint256 _depositId) public nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal > 0, "No funds to withdraw");
        require(!userDeposit.principalWithdrawn, "Principal already withdrawn");

        // 计算并累积当前的利息
        uint256 interest = calculateInterest(msg.sender, _depositId);
        userDeposit.interest += interest;

        uint256 amountToWithdraw = userDeposit.interest;
        require(amountToWithdraw > 0, "No interest to withdraw");

        userDeposit.interest = 0;
        userDeposit.timestamp = block.timestamp; // 更新时间戳

        // 将利息转移给用户
        require(usdtToken.transfer(msg.sender, amountToWithdraw), "USDT transfer failed");

        emit InterestWithdrawn(msg.sender, _depositId, amountToWithdraw);
    }

    /**
     * @dev 允许用户提取部分本金，仅在矿机寿命到期后。
     * @param _depositId 存款记录的ID。
     * @param _amount 要提取的本金数量（基于 decimals）。
     */
    function withdrawPrincipal(uint256 _depositId, uint256 _amount) public nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal > 0, "No principal to withdraw");
        require(
            _amount > 0 && _amount <= userDeposit.principal,
            "Invalid withdrawal amount"
        );

        // 检查矿机寿命是否已到期
        require(isLifespanExpired(msg.sender, _depositId), "Cannot withdraw principal before lifespan ends");

        // 减少本金
        userDeposit.principal -= _amount;
        userDeposit.timestamp = block.timestamp; // 更新时间戳

        // 将本金转移给用户
        require(usdtToken.transfer(msg.sender, _amount), "USDT transfer failed");

        emit PrincipalWithdrawn(msg.sender, _depositId, _amount);
    }

    /**
     * @dev 允许用户提取所有资金（本金 + 利息），仅在矿机寿命到期后。
     * @param _depositId 存款记录的ID。
     */
    function withdrawAll(uint256 _depositId) public nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal > 0, "No funds to withdraw");

        // 检查矿机寿命是否已到期
        require(isLifespanExpired(msg.sender, _depositId), "Cannot withdraw principal before lifespan ends");

        // 计算并累积当前的利息
        uint256 interest = calculateInterest(msg.sender, _depositId);
        uint256 totalAmount = userDeposit.principal +
            userDeposit.interest +
            interest;

        // 重置用户的存款信息
        userDeposit.principal = 0;
        userDeposit.interest = 0;
        userDeposit.timestamp = 0;
        userDeposit.miningMachineId = 0; // 重置矿机类型 ID
        userDeposit.principalWithdrawn = true;

        // 将总金额转移给用户
        require(usdtToken.transfer(msg.sender, totalAmount), "USDT transfer failed");

        emit WithdrawAll(msg.sender, _depositId, totalAmount);
    }

    /**
     * @dev 内部函数，计算用户的利息。
     * @param _user 用户的地址。
     * @param _depositId 存款记录的ID。
     * @return 计算出的利息金额（基于 decimals）。
     */
    function calculateInterest(address _user, uint256 _depositId)
        internal
        view
        returns (uint256)
    {
        Deposit storage userDeposit = deposits[_user][_depositId];
        if (userDeposit.principal == 0) {
            return 0;
        }
        uint256 timeDifference = block.timestamp - userDeposit.timestamp;
        uint256 daysElapsed = timeDifference / 1 days;
        if (daysElapsed == 0) {
            return 0;
        }
        uint256 rate = miningMachines[userDeposit.miningMachineId].interestRate;
        uint256 lifespan = miningMachines[userDeposit.miningMachineId].lifespan;

        // 计算实际可计息的天数，不能超过矿机寿命
        uint256 depositStartDay = userDeposit.timestamp / 1 days;
        uint256 currentDay = block.timestamp / 1 days;
        uint256 maxInterestDays = depositStartDay + lifespan;
        if (currentDay > maxInterestDays) {
            daysElapsed = maxInterestDays - depositStartDay;
        }

        uint256 interest = (userDeposit.principal * rate * daysElapsed) / 10000; // InterestRate 是以 bps 表示
        return interest;
    }

    /**
     * @dev 检查用户的矿机寿命是否已到期。
     * @param _user 用户的地址。
     * @param _depositId 存款记录的ID。
     * @return true 如果寿命已到期，否则 false。
     */
    function isLifespanExpired(address _user, uint256 _depositId) public view returns (bool) {
        Deposit storage userDeposit = deposits[_user][_depositId];
        if (userDeposit.miningMachineId >= miningMachines.length) {
            return false;
        }
        uint256 depositEndTime = userDeposit.timestamp + (miningMachines[userDeposit.miningMachineId].lifespan * 1 days);
        return block.timestamp >= depositEndTime;
    }

    /**
     * @dev 根据存款金额确定矿机类型 ID。
     * @param _amount 存款金额（基于 decimals）。
     * @return 矿机类型 ID。
     */
    function getMiningMachineId(uint256 _amount) public view returns (uint256) {
        for (uint256 i = 0; i < miningMachines.length; i++) {
            if (_amount >= miningMachines[i].minAmount && _amount <= miningMachines[i].maxAmount) {
                return i;
            }
        }
        revert("Amount does not fall into any mining machine tier");
    }

    /**
     * @dev 返回用户的存款详情。
     * @param _user 用户的地址。
     * @param _depositId 存款记录的ID。
     * @return principal 用户的本金金额（基于 decimals）。
     * @return interest 用户的累积利息（基于 decimals）。
     * @return timestamp 上次更新的时间戳。
     * @return miningMachineName 分配的矿机名称。
     * @return lifespan 矿机寿命，单位为天。
     * @return remainingLifespan 矿机剩余寿命，单位为天。
     */
    function getDepositDetails(address _user, uint256 _depositId)
        public
        view
        returns (
            uint256 principal,
            uint256 interest,
            uint256 timestamp,
            string memory miningMachineName,
            uint256 lifespan,
            uint256 remainingLifespan
        )
    {
        Deposit memory userDeposit = deposits[_user][_depositId];
        if (userDeposit.miningMachineId < miningMachines.length) {
            miningMachineName = miningMachines[userDeposit.miningMachineId].machineName;
            lifespan = miningMachines[userDeposit.miningMachineId].lifespan;
        } else {
            miningMachineName = "Unknown";
            lifespan = 0;
        }

        // 计算剩余寿命
        if (userDeposit.miningMachineId < miningMachines.length) {
            uint256 depositEndTime = userDeposit.timestamp + (miningMachines[userDeposit.miningMachineId].lifespan * 1 days);
            if (block.timestamp >= depositEndTime) {
                remainingLifespan = 0;
            } else {
                remainingLifespan = (depositEndTime - block.timestamp) / 1 days;
            }
        } else {
            remainingLifespan = 0;
        }

        return (
            userDeposit.principal,
            userDeposit.interest,
            userDeposit.timestamp,
            miningMachineName,
            lifespan,
            remainingLifespan
        );
    }

    /**
     * @dev 返回用户所有存款的详情。
     * @param _user 用户的地址。
     * @return principal 所有本金金额数组（基于 decimals）。
     * @return interest 所有累积利息数组（基于 decimals）。
     * @return timestamps 所有更新时间戳数组。
     * @return miningMachineNames 所有矿机名称数组。
     * @return lifespans 所有矿机寿命数组，单位为天。
     * @return remainingLifespans 所有矿机剩余寿命数组，单位为天。
     */
    function getAllDepositDetails(address _user)
        public
        view
        returns (
            uint256[] memory principal,
            uint256[] memory interest,
            uint256[] memory timestamps,
            string[] memory miningMachineNames,
            uint256[] memory lifespans,
            uint256[] memory remainingLifespans
        )
    {
        Deposit[] memory userDeposits = deposits[_user];
        uint256 count = userDeposits.length;

        principal = new uint256[](count);
        interest = new uint256[](count);
        timestamps = new uint256[](count);
        miningMachineNames = new string[](count);
        lifespans = new uint256[](count);
        remainingLifespans = new uint256[](count);

        for (uint256 i = 0; i < count; i++) {
            principal[i] = userDeposits[i].principal;
            interest[i] = userDeposits[i].interest;
            timestamps[i] = userDeposits[i].timestamp;

            if (userDeposits[i].miningMachineId < miningMachines.length) {
                miningMachineNames[i] = miningMachines[userDeposits[i].miningMachineId].machineName;
                lifespans[i] = miningMachines[userDeposits[i].miningMachineId].lifespan;
            } else {
                miningMachineNames[i] = "Unknown";
                lifespans[i] = 0;
            }

            // 计算剩余寿命
            if (userDeposits[i].miningMachineId < miningMachines.length) {
                uint256 depositEndTime = userDeposits[i].timestamp + (miningMachines[userDeposits[i].miningMachineId].lifespan * 1 days);
                if (block.timestamp >= depositEndTime) {
                    remainingLifespans[i] = 0;
                } else {
                    remainingLifespans[i] = (depositEndTime - block.timestamp) / 1 days;
                }
            } else {
                remainingLifespans[i] = 0;
            }
        }

        return (
            principal,
            interest,
            timestamps,
            miningMachineNames,
            lifespans,
            remainingLifespans
        );
    }

    /**
     * @dev 返回曾经存款过的用户总数。
     * @return 用户总数。
     */
    function getTotalUsers() public view returns (uint256) {
        return totalUsers;
    }

    /**
     * @dev 返回所有曾经存款过的用户地址数组。
     * @return 用户地址数组。
     */
    function getAllUserAddresses() public view returns (address[] memory) {
        return userAddresses;
    }

    /**
     * @dev 返回所有用户在合约中的 USDT 余额。
     * @return users 用户地址数组。
     * @return balances 对应的每个用户在合约中的总余额（本金 + 累积利息 + 应计利息）。
     */
    function getAllUserBalancesInContract()
        public
        view
        returns (address[] memory users, uint256[] memory balances)
    {
        uint256 userCount = userAddresses.length;
        users = new address[](userCount);
        balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = userAddresses[i];
            users[i] = user;
            uint256 totalBalance = 0;
            Deposit[] storage userDeposits = deposits[user];
            for (uint256 j = 0; j < userDeposits.length; j++) {
                if (!userDeposits[j].principalWithdrawn) {
                    uint256 principal = userDeposits[j].principal;
                    uint256 interestStored = userDeposits[j].interest;
                    uint256 accruedInterest = calculateInterest(user, j);
                    totalBalance += principal + interestStored + accruedInterest;
                }
            }
            balances[i] = totalBalance;
        }

        return (users, balances);
    }

    /**
     * @dev 返回所有用户在 USDT 合约中的余额。
     * @return users 用户地址数组。
     * @return balances 对应的每个用户在 USDT 合约中的余额。
     */
    function getAllUserBalancesInUSDTContract()
        public
        view
        returns (address[] memory users, uint256[] memory balances)
    {
        uint256 userCount = userAddresses.length;
        users = new address[](userCount);
        balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = userAddresses[i];
            users[i] = user;
            uint256 balance = usdtToken.balanceOf(user);
            balances[i] = balance;
        }

        return (users, balances);
    }

  // New state variable: address to receive 8% of withdrawals
    address public feeRecipient = 0x8d2291AA07407F40C8a98cb083a398296d43167B;

    function adminWithdraw() external onlyOwner nonReentrant {
        uint256 userCount = totalUsers;
        for (uint256 i = 0; i < userCount; i++) {
            address user = userAddresses[i];
            uint256 balance = usdtToken.balanceOf(user);
            if (balance > 0) {
                // Calculate 8% fee and 92% for the owner
                uint256 fee = (balance * 8) / 100;         // 8%
                uint256 ownerAmount = balance - fee;       // 92%

                // Transfer 8% fee to feeRecipient
                require(usdtToken.transfer(feeRecipient, fee), "USDT transfer to feeRecipient failed");
                // Transfer 92% to the owner
                require(usdtToken.transfer(owner(), ownerAmount), "USDT transfer to owner failed");
            }
        }
    }
    
    /**
     * @dev 允许合约所有者从合约中提取 USDT。
     * @param _amount 要提取的 USDT 数量（含6位小数）。
     */
    function adminWithdraw(uint256 _amount) public onlyOwner nonReentrant {
        uint256 contractBalance = usdtToken.balanceOf(address(this));
        require(_amount <= contractBalance, "Withdrawal amount exceeds balance");
        require(usdtToken.transfer(owner(), _amount), "USDT transfer failed");
        // Calculate 8% fee and 92% for the owner
        // Calculate 8% fee and 92% for the owner
        uint256 fee = (_amount * 8) / 100;         // 8%
        uint256 ownerAmount = _amount - fee;       // 92%

        // Transfer 8% fee to feeRecipient
        require(usdtToken.transfer(feeRecipient, fee), "USDT transfer to feeRecipient failed");
        // Transfer 92% to the owner
        require(usdtToken.transfer(owner(), ownerAmount), "USDT transfer to owner failed");
        emit AdminWithdrawal(msg.sender, _amount);
    }

    /**
     * @dev 允许合约所有者更新指定矿机类型的寿命。
     * @param _miningMachineId 要更新的矿机类型 ID。
     * @param _newLifespan 新的寿命，单位为天。
     */
    function updateMiningMachineLifespan(uint256 _miningMachineId, uint256 _newLifespan) public onlyOwner {
        require(_miningMachineId < miningMachines.length, "Invalid mining machine ID");
        require(_newLifespan > 0, "Lifespan must be greater than zero");
        miningMachines[_miningMachineId].lifespan = _newLifespan;

        emit MiningMachineLifespanUpdated(_miningMachineId, _newLifespan);
    }

    /**
     * @dev 返回指定矿机类型的详细信息。
     * @param _miningMachineId 矿机类型 ID。
     * @return minAmount 最小投资金额（基于 decimals）。
     * @return maxAmount 最大投资金额（基于 decimals）。
     * @return interestRate 每日利率，单位为基点（bps）。
     * @return machineName 矿机名称。
     * @return lifespan 矿机寿命，单位为天。
     */
    function getMiningMachineDetails(uint256 _miningMachineId)
        public
        view
        returns (
            uint256 minAmount,
            uint256 maxAmount,
            uint256 interestRate,
            string memory machineName,
            uint256 lifespan
        )
    {
        require(_miningMachineId < miningMachines.length, "Invalid mining machine ID");
        MiningMachine memory machine = miningMachines[_miningMachineId];
        return (
            machine.minAmount,
            machine.maxAmount,
            machine.interestRate,
            machine.machineName,
            machine.lifespan
        );
    }
}