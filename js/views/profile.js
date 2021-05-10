export class Profile {
    constructor({ firstName, DateofBirth,lastName, email, password, username}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DateofBirth = DateofBirth;
        this.email = email;
        this.password = password;
        this.username = username;
    }
    
    render(tableBody) {
        const element = document.createElement('tr');

        element.innerHTML = `
            <th scope="row">${this.firstName}</th>
            <td>${this.lastName}</td>
            <td>${this.username}</td>
            <td>${this.email}</td>
            <td>${this.DateofBirth}</td>
        `;

        tableBody.append(element);
    }
}