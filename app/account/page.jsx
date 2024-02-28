import React from "react";
import AccountLayout from "./layout";

function Account() {
  const accountData = require('/public/data/account.json');
  return (
    <AccountLayout 
      {...accountData}
    />
  );
}

export default Account;
