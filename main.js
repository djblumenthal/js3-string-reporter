//phone validation
var userphone = prompt("gimme dem digits yo! dont ferget ta hyfenate, like 818-818-8888. it aint spam!!");
alert(userphone.length===12 && userphone.charAt(3) === "-" && userphone.charAt(7) === "-");

// DOB validation
var userdob = prompt("how about your DOB e.g. mm/dd/yy.");
alert(userdob.length===8 && userdob.charAt(2) === "/" && userphone.charAt(5) === "/");

// zipcode validation
var userzipcode = prompt("what's your zipcode? 80000 OR 80000-9000");
alert(userzipcode.length===5 || (userzipcode.length===10 && userzipcode.charAt(5)==="-"));

// US state validation
var userstate = prompt("what state are you in? give me the two digit abbreviation, i don't have time for the full name");
alert(userstate.length===2 && userstate.substring(0,2) === userstate.toUpperCase());

// married validation
var usermarried = prompt("are you married?");
alert(usermarried.toLowerCase() === "yes" || usermarried.toLowerCase() === "no");