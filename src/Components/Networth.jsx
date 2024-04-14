import React, { useState } from 'react';

export default function Networth() {
    const [assets, setAssets] = useState('');
    const [liabilities, setLiabilities] = useState('');
    const [insurance, setInsurance] = useState('');
    const [netWorth, setNetWorth] = useState(null);

    const calculateNetWorth = () => {
        const totalAssets = parseFloat(assets) || 0; // Convert to number and handle NaN
        const totalLiabilities = parseFloat(liabilities) || 0; // Convert to number and handle NaN
        const insuranceValue = parseFloat(insurance) || 0; // Convert to number and handle NaN

        // Calculate net worth using provided logic
        const result = totalAssets - totalLiabilities + insuranceValue;
        setNetWorth(result); // Update state with the result
    };

    return (
        <div className="calculator-container">
            <h1>Net Worth Calculator</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <label htmlFor="assets">Total Assets:</label>
                    <input type="number" id="assets" placeholder="Enter your total assets"
                        value={assets} onChange={e => setAssets(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="liabilities">Total Liabilities:</label>
                    <input type="number" id="liabilities" placeholder="Enter your total liabilities"
                        value={liabilities} onChange={e => setLiabilities(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="insurance">Insurance Plans Value:</label>
                    <input type="number" id="insurance" placeholder="Enter your insurance plan value"
                        value={insurance} onChange={e => setInsurance(e.target.value)} />
                </div>
                <button type="button" onClick={calculateNetWorth}>Calculate Net Worth</button>
            </form>
            {netWorth !== null && <div id="result">
                <h3>Your Net Worth is: ${netWorth.toLocaleString()}</h3>
            </div>}
        </div>
    );
}

