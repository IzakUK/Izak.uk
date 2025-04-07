document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const cursor = document.getElementById('cursor');

    commandInput.addEventListener('input', updateCursor);
    commandInput.addEventListener('keydown', handleKeydown);

    function updateCursor() {
        const inputWidth = commandInput.value.length;
        const cursorPosition = commandInput.selectionStart;
        cursor.style.left = `${cursorPosition}ch`;
    }

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';
            processCommand(command);
            updateCursor();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            setTimeout(updateCursor, 0);
        }
    }

    function processCommand(command) {
        let response = '';
        let isError = false;

        switch (command.toLowerCase()) {
            case 'help':
                response = 'Available commands:\n- help: Shows this message\n- index: Go to index.html\n- incorrect: Giving you the wrong advice, the ICT Technican\'s worst nightmare\n- clear: Clears the terminal\n- about: The about page\n- tos: The average experience with Terms Of Service pages\n- contact: my contact page for an email, feel free to leave me a message :D\n- comingsoon: The placeholder page for incomplete pages.';
                break;
            case 'index':
                window.location.href = 'index.html';
                return;
	    case 'incorrect':
		window.location.href = 'incorrect.html';
		return;
	    case 'contact':
		window.location.href = 'contact.html';
		return;
	    case 'clear':
		output.innerHTML = '';
		return;
	    case 'about':
		window.location.href = 'about.html';
		return;
	    case 'comingsoon':
		window.location.href = 'comingsoon.html';
		return;
	    case 'tos':
		window.location.href = 'tos.html';
		return;
	    case 'help-fun':
		response = 'Available fun commands:\n- incorrect: the ICT Technican\'s worst nightmare\n- tos: An average experience with most Terms of Service pages out there';
		break;
            default:
                response = `Error: command not found: ${command}. Try Using "Help"`;
                isError = true;
                break;
        }

        const outputLine = document.createElement('div');
        outputLine.textContent = '> ' + command;
        output.appendChild(outputLine);

        const responseLine = document.createElement('div');
        responseLine.textContent = response;
        if (isError) {
            responseLine.classList.add('error');
        }
        output.appendChild(responseLine);

        output.scrollTop = output.scrollHeight;
    }
	
    updateCursor();
});
