class Chatbox{
  constructor() {
    this.args = {
      openButton: document.querySelector('.chatbox__button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.send__button')
    }
    this.state = false;
    this.messages = [];
  }

  display(){
    const {openButton, chatBox, sendButton} = this.args;
    openButton.addEventListener('click', ()=> this.toggleState(chatBox))
    sendButton.addEventListener('click', ()=> this.onSendButton(chatBox))
    const node = chatBox.querySelector('input');
    node.addEventListener('keyup', ({key}) => {
      if(key === "Enter"){
        this.onSendButton(chatBox)
      }
    })
  }

  toggleState(chatBox) {
    this.state = !this.state;
    if(this.state){
      console.log("Added");
      chatBox.classList.add("chatbox--active");
    }
    else{
      console.log("remove")
      chatBox.classList.remove('chatbox--active')
    }
  }

  onSendButton(chatbox){
    let textField = chatbox.querySelector('input');
    let text1 = textField.value;
    if(text1 === ""){
      return;
    }
    let msg1 = { name: "User", message: text1 }
    this.messages.push(msg1);

    fetch('/predict', {
      method: 'POST',
      body: JSON.stringify({message:text1}),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(resp => {
      let msg2 = { name: "Bob", message: resp.answer};
      this.messages.push(msg2);
      this.updateChatText(chatbox)
      textField.value = ''

    }).catch((error) => {
        console.error('Error:', error);
        this.updateChatText(chatbox)
        textField.value = ''
      });
  }

  updateChatText(chatbox){
    let html = '';
    this.messages.slice().reverse().forEach(function(item, ) {
      if (item.name === "Bob"){
        html += '<div class="messages__item messages__item--visitor>' + item.message + '</div>'
      }
      else{
        html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
      }
    });
    const chatmessage = chatbox.querySelector('.chatbox__messages');
    chatmessage.innerHTML = html;
  }
}

const chatbox = new Chatbox();
chatbox.display();
