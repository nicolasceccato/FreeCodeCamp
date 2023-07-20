// Configuração
function phoneticLookup(val) {
    let result = "";

    // Altere apenas o código abaixo desta linha
    /* switch(val) {
       case "alpha":
         result = "Adams";
         break;
       case "bravo":
         result = "Boston";
         break;
       case "charlie":
         result = "Chicago";
         break;
       case "delta":
         result = "Denver";
         break;
       case "echo":
         result = "Easy";
         break;
       case "foxtrot":
         result = "Frank";
     }
   */
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
        "": undefined
    }
    result = lookup[val];
    // Altere apenas o código acima desta linha
    return result;
}

phoneticLookup("charlie");