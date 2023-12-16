const accountId = 14453   // const cannot change...it not change once its writteen
let accountEmail = "sido@google.com"
var accountpassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2

accountEmail = "hc@hc.com"
accountpassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountpassword, accountCity, accountState]);
