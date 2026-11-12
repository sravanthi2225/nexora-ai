import React, { useEffect, useState, useRef } from 'react';

/**
 * AnimatedKPI component smoothly transitions numeric values with easing.
 * Supports currency prefix (₹), percentages (%), and custom formatters.
 */
export default function AnimatedKPI({ value, duration = 650, className = '' }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    // Extract prefix, suffix, and raw number
    const strVal = String(value);
    const prefixMatch = strVal.match(/^[^\d]+/);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    const suffixMatch = strVal.match(/[^\d]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : '';

    // Strip everything except digits and decimal point
    const rawNumStr = strVal.replace(/[^\d.]/g, '');
    const targetNum = parseFloat(rawNumStr);

    if (isNaN(targetNum)) {
      animFrameId = requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      prevValueRef.current = value;
      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
    }

    const prevStr = String(prevValueRef.current).replace(/[^\d.]/g, '');
    const startNum = isNaN(parseFloat(prevStr)) ? targetNum * 0.75 : parseFloat(prevStr);

    let startTime = null;
    let animFrameId = null;

    const hasDecimals = rawNumStr.includes('.');
    const decimalPlaces = hasDecimals ? (rawNumStr.split('.')[1] || '').length : 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Quintic ease out
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = startNum + (targetNum - startNum) * ease;

      // Format with Indian Rupee grouping if prefix is ₹
      let formattedNum;
      if (prefix.includes('₹') || targetNum >= 1000) {
        const rounded = Math.round(current);
        formattedNum = rounded.toLocaleString('en-IN');
      } else if (hasDecimals) {
        formattedNum = current.toFixed(decimalPlaces);
      } else {
        formattedNum = Math.round(current).toString();
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(animate);
      } else {
        prevValueRef.current = value;
      }
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [value, duration]);

  return <span className={`animated-kpi-num ${className}`}>{displayValue}</span>;
}
