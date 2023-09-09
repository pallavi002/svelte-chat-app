<script>
  import ChatBubble from './ChatBubble.svelte';
</script>

<style>
  /* Add your global styles here */
</style>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat SDK Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>
<div class="text-center font-mono">
<h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">chat@pp</h1>
<p class="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Sometimes it's good to have a self conversation. Use the bottom button to chat with yourself !</p>
</div>

  <div id="chat-container"></div>

  <script src="chat-sdk.js"></script>
  <ChatBubble />
</body>
