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

getContact(1).then((contact) => {
  contact.id = 1234
  contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
//There are many packages offered by the community such as JQuery, all of which can be found at https://www.npmjs.com/
//There are thousands of packages available, and you can also create your own packages. The commands to install packages are there as well.
