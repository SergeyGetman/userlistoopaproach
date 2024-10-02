export default class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = `${address.street}, ${address.city}`;
        this.phone = phone;
        this.website = website;
        this.company = company.name;

    }



    createCard() {
        return `
        <div class="card">
        <div><img src=../img/user.svg height="50px" width="50px">q</div>
            <h2>${this.name} (${this.username})</h2>
            <p><strong>Email:</strong> ${this.email}</p>
            <p><strong>Phone:</strong> ${this.phone}</p>
            <p><strong>Address:</strong> ${this.address}</p>
            <p><strong>Website:</strong> <a href="http://${this.website}" target="_blank">${this.website}</a></p>
            <p><strong>Company:</strong> ${this.company}</p>
        </div>
        `;
    }
}