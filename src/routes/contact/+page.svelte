<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { db } from "$lib/firebase";
  import { collection, addDoc } from "firebase/firestore";

  let email: string = "";
  let subject: string = "";
  let message: string = "";

  const handleSubmit = async () => {
    try {
      const document = await addDoc(collection(db, "contact"), {
        email,
        subject,
        message,
      });
    } catch (e) {
      console.log(e);
    }

    alert("You've sent a contact form. Stay patient :)");
  };
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Contact Koll Potato" />
</svelte:head>

<div
  class="px-6 w-full mt-20 md:mt-40 h-fit grid tiny:px-16 sm:px-24 lg:px-[520px]"
>
  <form
    class="flex w-full flex-col gap-5"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="flex flex-col gap-2">
      <label class="text-black font-medium dark:text-white" for="email">
        Email
      </label>
      <input class="input dark:outline-white" type="email" id="email" bind:value={email} />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-black font-medium dark:text-white" for="subject">
        Subject
      </label>
      <input class="input dark:outline-white" type="text" id="subject" bind:value={subject} />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-black font-medium dark:text-white" for="message">
        Message
      </label>
      <textarea class="input dark:outline-white" id="message" rows="5" bind:value={message} />
    </div>

    <Button type="submit">Submit</Button>
  </form>
</div>

<style>
  .input {
    @apply p-3 px-4 bg-transparent rounded-md outline outline-2;
  }
</style>
