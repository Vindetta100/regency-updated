import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const PaymentCalculator = () => {
  const defaultHomePrice = 1995000;
  const defaultDownPaymentPercentage = 20;
  const defaultInterestRate = 7.0;
  const defaultLoanTerm = 30;

  const [homePrice, setHomePrice] = useState(defaultHomePrice);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(defaultDownPaymentPercentage);
  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [loanTerm, setLoanTerm] = useState(defaultLoanTerm);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalInterest, setPrincipalInterest] = useState(0);
  const [propertyTax, setPropertyTax] = useState(0);
  const [insurance, setInsurance] = useState(0);

  const calculateMonthlyPayment = useCallback(() => {
    const downPaymentAmount = homePrice * (downPaymentPercentage / 100);
    const loanAmount = homePrice - downPaymentAmount;

    if (loanAmount <= 0) {
      setPrincipalInterest(0);
      setMonthlyPayment(0);
      setPropertyTax(homePrice * 0.001 / 12); // Assuming 0.1% annual property tax
      setInsurance(homePrice * 0.0005 / 12); // Assuming 0.05% annual insurance
      return;
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyInterestRate === 0) {
      setPrincipalInterest(loanAmount / numberOfPayments);
    } else {
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      setPrincipalInterest(loanAmount * (numerator / denominator));
    }

    // Estimate property tax (e.g., 0.1% of home price annually)
    const estimatedPropertyTax = homePrice * 0.0012 / 12; // 0.12% annual

    // Estimate insurance (e.g., 0.05% of home price annually)
    const estimatedInsurance = homePrice * 0.0006 / 12; // 0.06% annual

    setPropertyTax(estimatedPropertyTax);
    setInsurance(estimatedInsurance);
    setMonthlyPayment(principalInterest + estimatedPropertyTax + estimatedInsurance);

  }, [homePrice, downPaymentPercentage, interestRate, loanTerm, principalInterest]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [homePrice, downPaymentPercentage, interestRate, loanTerm, calculateMonthlyPayment]);

  useEffect(() => {
    setMonthlyPayment(principalInterest + propertyTax + insurance);
  }, [principalInterest, propertyTax, insurance])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDecimal = (value) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  };

  const downPaymentAmount = homePrice * (downPaymentPercentage / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-6 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-700 max-w-4xl mx-auto my-12"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          borderRadius: 'inherit',
          boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.05)'
        }}>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center tracking-tight leading-tight">
          Your <span className="text-[#D4AF37]">Luxury</span> Payment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Home Price Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700"
          >
            <label className="text-gray-300 text-lg font-semibold mb-2">Home Price</label>
            <p className="text-4xl font-bold text-[#F59E0B] tracking-wide">
              {formatCurrency(homePrice)}
            </p>
          </motion.div>

          {/* Monthly Payment Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700"
          >
            <label className="text-gray-300 text-lg font-semibold mb-2">Estimated Monthly Payment</label>
            <p className="text-4xl font-bold text-[#D4AF37] tracking-wide">
              {formatCurrency(monthlyPayment)}
            </p>
          </motion.div>
        </div>

        {/* Input Sliders */}
        <div className="space-y-8 mb-10">
          {/* Down Payment Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <label htmlFor="downPayment" className="block text-gray-300 text-lg font-semibold mb-4">
              Down Payment: <span className="text-white">{downPaymentPercentage}%</span>
              <span className="ml-2 text-[#F59E0B]">{formatCurrency(downPaymentAmount)}</span>
            </label>
            <input
              type="range"
              id="downPayment"
              min="0"
              max="50"
              step="5"
              value={downPaymentPercentage}
              onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
          </motion.div>

          {/* Interest Rate Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <label htmlFor="interestRate" className="block text-gray-300 text-lg font-semibold mb-4">
              Interest Rate: <span className="text-white">{formatDecimal(interestRate)}%</span>
            </label>
            <input
              type="range"
              id="interestRate"
              min="3.00"
              max="10.00"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
          </motion.div>

          {/* Loan Term Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <label htmlFor="loanTerm" className="block text-gray-300 text-lg font-semibold mb-4">
              Loan Term: <span className="text-white">{loanTerm} Years</span>
            </label>
            <div className="flex justify-between space-x-4">
              {[15, 20, 25, 30].map((term) => (
                <motion.button
                  key={term}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-lg transition-all duration-300
                    ${loanTerm === term
                      ? 'bg-[#D4AF37] text-gray-900 shadow-md'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                >
                  {term} Yrs
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Payment Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-5 border-b border-gray-700 pb-3">
            Payment Breakdown
          </h3>
          <ul className="space-y-3 text-lg font-medium text-gray-200">
            <li className="flex justify-between items-center">
              <span>Principal & Interest:</span>
              <span className="text-[#F59E0B]">{formatCurrency(principalInterest)}</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Estimated Property Tax:</span>
              <span className="text-gray-400">{formatCurrency(propertyTax)}</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Estimated Insurance:</span>
              <span className="text-gray-400">{formatCurrency(insurance)}</span>
            </li>
            <li className="flex justify-between items-center pt-3 border-t border-gray-700 mt-3">
              <span className="text-white text-xl font-bold">Total Monthly Payment:</span>
              <span className="text-[#D4AF37] text-xl font-bold">{formatCurrency(monthlyPayment)}</span>
            </li>
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-500 text-sm mt-8 text-center"
        >
          Disclaimer: This calculator provides estimates for informational purposes only and does not constitute a loan offer.
          Actual payments may vary.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PaymentCalculator;
