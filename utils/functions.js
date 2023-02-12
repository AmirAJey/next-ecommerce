const symbols = ['!', '@', '$', '_', '-']

export function passwordCheck(password){
  let level = 0
  const pwdLength = password.length
  if (pwdLength >= 8 && pwdLength < 16) level += 1
  else if (pwdLength >= 16) level += 2
  
  let symbolCount = 0
  for (let char of password){
    if (symbols.some(symbol => char === symbol)) symbolCount ++
  }
  level += symbolCount > 1 ? 2 : symbolCount === 1 ? 1 : 0
  return level
}