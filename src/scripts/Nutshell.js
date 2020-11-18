import { renderNewEventButton } from "./events/EventButton.js";
import { getEvents } from "./events/EventDataProvider.js";

const contentTarget = document.querySelector(".dashboard");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => {
    Nutshell()
})

export const Nutshell = () => {
  // Render all your UI components here
  getEvents()
  renderNewEventButton()
};
