<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegant Age Calculator</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #4361ee;
            --primary-light: #5e7bf1;
            --secondary: #3a0ca3;
            --light: #f8f9fa;
            --light-gray: #e9ecef;
            --medium-gray: #ced4da;
            --dark: #212529;
            --white: #ffffff;
            --danger: #f72585;
            --border-radius: 16px;
            --border-radius-sm: 8px;
            --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: var(--dark);
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 800px;
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            margin: 20px;
            animation: fadeIn 0.6s ease-out;
        }

        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: var(--white);
            padding: 28px 25px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: "";
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(30deg);
        }

        .header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header p {
            opacity: 0.9;
            font-size: 1.05rem;
            position: relative;
            z-index: 1;
            max-width: 80%;
            margin: 0 auto;
        }

        .today-date {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.25);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            backdrop-filter: blur(8px);
            z-index: 1;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .calculator {
            padding: 30px;
        }

        .input-section {
            background: var(--light);
            padding: 25px;
            border-radius: var(--border-radius);
            margin-bottom: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0,0,0,0.03);
        }

        .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 22px;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .section-title i {
            font-size: 1.2rem;
        }

        .input-group {
            margin-bottom: 25px;
        }

        .input-group label {
            display: block;
            margin-bottom: 12px;
            font-weight: 500;
            color: var(--dark);
            font-size: 0.95rem;
        }

        .input-row {
            display: flex;
            gap: 15px;
        }

        .input-field {
            flex: 1;
            position: relative;
        }

        .input-field input {
            width: 100%;
            padding: 15px;
            border: 1px solid var(--medium-gray);
            border-radius: var(--border-radius-sm);
            font-size: 1rem;
            transition: var(--transition);
            background: var(--white);
            font-weight: 500;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
        }

        .input-field input:focus {
            border-color: var(--primary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2), inset 0 1px 3px rgba(0,0,0,0.05);
        }

        .input-field .icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--primary);
            font-size: 1rem;
        }

        button {
            width: 100%;
            padding: 17px;
            background: linear-gradient(to right, var(--primary), var(--primary-light));
            color: var(--white);
            border: none;
            border-radius: var(--border-radius-sm);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
        }

        button:hover {
            background: linear-gradient(to right, var(--secondary), var(--primary));
            transform: translateY(-3px);
            box-shadow: 0 7px 20px rgba(67, 97, 238, 0.4);
        }

        button:active {
            transform: translateY(0);
        }

        .result-section {
            display: none;
        }

        .result-section.active {
            display: block;
            animation: fadeInUp 0.6s ease-out;
        }

        .result-card {
            background: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 28px;
            margin-bottom: 25px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            transition: var(--transition);
        }

        .result-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .result-card h2 {
            color: var(--primary);
            margin-bottom: 22px;
            font-size: 1.45rem;
            border-bottom: 1px solid var(--light-gray);
            padding-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .result-card h2 i {
            font-size: 1.3rem;
        }

        .date-display {
            background: var(--light);
            padding: 14px;
            border-radius: var(--border-radius-sm);
            margin-bottom: 22px;
            font-weight: 600;
            color: var(--dark);
            text-align: center;
            font-size: 1.1rem;
            border-left: 4px solid var(--primary);
            box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        }

        .age-display {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 22px;
        }

        .age-box {
            background: linear-gradient(135deg, var(--light) 0%, var(--light-gray) 100%);
            padding: 22px 15px;
            border-radius: var(--border-radius-sm);
            text-align: center;
            transition: var(--transition);
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 10px rgba(0,0,0,0.03);
        }

        .age-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .age-box .value {
            font-size: 2.4rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 6px;
            line-height: 1;
            text-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .age-box .label {
            font-size: 0.9rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .additional-info {
            font-size: 1rem;
            color: #555;
            margin-top: 18px;
            text-align: center;
            padding: 14px;
            border-radius: var(--border-radius-sm);
            background: rgba(67, 97, 238, 0.06);
            font-weight: 500;
            box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        }

        .additional-info strong {
            color: var(--primary);
            font-weight: 600;
        }

        .error {
            color: var(--danger);
            font-size: 0.95rem;
            margin-top: 10px;
            display: none;
            padding: 12px;
            background: rgba(247, 37, 133, 0.06);
            border-radius: var(--border-radius-sm);
            border-left: 4px solid var(--danger);
            box-shadow: 0 2px 5px rgba(0,0,0,0.03);
            animation: shake 0.5s;
        }

        .error.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }

        @media (max-width: 768px) {
            .container {
                margin: 15px;
            }
            
            .calculator {
                padding: 25px;
            }
            
            .input-section {
                padding: 22px;
            }
            
            .header h1 {
                font-size: 2rem;
                padding-right: 100px;
            }
            
            .today-date {
                top: 15px;
                right: 15px;
            }
            
            .age-display {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .result-card {
                padding: 25px;
            }
            
            .age-box .value {
                font-size: 2.2rem;
            }
        }

        @media (max-width: 576px) {
            .header {
                padding: 22px 15px;
            }
            
            .header h1 {
                font-size: 1.8rem;
                margin-bottom: 6px;
            }
            
            .header p {
                font-size: 0.95rem;
                max-width: 90%;
            }
            
            .input-row {
                flex-direction: column;
                gap: 12px;
            }
            
            .today-date {
                position: static;
                margin: 12px auto 0;
                display: inline-block;
                width: auto;
            }
            
            .section-title {
                font-size: 1.15rem;
            }
            
            .result-card h2 {
                font-size: 1.3rem;
            }
            
            .date-display {
                font-size: 1rem;
            }
            
            .age-box {
                padding: 20px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="today-date" id="todayDate"></div>
            <h1><i class="fas fa-calculator"></i> Elegant Age Calculator</h1>
            <p>Calculate your exact age in years, months and days</p>
        </div>
        
        <div class="calculator">
            <div class="input-section">
                <div class="section-title">
                    <i class="fas fa-user-circle"></i>
                    <span>Your Information</span>
                </div>
                
                <div class="input-group">
                    <label>Date of Birth (DD-MM-YYYY)</label>
                    <div class="input-row">
                        <div class="input-field">
                            <input type="number" id="birthDay" placeholder="Day" min="1" max="31">
                            <i class="fas fa-calendar-day icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="number" id="birthMonth" placeholder="Month" min="1" max="12">
                            <i class="fas fa-calendar icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="number" id="birthYear" placeholder="Year" min="1900" max="2100">
                            <i class="fas fa-calendar-alt icon"></i>
                        </div>
                    </div>
                </div>
                
                <div class="input-group">
                    <label>Calculate Age at Specific Date (DD-MM-YYYY) - Optional</label>
                    <div class="input-row">
                        <div class="input-field">
                            <input type="number" id="targetDay" placeholder="Day" min="1" max="31">
                            <i class="fas fa-calendar-day icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="number" id="targetMonth" placeholder="Month" min="1" max="12">
                            <i class="fas fa-calendar icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="number" id="targetYear" placeholder="Year" min="1900" max="2100">
                            <i class="fas fa-calendar-alt icon"></i>
                        </div>
                    </div>
                </div>
                
                <div id="error" class="error"></div>
            </div>
            
            <button onclick="calculateAges()">
                <i class="fas fa-calculator"></i> Calculate Ages
            </button>
            
            <div id="resultSection" class="result-section">
                <div class="result-card" id="currentAgeResult">
                    <h2><i class="fas fa-birthday-cake"></i> Current Age</h2>
                    <div class="date-display" id="currentDateDisplay"></div>
                    <div class="age-display">
                        <div class="age-box">
                            <div id="currentYears" class="value">0</div>
                            <div class="label">Years</div>
                        </div>
                        <div class="age-box">
                            <div id="currentMonths" class="value">0</div>
                            <div class="label">Months</div>
                        </div>
                        <div class="age-box">
                            <div id="currentDays" class="value">0</div>
                            <div class="label">Days</div>
                        </div>
                    </div>
                    <div class="additional-info" id="nextBirthdayInfo"></div>
                </div>
                
                <div class="result-card" id="targetAgeResult">
                    <h2><i class="fas fa-calendar-check"></i> Age at Specific Date</h2>
                    <div class="date-display" id="targetDateDisplay"></div>
                    <div class="age-display">
                        <div class="age-box">
                            <div id="targetYears" class="value">0</div>
                            <div class="label">Years</div>
                        </div>
                        <div class="age-box">
                            <div id="targetMonths" class="value">0</div>
                            <div class="label">Months</div>
                        </div>
                        <div class="age-box">
                            <div id="targetDays" class="value">0</div>
                            <div class="label">Days</div>
                        </div>
                    </div>
                    <div class="additional-info" id="targetDateInfo"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Display today's date
        function displayTodayDate() {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            document.getElementById('todayDate').textContent = `Today: ${day}-${month}-${year}`;
        }
        
        // Format date as DD-MM-YYYY
        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        }
        
        // Calculate age between two dates
        function calculateAge(birthDate, targetDate) {
            let years = targetDate.getFullYear() - birthDate.getFullYear();
            let months = targetDate.getMonth() - birthDate.getMonth();
            let days = targetDate.getDate() - birthDate.getDate();
            
            if (days < 0) {
                months--;
                // Get the last day of the previous month
                const lastDayOfPrevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
                days += lastDayOfPrevMonth.getDate();
            }
            
            if (months < 0) {
                years--;
                months += 12;
            }
            
            return { 
                years, 
                months, 
                days,
                formattedDate: formatDate(targetDate)
            };
        }
        
        // Calculate days until next birthday
        function daysUntilBirthday(birthDate, today) {
            const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
            if (nextBirthday < today) {
                nextBirthday.setFullYear(today.getFullYear() + 1);
            }
            return Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
        }
        
        // Main calculation function
        function calculateAges() {
            // Get birth date inputs
            const birthDay = parseInt(document.getElementById('birthDay').value);
            const birthMonth = parseInt(document.getElementById('birthMonth').value);
            const birthYear = parseInt(document.getElementById('birthYear').value);
            
            // Get target date inputs
            const targetDay = parseInt(document.getElementById('targetDay').value);
            const targetMonth = parseInt(document.getElementById('targetMonth').value);
            const targetYear = parseInt(document.getElementById('targetYear').value);
            
            const errorElement = document.getElementById('error');
            const resultSection = document.getElementById('resultSection');
            errorElement.textContent = '';
            errorElement.classList.remove('active');
            
            // Validate birth date
            if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
                showError('Please enter a valid birth date');
                return;
            }
            
            if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
                showError('Please enter a valid birth year between 1900 and current year');
                return;
            }
            
            if (birthMonth < 1 || birthMonth > 12) {
                showError('Birth month must be between 1 and 12');
                return;
            }
            
            // Validate birth day based on month
            const birthDaysInMonth = new Date(birthYear, birthMonth, 0).getDate();
            if (birthDay < 1 || birthDay > birthDaysInMonth) {
                showError(`Birth day must be between 1 and ${birthDaysInMonth} for the selected month`);
                return;
            }
            
            const today = new Date();
            const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
            
            // Check if birth date is in the future
            if (birthDate > today) {
                showError('Birth date cannot be in the future');
                return;
            }
            
            // Calculate current age
            const currentAge = calculateAge(birthDate, today);
            
            // Display current age results with date (years first)
            document.getElementById('currentDateDisplay').textContent = 
                `As of ${currentAge.formattedDate}`;
            document.getElementById('currentYears').textContent = currentAge.years;
            document.getElementById('currentMonths').textContent = currentAge.months;
            document.getElementById('currentDays').textContent = currentAge.days;
            
            // Calculate and display next birthday info
            const daysUntilBirthdayValue = daysUntilBirthday(birthDate, today);
            if (daysUntilBirthdayValue === 0) {
                document.getElementById('nextBirthdayInfo').innerHTML = 
                    "<strong>🎉 Happy Birthday! 🎉</strong>";
            } else if (daysUntilBirthdayValue === 1) {
                document.getElementById('nextBirthdayInfo').innerHTML = 
                    "<strong>Your birthday is tomorrow!</strong>";
            } else {
                document.getElementById('nextBirthdayInfo').innerHTML = 
                    `<strong>${daysUntilBirthdayValue} days</strong> until your next birthday`;
            }
            
            // Check if target date was provided
            const hasTargetDate = !isNaN(targetDay) && !isNaN(targetMonth) && !isNaN(targetYear);
            
            if (hasTargetDate) {
                // Validate target date
                if (targetYear < 1900 || targetYear > 2100) {
                    showError('Target year must be between 1900 and 2100');
                    return;
                }
                
                if (targetMonth < 1 || targetMonth > 12) {
                    showError('Target month must be between 1 and 12');
                    return;
                }
                
                // Validate target day based on month
                const targetDaysInMonth = new Date(targetYear, targetMonth, 0).getDate();
                if (targetDay < 1 || targetDay > targetDaysInMonth) {
                    showError(`Target day must be between 1 and ${targetDaysInMonth} for the selected month`);
                    return;
                }
                
                const targetDate = new Date(targetYear, targetMonth - 1, targetDay);
                
                // Check if target date is before birth date
                if (targetDate < birthDate) {
                    showError('Target date cannot be before birth date');
                    return;
                }
                
                // Calculate age at target date
                const targetAge = calculateAge(birthDate, targetDate);
                
                // Display target age results with date (years first)
                document.getElementById('targetDateDisplay').textContent = 
                    `As of ${targetAge.formattedDate}`;
                document.getElementById('targetYears').textContent = targetAge.years;
                document.getElementById('targetMonths').textContent = targetAge.months;
                document.getElementById('targetDays').textContent = targetAge.days;
                
                // Calculate days between birth date and target date
                const daysLived = Math.floor((targetDate - birthDate) / (1000 * 60 * 60 * 24));
                document.getElementById('targetDateInfo').innerHTML = 
                    `<strong>${daysLived} total days</strong> lived at this date`;
                
                document.getElementById('targetAgeResult').style.display = 'block';
            } else {
                document.getElementById('targetAgeResult').style.display = 'none';
            }
            
            resultSection.classList.add('active');
        }
        
        function showError(message) {
            const errorElement = document.getElementById('error');
            errorElement.textContent = message;
            errorElement.classList.add('active');
            document.getElementById('resultSection').classList.remove('active');
        }
        
        // Add input validation as user types
        document.getElementById('birthDay').addEventListener('input', function() {
            if (this.value > 31) this.value = 31;
        });
        document.getElementById('targetDay').addEventListener('input', function() {
            if (this.value > 31) this.value = 31;
        });
        
        document.getElementById('birthMonth').addEventListener('input', function() {
            if (this.value > 12) this.value = 12;
        });
        document.getElementById('targetMonth').addEventListener('input', function() {
            if (this.value > 12) this.value = 12;
        });
        
        document.getElementById('birthYear').addEventListener('input', function() {
            if (this.value.length > 4) this.value = this.value.slice(0, 4);
        });
        document.getElementById('targetYear').addEventListener('input', function() {
            if (this.value.length > 4) this.value = this.value.slice(0, 4);
        });

        // Initialize today's date display
        displayTodayDate();
    </script>
</body>
</html>
