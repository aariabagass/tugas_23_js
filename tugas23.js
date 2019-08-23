var filtera = () => {
  lineUp = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  scan = lineUp.filter(lineUp => {
    return lineUp > 15;
  })
  console.log(scan)
}
filtera()