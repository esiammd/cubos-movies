function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    const billions = value / 1_000_000_000;
    return `$${billions.toFixed(billions % 1 === 0 ? 0 : 2)}B`;
  } else if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `$${millions.toFixed(millions % 1 === 0 ? 0 : 2)}M`;
  } else {
    return `$${value}`;
  }
}

export default formatCurrency;
