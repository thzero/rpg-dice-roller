class CompareOperatorError extends TypeError {
  constructor(operator) {
    super(`Operator "${operator}" is invalid`);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (TypeError.captureStackTrace) {
      TypeError.captureStackTrace(this, CompareOperatorError);
    }

    this.name = 'CompareOperatorError';

    this.operator = operator;
  }
}

export default CompareOperatorError;
