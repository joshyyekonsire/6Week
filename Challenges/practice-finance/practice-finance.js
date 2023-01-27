function futureValue(presentValue, interestRate, periods, payments) {
  var futureValue =
    (presentValue * (interestRate++) ** periods) + (payments * periods);
  console.log(futureValue);
}

futureValue(100, 0, 1);
// https://groww.in/blog/essential-mathematics-investing
