import { useFriends } from "./FriendProvider.js"

// DOM element where friends will be rendered
const contentTarget = document.querySelector(".friends")
const eventHub = document.querySelector(".container")

// Function that renders a collection of friends
const render = friendCollection => {
    contentTarget.innerHTML = `
        ${
            friendCollection.map(friend => {
                return `
                    <div>
                        <input class="friend" name="friend" type="radio" value="${friend.name}">
                        ${friend.name}
                    </div>
                `
            }).join("")
        }
    `
}

eventHub.addEventListener("change", cE => {
    if(cE.target.classList.contains("friend")) {
        const selectedFriend = cE.target.value
        const message = new CustomEvent("friendSelected", {
            detail: {
                friend: selectedFriend
            }
        })
        eventHub.dispatchEvent(message)
    }
})

// Component function for initial rendering of friends
export const FriendList = () => {
    const appStateFriends = useFriends()
    render(appStateFriends)
}

