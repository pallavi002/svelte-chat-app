<script>
  let isModalOpen = false;
  let newMessage = '';
  let messages = [];

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  function sendMessage() {
    if (newMessage.trim() !== '') {
      messages = [...messages, { text: newMessage, type: 'user' }];
      newMessage = ''; // Clear the input field
    }
  }
</script>

<div class="fixed bottom-4 right-4 bg-gray-200 p-2 pl-6 pr-6 rounded-full text-teal-800 cursor-pointer" on:click={openModal}>
  <b>+</b>
</div>

{#if isModalOpen}
  <div class="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-lg font-semibold bg-yellow-500 p-2 text-white rounded-lg">Chat Support</h2>
      <button class="text-gray-500 hover:text-gray-700 focus:outline-none" on:click={closeModal}>
        X
      </button>
    </div>
    <div class="overflow-y-auto max-h-60">
      {#each messages as message, index}
        <div class="mb-2 p-2 bg-yellow-50 rounded-lg">{message.text}</div>
      {/each}
    </div>
    <div class="mt-4 flex">
      <input type="text" class="flex-grow border rounded-lg px-3 py-2 focus:outline-none" placeholder="Type your message..." bind:value={newMessage} on:keyup={(event) => {if (event.key === 'Enter') sendMessage();}} />
      <button class="ml-2 text-white bg-yellow-300 rounded-lg px-4 py-2 hover:bg-yellow-200 focus:outline-none" on:click={sendMessage}>
        Send
      </button>
    </div>
  </div>
{/if}

<style>

</style>
