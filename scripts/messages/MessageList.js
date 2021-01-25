import { getMessagesByFriend } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const friendListSection = document.querySelector(".friends")
const eventHub = document.querySelector(".container")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    render([])
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

// Listen for when a friend is selected
eventHub.addEventListener("friendSelected", e => {
    const friendName = e.detail.friend
    const messages = getMessagesByFriend(friendName)
    render(messages)
})

