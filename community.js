document.getElementById('send-message').addEventListener('click', function() {
    const message = document.getElementById('message-input').value;
    if (message.trim() !== "") {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById('message-input').value = ""; // Limpiar el input
    }
});
