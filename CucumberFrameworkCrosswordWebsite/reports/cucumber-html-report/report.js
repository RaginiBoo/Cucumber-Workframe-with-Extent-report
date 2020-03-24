$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Crossword Website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;1"
    },
    {
      "cells": [
        "raginiboobalan@gmail.com",
        "ragiboo@09"
      ],
      "line": 14,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;2"
    },
    {
      "cells": [
        "chikum09@gmail.com",
        "chikum16"
      ],
      "line": 15,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;3"
    },
    {
      "cells": [
        "Bro@gmail.com",
        "Bro123"
      ],
      "line": 16,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"raginiboobalan@gmail.com\" and \"ragiboo@09\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 14335470500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 5266342200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raginiboobalan@gmail.com",
      "offset": 22
    },
    {
      "val": "ragiboo@09",
      "offset": 53
    }
  ],
  "location": "RegisterLogin_Crossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 7032202800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1159237000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"chikum09@gmail.com\" and \"chikum16\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 17249968300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 5731431400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chikum09@gmail.com",
      "offset": 22
    },
    {
      "val": "chikum16",
      "offset": 47
    }
  ],
  "location": "RegisterLogin_Crossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 6792695200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 5102342500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"Bro@gmail.com\" and \"Bro123\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 13871553600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 5316138800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bro@gmail.com",
      "offset": 22
    },
    {
      "val": "Bro123",
      "offset": 42
    }
  ],
  "location": "RegisterLogin_Crossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 6727212600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1162584200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To check if the user is able to search for books to add wishlist and delete wishlist then message to customer care",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-search-for-books-to-add-wishlist-and-delete-wishlist-then-message-to-customer-care",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC02_Search_for_the_books_and_send_message_to_customer_care"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Open the Crossword Home page and login",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User search for the books to add wishlist and delete wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User send a message to customer care",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchMessage_Crossword_Step.user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 9748164600,
  "status": "passed"
});
formatter.match({
  "location": "SearchMessage_Crossword_Step.open_the_Crossword_Home_page_and_login()"
});
formatter.result({
  "duration": 5748055600,
  "status": "passed"
});
formatter.match({
  "location": "SearchMessage_Crossword_Step.user_search_for_the_books_to_add_wishlist_and_delete_wishlist()"
});
formatter.result({
  "duration": 12391247000,
  "status": "passed"
});
formatter.match({
  "location": "SearchMessage_Crossword_Step.user_send_a_message_to_customer_care()"
});
formatter.result({
  "duration": 4534421000,
  "status": "passed"
});
formatter.match({
  "location": "SearchMessage_Crossword_Step.close_the_Browser()"
});
formatter.result({
  "duration": 1470648700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "To check if the user is able to handle slider and scroll",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-handle-slider-and-scroll",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@TC04_Slider_and_Scrolling_functionality"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User Launch the Chrome Application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Open the Crossword Home Page and Login",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User slider the price range",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User scroll the page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SliderScroll_Crossword_Step.user_Launch_the_Chrome_Application()"
});
formatter.result({
  "duration": 9523052100,
  "status": "passed"
});
formatter.match({
  "location": "SliderScroll_Crossword_Step.open_the_Crossword_Home_Page_and_Login()"
});
formatter.result({
  "duration": 5615617300,
  "status": "passed"
});
formatter.match({
  "location": "SliderScroll_Crossword_Step.user_slider_the_price_range()"
});
formatter.result({
  "duration": 6484841000,
  "status": "passed"
});
formatter.match({
  "location": "SliderScroll_Crossword_Step.user_scroll_the_page()"
});
formatter.result({
  "duration": 4144071300,
  "status": "passed"
});
formatter.match({
  "location": "SliderScroll_Crossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1572395200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To check if the user is able to update profile and add new address",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-update-profile-and-add-new-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TC05_Update_profile_and_new_address"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User launch the Chrome Application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Open the crossword Home Page and Login",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User update the profile details",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User add the new address",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.match({
  "location": "ProfileAddress_Crossword_Step.user_launch_the_Chrome_Application()"
});
formatter.result({
  "duration": 9704674899,
  "status": "passed"
});
formatter.match({
  "location": "ProfileAddress_Crossword_Step.open_the_crossword_Home_Page_and_Login()"
});
formatter.result({
  "duration": 8834598400,
  "status": "passed"
});
formatter.match({
  "location": "ProfileAddress_Crossword_Step.user_update_the_profile_details()"
});
formatter.result({
  "duration": 5837907600,
  "status": "passed"
});
formatter.match({
  "location": "ProfileAddress_Crossword_Step.user_add_the_new_address()"
});
formatter.result({
  "duration": 13566649600,
  "status": "passed"
});
formatter.match({
  "location": "ProfileAddress_Crossword_Step.close_The_Browser()"
});
formatter.result({
  "duration": 1828112499,
  "status": "passed"
});
});