export default class UserApp {
    constructor(renderCallback) {
        this.users = [];
        this.filteredUsers = [];
        this.appElement = document.getElementById("app");
        this.filterElement = document.getElementById("filter");
        this.renderCallback = renderCallback; 
    }

    filterUsers(searchTerm) {
        const lowerCaseTerm = searchTerm.toLowerCase();
        this.filteredUsers = this.users.filter((user) => {
            return (
                user.name.toLowerCase().includes(lowerCaseTerm) ||
                user.username.toLowerCase().includes(lowerCaseTerm) ||
                user.phone.toLowerCase().includes(lowerCaseTerm) ||
                user.address.toLowerCase().includes(lowerCaseTerm) ||
                user.website.toLowerCase().includes(lowerCaseTerm) ||
                user.email.toLowerCase().includes(lowerCaseTerm) ||
                user.company.toLowerCase().includes(lowerCaseTerm)
            );
        });


        if (this.renderCallback) {
            this.renderCallback(this.filteredUsers);
        }
    }

    addFilterEvent() {
        this.filterElement.addEventListener("input", (e) => {
            this.filterUsers(e.target.value);
        });
    }

    init() {
        this.addFilterEvent();
    }
}
