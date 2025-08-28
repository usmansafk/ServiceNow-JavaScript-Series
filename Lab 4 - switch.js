var str = "Hello World";
var lang = "Korean";

switch (lang) {
  case "Arabic":
    str = "مرحبا بالعالم";
    break;

  case "Urdu":
    str = "ہیلو ورلڈ";
    break;

  case "Korean":
    str = "안녕하세요 세계";
    break;

  default:
    str = "Hello World";
}

gs.info("Hello World in " + lang + " is " + str);
