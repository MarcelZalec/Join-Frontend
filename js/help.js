/**
 * Clears the task marker.
 *
 */
function taskMarker() {}

/**
 * Updates the header section with SVG logo and header content.
 */
function headerHTML() {
  document.getElementById("headerForm").innerHTML += /*html*/ `

    <svg id='header-logo' width="101" height="122" viewBox="0 0 101 122" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.6721 0H49.5143V25.4923H71.6721V0Z" fill="#2A3647"/>
    <path d="M49.5142 46.2251H71.6721V82.1779C71.7733 90.8292 69.3112 99.3153 64.5986 106.557C59.9455 113.594 50.963 121.966 34.3446 121.966C16.2434 121.966 5.69286 113.406 0 108.715L13.9765 91.4743C19.533 96.0112 24.885 99.7435 34.4299 99.7435C41.6567 99.7435 44.5372 96.7988 46.2247 94.2307C48.5186 90.6637 49.7052 86.4923 49.6335 82.2464L49.5142 46.2251Z" fill="#2A3647"/>
    <path d="M38.2137 30.1318H16.0559V52.3884H38.2137V30.1318Z" fill="#29ABE2"/>
    <path d="M83.2793 111.522C83.2793 116.265 80.8761 118.815 77.5183 118.815C74.1605 118.815 71.9618 115.785 71.9618 111.762C71.9618 107.739 74.2287 104.554 77.7058 104.554C81.1829 104.554 83.2793 107.687 83.2793 111.522ZM74.5355 111.711C74.5355 114.57 75.6775 116.675 77.6376 116.675C79.5977 116.675 80.7056 114.45 80.7056 111.539C80.7056 108.988 79.6829 106.592 77.6376 106.592C75.5923 106.592 74.5355 108.903 74.5355 111.711Z" fill="#2A3647"/>
    <path d="M87.6768 104.76V118.593H85.2224V104.76H87.6768Z" fill="#2A3647"/>
    <path d="M90.3358 118.593V104.76H93.0629L95.9946 110.461C96.7493 111.952 97.4207 113.483 98.0058 115.049C97.8524 113.337 97.7843 111.368 97.7843 109.177V104.76H100.034V118.593H97.4945L94.5288 112.772C93.7436 111.243 93.0437 109.671 92.4323 108.064C92.4323 109.776 92.5516 111.711 92.5516 114.09V118.576L90.3358 118.593Z" fill="#2A3647"/>
    </svg>



    <h1>Kanban Project Management Tool</h1>
    <div class="headerIcons">
        <div onclick="openDropDownMenu()" class="circlehead" id="userLetters"></div>
        <div id="dropDown-bg" class="dropDown-bg d-none" onclick="closeDropDownMenu()">
            <div id="dropDown"></div>
        </div>
    </div>
  `;
}

/**
 * Navigates to the previous page in the browser history.
 *
 */
function previousPage() {
  window.history.back();
}
