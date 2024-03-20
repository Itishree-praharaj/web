function days() {
  let year = 2004;
  let month = 2;
  switch (month) {
    case 1:
    case 3:                                         
    case 5:
    case 7:
    case 8:  
    case 10:
    case 12:
      console.log(31);
      break;
    case 4:
    case 6:
    case 11:
    case 9:
      console.log(30);
      break;
    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
        console.log(29);
      else console.log(28);
      break;

    default:
      console.log("Enter a valid month or year");
      break;
  }
}
days();
