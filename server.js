const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: 'Laki' },
    { id: 2, name: 'Adolfo' },
    { id: 3, name: 'Mahinay' },
    { id: 4, name: 'Tanglao'}
];

app.use(express.json());

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users.splice(userIndex, 1); 
        res.status(200).json({ message: `User with id ${id} deleted successfully` });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
