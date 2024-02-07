$('#submitButton').click(function (event) {
    // Zatrzymaj domyślną akcję formularza (przeładowanie strony)
    event.preventDefault();

    // Zbierz dane z formularza
    const formData = {
      firstName: $('#validationCustom01').val(),
      lastName: $('#validationCustom02').val(),
      email: $('#validationCustom03').val(),
      password: $('#validationCustom04').val(),
      confirmPassword: $('#validationCustom05').val(),
    };

    // Wyślij dane do API
    $.ajax({
      type: 'POST',
      url: 'https://localhost:7055/api/Auth/register', // Zastąp 'adres-twojego-api' właściwym adresem API
      contentType: 'application/json',
      data: JSON.stringify(formData),
      success: function (response) {
        console.log('Zalogowano pomyślnie:', response);
        document.getElementById("response").innerHTML = 'Dane wysłane pomyślnie:' + response;
      },
      error: function (error) {
        console.error('Błąd logowania:', error);
        document.getElementById("response").innerHTML = 'zmaściło się:' + error;
      }
    });
  });