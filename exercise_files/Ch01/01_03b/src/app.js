//This is an existing JS file that we will be applying TS onto based on two additional settings in the tsconfig.json file
//Sets parameter type in the function, caused error in second call to getContact since we passed a string instead of a number
/**
 * 
 * @param {number} contactId 
 * @returns
 */
async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

//This function initially had errors since id is assigned a number and birthDate is assigned a Date object.
getContact(1).then((contact) => {
  contact.id = 1234;
  contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
//Note this is how you can convert your JS code to TS code, but for the most part, you will want to write your code in TS from the start
