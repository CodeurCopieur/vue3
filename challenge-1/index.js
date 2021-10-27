var personnes = [
  {
      "gender": "female",
      "name": {
          "title": "Mrs",
          "first": "Elizabeth",
          "last": "Ambrose"
      },
      "location": {
          "street": {
              "number": 4954,
              "name": "Tecumseh Rd"
          },
          "city": "Hudson",
          "state": "Alberta",
          "country": "Canada",
          "postcode": "N7H 5G1",
          "coordinates": {
              "latitude": "-67.5091",
              "longitude": "66.5485"
          },
          "timezone": {
              "offset": "+1:00",
              "description": "Brussels, Copenhagen, Madrid, Paris"
          }
      },
      "email": "elizabeth.ambrose@example.com",
      "login": {
          "uuid": "50777e60-394d-4951-b933-a2f78599065d",
          "username": "bluemouse267",
          "password": "christop",
          "salt": "Ms1KvgCJ",
          "md5": "f0fdd5f0811abcbe8d26f871e4dce7dc",
          "sha1": "85dfd62ef93278b153a6fca54692f72c983fcbb7",
          "sha256": "f5f6a95060d7d2bcf4936df32a6d7a1dadeac059bdf10d0b3867db3c32c16a20"
      },
      "dob": {
          "date": "1995-11-20T00:31:55.940Z",
          "age": 26
      },
      "registered": {
          "date": "2010-12-21T12:23:45.450Z",
          "age": 11
      },
      "phone": "366-033-8063",
      "cell": "205-901-7452",
      "id": {
          "name": "",
          "value": null
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/49.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
      },
      "nat": "CA"
  },
  {
      "gender": "male",
      "name": {
          "title": "Mr",
          "first": "Batista",
          "last": "Silveira"
      },
      "location": {
          "street": {
              "number": 1153,
              "name": "Rua Das Flores "
          },
          "city": "Eunápolis",
          "state": "Pará",
          "country": "Brazil",
          "postcode": 78657,
          "coordinates": {
              "latitude": "-86.0633",
              "longitude": "45.8313"
          },
          "timezone": {
              "offset": "+9:30",
              "description": "Adelaide, Darwin"
          }
      },
      "email": "batista.silveira@example.com",
      "login": {
          "uuid": "5308f02b-7838-4b48-8114-2fe1349c0819",
          "username": "ticklishmeercat723",
          "password": "hjkl",
          "salt": "aGeJRlo8",
          "md5": "a7e9382c40f664d1aec39f43a02de4fc",
          "sha1": "e6238172483ef79815aa6e2d3a6d55a7e8faccd0",
          "sha256": "418c665cd8f8f42e34c7825b0d7e327ab22f56d40c8d7d5dd0c0822863d6c393"
      },
      "dob": {
          "date": "1978-03-16T14:00:38.384Z",
          "age": 43
      },
      "registered": {
          "date": "2002-11-14T17:14:04.368Z",
          "age": 19
      },
      "phone": "(53) 5553-2892",
      "cell": "(04) 3893-4079",
      "id": {
          "name": "",
          "value": null
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/50.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
      },
      "nat": "BR"
  },
  {
      "gender": "male",
      "name": {
          "title": "Mr",
          "first": "Blaise",
          "last": "Adam"
      },
      "location": {
          "street": {
              "number": 3056,
              "name": "Rue de la Baleine"
          },
          "city": "Courrendlin",
          "state": "Valais",
          "country": "Switzerland",
          "postcode": 9476,
          "coordinates": {
              "latitude": "37.5062",
              "longitude": "-115.1853"
          },
          "timezone": {
              "offset": "+9:00",
              "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
          }
      },
      "email": "blaise.adam@example.com",
      "login": {
          "uuid": "3f7d9b90-8858-4986-bdf3-075df560ce31",
          "username": "silverfish710",
          "password": "ripken",
          "salt": "LHwjGA7R",
          "md5": "d3ea2282a04ad2ab7a85e482ffb1a5fb",
          "sha1": "e1c7928d4f738199929011bbb42b925eb5f7ee9c",
          "sha256": "39e15f13ec6c01ac1fc1646e9b020bef04c5ce49e90eac5da71025eae981098a"
      },
      "dob": {
          "date": "1954-07-03T23:24:58.883Z",
          "age": 67
      },
      "registered": {
          "date": "2003-01-18T13:41:59.518Z",
          "age": 18
      },
      "phone": "079 493 00 77",
      "cell": "079 283 03 14",
      "id": {
          "name": "AVS",
          "value": "756.3512.8312.75"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/29.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
      },
      "nat": "CH"
  }
]


const app = {
  data() {
      return {
          personnes,
          filtreNom: '',
          h: true,
          f:true,
          t:true,
          mef: false,
          taille: 2
      }
  }
};

Vue.createApp(app).mount("#app");