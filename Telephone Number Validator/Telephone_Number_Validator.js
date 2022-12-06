function telephoneCheck(str) {
    //define several regexes to match US phone number
  const regex1 = /^(1\s)?\d{3}-\d{3}-\d{4}$/;
  const regex2 = /^(1(\s)?)?\(\d{3}\)(\s)?\d{3}-\d{4}$/;
  const regex3 = /^(1\s)?\d{3}\s\d{3}\s\d{4}$/;
  const regex4 = /^\d{10}$/;
  
  const regexes = [regex1, regex2, regex3, regex4];
  
  //loop trough all regexes
  for (let regex of regexes) {
    if (regex.test(str)) {
      return true
      }
  
  //if one of them matches the phone number
    //return true
    }
    // none of them matches return false
    return false;
  
  }
  
  console.log(telephoneCheck("1(555)555-5555"));