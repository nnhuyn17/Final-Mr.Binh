// Sample customer data (replace this with actual data from your server or database)
const customers = [
    { id: 1, username: 'user1', fullName: 'John Doe', dob: '1990-01-01', position: 'Manager', phoneNumber: '123456789', company: 'ABC Corp' },
    { id: 2, username: 'user2', fullName: 'Jane Smith', dob: '1985-05-15', position: 'Developer', phoneNumber: '987654321', company: 'XYZ Ltd' },
    // Add more customer data as needed
];

// Function to display customer data in the table
function displayCustomerData() {
    const customerTableBody = document.getElementById('customerTableBody');

    customers.forEach(customer => {
        const row = customerTableBody.insertRow();
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.username}</td>
            <td>${customer.fullName}</td>
            <td>${customer.dob}</td>
            <td>${customer.position}</td>
            <td>${customer.phoneNumber}</td>
            <td>${customer.company}</td>
        `;
    });
}

// Call the function to display customer data when the page loads
window.onload = displayCustomerData;
