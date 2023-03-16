<script lang="ts">
    import { SvelteComponent } from "svelte";
  import { element } from "svelte/internal";
    

  
    interface Task {
    id: number;
    name: string;
    statut: boolean;
  }
  
  let tasks: Task[] =[
    {
      id: 1,
      name: 'Faire le tp Svelte',
      statut: false,
    },
    {
      id: 2,
      name: 'Faire le tp Svelte 2',
      statut: false,
    }
  ]

  $: tasksLeftCount = tasks.filter(task => task.statut == false );
  console.log(tasksLeftCount);
  function Completion() {
    // let tasksChecked = tasks;
    // tasksChecked.forEach(element => {
    //     element.statut = true;
    // });
    // tasks = tasksChecked;
    tasks = tasks.map(task => ({...task, statut:true}));
  };
 

  </script>
  
  <main>
    <h2>Nouvelle Tâche</h2>
    <form action="">
        <input type="text" name="" id="">
        <button type="submit" >Ajouter une tâche</button>
    </form>
    
    <ul>
      {#each tasks as task}
        <li>
        <input class="checkbox" type="checkbox" name="task" id="{task.name}" bind:checked={task.statut}>
        <label for="task" >{task.name}</label>
        </li>
      {/each}
      <button on:click={Completion} disabled={tasksLeftCount.length === 0}>Compléter toutes les tâches</button>
      {#if tasksLeftCount.length === 0}
	    <p>Félicitation vous avez términé !</p>
        {:else}
        <p>{tasksLeftCount.length} tâche(s) restante(s)</p>
      {/if}
      
    </ul>
  </main>
  
  <style>
    li{
        list-style-type: none;
    }
    input:checked ~ label{
        text-decoration : line-through;
    }
    

  </style>