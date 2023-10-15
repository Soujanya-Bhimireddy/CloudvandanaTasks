function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var genderElements = document.getElementsByName("gender");
  var gender = [];
  for (var i = 0; i < genderElements.length; i++) {
    if (genderElements[i].checked) {
      gender.push(genderElements[i].value);
    }
  }
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  // Add your validation logic here

  var popupContent = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender.join(", ")}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
  `;
  document.getElementById("popup").innerHTML = popupContent;
  document.getElementById("popup").style.display = "block";
}

function resetForm() {
  document.getElementById("survey-form").reset();
  document.getElementById("popup").style.display = "none";
}
