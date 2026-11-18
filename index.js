function regjistroStudentin(event) {
    event.preventDefault();

    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;

    // PËRMIRËSIMI 1: kontrollo nëse fushat janë bosh
    if (firstName === '' || lastName === '') {
        alert('Ju lutem plotësoni të dyja fushat!');
        return;
    }

    let studentData = {
        fName: firstName,
        lName: lastName
    };

    console.log(studentData);

    // PËRMIRËSIMI 2: pastro inputet pas regjistrimit
    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
}