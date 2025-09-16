import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num)
}

export function formatPercentage(num: number): string {
  return `${num.toFixed(1)}%`
}

export function calculateCompoundInterest(
  principal: number,
  rate: number,
  time: number,
  frequency: number = 1
): number {
  return principal * Math.pow(1 + rate / frequency, frequency * time)
}

export function generateGrowthData(
  principal: number,
  rate: number,
  years: number
): Array<{ year: number; value: number }> {
  const data = []
  for (let i = 0; i <= years; i++) {
    data.push({
      year: i,
      value: calculateCompoundInterest(principal, rate / 100, i),
    })
  }
  return data
}
