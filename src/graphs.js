const socialNetwork = {
  Maxim: { name: 'Maxim', relations: ['Giulara', 'Vladimir', 'Valera'] },
  Giulara: { name: 'Giulara', relations: ['Julia'] },
  Julia: { name: 'Julia', relations: [] },
  Valera: { name: 'Valera', relations: [] },
  Vladimir: { name: 'Vladimir', relations: ['Denis'] },
  Denis: { name: 'Denis', relations: ['Marina'] },
  Marina: { name: 'Marina', relations: [] },
};

/**
 * Умеет печатать объект, у которого есть поле "name"
 * @param {Object} person
 * @returns void
 */
const print = (person) => console.log(person.name);

/**
 * Обход графа в ширину
 */
function bfs() {
  let queue = [socialNetwork.Maxim.name];
  while (queue.length) {
    const current = queue.shift();
    const person = socialNetwork[current];
    print(person);
    queue = queue.concat(person.relations);
  }
}

// bfs();

const socialNetwork2 = [
  {
    name: 'Maxim',
    relations: [
      {
        name: 'Giulara',
        relations: [
          {
            name: 'Julia',
            relations: [],
          },
        ]
      },
      {
        name: 'Vladimir',
        relations: [
          {
            name: 'Denis',
            relations: [
              {
                name: 'Marina',
                relations: [],
              },
            ],
          },
        ]
      },
      {
        name: 'Valera',
        relations: [],
      }
    ]
  }
];

/**
 * Обход графа в глубину
 * @param {Array} graph
 */
function dfs(graph) {
  const handle = (item) => {
    print(item);
    if (item.relations.length) {
      item.relations.forEach(handle);
    }
  };

  handle(graph[0]);
}

dfs(socialNetwork2);
