import path from 'path'

export default (request, res) => {
    res.sendFile(
        path.join(__dirname, 'contact.html')
    );
}