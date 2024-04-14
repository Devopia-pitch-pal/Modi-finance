import React from 'react';

export default function Auth() {
  return (
    <div className="card">
        <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h2 id="myAuth">AUTHENTICATION</h2>
        <form>
            {/* Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            
            {/* Password */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required />
            </div>
            
            {/* Phone Number */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" required />
            </div>
    
            {/* Full Name */}
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" required />
            </div>
    
            {/* Date of Birth */}
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dob" required />
            </div>
    
            {/* Address */}
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" required />
            </div>
    
            {/* Employment Status */}
            <div className="mb-3">
                <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
                <select className="form-select" id="employmentStatus" required>
                    <option value="">Select...</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="self-employed">Self-employed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                </select>
            </div>
    
            {/* Marital Status */}
            <div className="mb-3">
                <label htmlFor="maritalStatus" className="form-label" id="myMaritalStatus">Marital Status</label>
                <div className="form-check Status">
                    <input className="form-check-input" type="radio" name="maritalStatus" id="single" value="single" defaultChecked />
                    <label className="form-check-label" htmlFor="single">
                        Single
                    </label>
                </div>
                <div className="form-check Status">
                    <input className="form-check-input" type="radio" name="maritalStatus" id="married" value="married" />
                    <label className="form-check-label" htmlFor="married">
                        Married
                    </label>
                </div>
            </div>
    
            {/* Number of Dependents */}
            <div className="mb-3">
                <label htmlFor="dependents" className="form-label">Number of Dependents</label>
                <input type="number" className="form-control" id="dependents" min="0" required />
            </div>
    
            {/* Investment Experience Level */}
            <div className="mb-3">
                <label htmlFor="investmentExperience" className="form-label">Investment Experience Level</label>
                <select className="form-select" id="investmentExperience" required>
                    <option value="">Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
    
            {/* Risk Tolerance */}
            <div className="mb-3">
                <label htmlFor="riskTolerance" className="form-label">Risk Tolerance</label>
                <select className="form-select" id="riskTolerance" required>
                    <option value="">Select...</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
    
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
  );
}
