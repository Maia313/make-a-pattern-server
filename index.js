const path = require('path');
const express = require("express");
const history = require('connect-history-api-fallback');

const app = express();

app.use(history({index: '/index.html'}))

app.get('/api/parts', (req, res) =>
  res.send({
    tops: [
      {
        id: 1,
        description:"A pattern with 9 filled circles - 3rows and 3columns with decorations within.",
        title: "Nine circles filled",
        src: "/api/images/top-circles.png",
        type: "tops",
        color: "grey"
      },
      {
        id: 2,
        description: "A pattern made of rectangles randomly placed.",
        title: "Random rectangles",
        src: "/api/images/top-space.png",
        color: "grey",
        type: "tops",
      },
      {
        id: 3,
        description: "A striped pattern filled with wavy lines.",
        title: "Waves on stripes",
        src: "/api/images/top-waves.png",
        type: "tops",
        color: "grey"
      },
      {
        id: 4,
        description:"A simple pattern with triangles and contrasting bluemarine lines",
        title: "Ascending triangles",
        src: "/api/images/top-triangle.png",
        type: "tops",
        color: "grey"
      },
      {
        id: 5,
        description:"A pattern with 9 empty circles, with different border sizes - 3rows and 3columns with decorations within. ",
        title: "Nine circles empty",
        src: "/api/images/top-circle-gradient.png",
        type: "tops",
        color: "grey"
      }
    ],
    sides: [
      {
        id: 1,
        description: "A simple pattern with wavy lines",
        title: "Wavy",
        src: "/api/images/side-wavy.png",
        type: "sides",
        color: "grey"
      },
      {
        id: 2,
        description: "A simple pattern with triangles and contrasting bluemarine lines",
        title: "Ascending triangles",
        src: "/api/images/side-triangle.png",
        type: "sides",
        color: "grey"
      },
      {
        id: 3,
        description: "A pattern with 9 filled circles - 3rows and 3columns with decorations within.",
        title: "Nine circles filled",
        src: "/api/images/side-circles.png",
        type: "sides",
        color: "grey"
      },
      {
        id: 4,
        description: "A pattern made of rectangles randomly placed.",
        title: "Random rectangles",
        src: "/api/images/side-space.png",
        type: "sides",
        color: "grey"
      },
      {
        id: 5,
        description: "A striped pattern filled with wavy lines.",
        title: "Waves on stripes",
        src: "/api/images/side-waves.png",
        type: "sides",
        color: "grey"
      }
    ],
    centers: [
      {
        id: 1,
        description: "A filled simple hexagon",
        title: "Filled hexagon",
        src: "/api/images/center-hexagon.png",
        type: "centers",
        color: "grey"
      },
      {
        id: 2,
        description: "An empty simple rectangle",
        title: "Empty rectangle",
        src: "/api/images/center-rect-empty.png",
        type: "centers",
        color: "grey"
      },
      {
        id: 3,
        description: "A filled simple rectangle",
        title: "Filled rectangle",
        src: "/api/images/center-rect.png",
        type: "centers",
        color: "grey"
      },
      {
        id: 4,
        description: "An empty simple hexagon",
        title: "Empty hexagon",
        src: "/api/images/center-hexagon-empty.png",
        type: "centers",
        color: "grey"
      },
      {
        id: 5,
        description: "An empty simple circle",
        title: "Empty circle",
        src: "/api/images/center-circle-empty.png",
        type: "centers",
        color: "grey"
      }
    ],
    bases: [
      {
        id: 1,
        description: "A pattern with 9 empty circles, with different border sizes - 3rows and 3columns with decorations within. ",
        title: "Nine circles empty",
        src: "/api/images/base-circle-gradient.png",
        type: "bases",
        color: "grey"
      },
      {
        id: 2,
        description: "A pattern with 9 circles - 3rows and 3columns with decorations within.",
        title: "Nine circles filled",
        src: "/api/images/base-circles.png",
        type: "bases",
        color: "grey"
      },
      {
        id: 3,
        description: "A striped pattern filled with wavy lines.",
        title: "Waves on stripes",
        src: "/api/images/base-waves.png",
        type: "bases",
        color: "grey"
      },
      {
        id: 4,
        description: "A pattern made of rectangles randomly placed.",
        title: "Random rectangles",
        src: "/api/images/base-space.png",
        type: "bases",
        color: "grey"
      },
      {
        id: 5,
        description: "A simple pattern with triangles and contrasting bluemarine lines",
        title: "Ascending triangles",
        src: "/api/images/base-triangle.png",
        type: "bases",
        color: "grey"
      }
    ]
  })
);

app.post('/api/library', (req, res) => 
  setTimeout(() => res.status(201).send(), 800)
);

app.post('/api/sign-in', (req, res) => res.status(200).send());

app.use('/api/images', express.static('images'));

app.use('/', express.static('dist', {index: 'index.html'}))

app.listen(8081, () => console.log('Server listening on port 8081!'));
